const https = require('https');
const fs = require('fs');
const path = require('path');

const HOSTNAME = 'api.github.com';
const REPO_URL = '/repos/joystream/design';
const SAVE_FILE_PATH = path.join(__dirname, '../data/pages/brand/assets-full.json');

// https://api.github.com/repos/joystream/design/git/trees/039e61cbab10c221e9a226b3ee49b262605f2d5d
// https://api.github.com/repos/joystream/design/contents/Assets-full/Illustrations

const get = (path, options) => {
  return new Promise((resolve, reject) => {
    const req = https
      .request(
        {
          method: 'GET',
          hostname: HOSTNAME,
          path: encodeURI(REPO_URL + path),
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0',
          },
          ...options,
        },
        res => {
          let data = '';
          res.on('data', chunk => (data += chunk));
          res.on('end', () => resolve(JSON.parse(data)));
        }
      )
      .on('error', err => {
        reject(err);
      });

    req.end();
  });
};

const filterByTypes = (data, allowed = []) => {
  return data.filter(({ type }) => allowed.includes(type));
};

const saveJsonData = data => {
  const fileCommentary =
    'This file was created using `npm run fetch-assets-data`.' +
    'It fetches assets data from joystream/design repo.' +
    'If files change there, is should be re-run.';

  return fs.writeFile(SAVE_FILE_PATH, JSON.stringify({ fileCommentary, data }, null, 2), 'utf8', err => {
    if (err) throw err;
  });
};

const getAllData = async () => {
  const logo = await get('/contents/logo/logo/SVG');
  const logoIcon = await get('/contents/logo/logo icon/SVG');
  const descriptiveIcons = await get('/contents/icons/new-icons/SVG');
  const systemIcons = await get('/contents/icons/system-icons/SVG/line');
  const illustrations = await get('/contents/illustrations/SVG');
  const twitterCovers = await get('/contents/social-media/twitter/covers/SVG');
  const blogCovers = await get('/contents/blog/covers/SVG');

  return {
    illustrations: filterByTypes(illustrations, ['file']),
    descriptiveIcons: filterByTypes(descriptiveIcons, ['file']),
    systemIcons: filterByTypes(systemIcons, ['file']),
    logo: filterByTypes(logo, ['file']),
    twitterCovers: filterByTypes(twitterCovers, ['file']),
    blogCovers: filterByTypes(blogCovers, ['file']),
    logoIcon: filterByTypes(logoIcon, ['file']),
  };
};

getAllData().then(data => saveJsonData(data));
