import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import ClipboardJS from 'clipboard';

import './style.scss';

import { ReactComponent as CopyLink } from '../../../assets/svg/copylink.svg';
import { ReactComponent as Expand } from '../../../assets/svg/expand.svg';
import { ReactComponent as Check } from '../../../assets/svg/optioncheck.svg';
import { ReactComponent as Notic } from '../../../assets/svg/banner_warning_disable.svg';
import { ReactComponent as NoticEnable } from '../../../assets/svg/banner_warning_enable.svg';

import QuartersListData from '../QuartersListData';
import TooltipPanel from '../../Tooltip';
import Banner from '../../Banner';
import scrollToActiveElement from '../../../utils/scrollToActiveElement';

const SelectOptions = ({ options, sendData, value }) => {
  const [isActive, setIsActive] = useState(false);
  const [isSelect, setIsSelect] = useState(value);

  useEffect(() => {
    setIsSelect(value);
  }, [value]);

  const onSelectQuarters = index => {
    setIsSelect(index);
    sendData(options[index].period);
  };

  if (options.length === 0 || isSelect === -1)
    return (
      <>
        <div className={cn('Quarters__options-wrapper', {})} role="presentation">
          <div className={'Quarters__options-item__label'}>
            <div className="Quarters__options-item__name"></div>
            <div className="Quarters__options-item__period">Loading ....</div>
          </div>
          <div className="Quarters__expand__icon">
            <Expand className="Quarters__expand-icon" />
          </div>
          <div className="Quarters__options__dropdown"></div>
        </div>
      </>
    );
  return (
    <>
      <div
        className={cn('Quarters__options-wrapper', {
          'Quarters__options-wrapper--active': isActive,
        })}
        onClick={() => setIsActive(prev => !prev)}
        role="presentation"
      >
        <div className={'Quarters__options-item__label'}>
          <div className="Quarters__options-item__name">{options[isSelect].name}</div>
          <div className="Quarters__options-item__period">
            {options[isSelect].period.replace(/\.json/g, '')}
            {isSelect === 0 ? ' (Current)' : ' (Old)'}
          </div>
        </div>
        <div className="Quarters__expand__icon">
          <Expand
            className={cn('Quarters__expand-icon', {
              'Quarters__expand-icon--active': isActive,
            })}
          />
        </div>
        <div
          className={cn('Quarters__options__dropdown', {
            'Quarters__options__dropdown--active': isActive,
          })}
        >
          {options.map((label, index) => {
            return (
              <div
                role="button"
                key={index}
                className={cn('Quarters__options-item', {
                  'Quarters__options-item--light': index % 2 === 1,
                  'Quarters__options-item--active': isSelect === index,
                })}
                onClick={() => onSelectQuarters(index)}
                onKeyPress={() => onSelectQuarters(index)}
                tabIndex={0}
              >
                <div className="Quarters__options-item__label">
                  <div className="Quarters__options-item__name">{label.name}</div>
                  <div className="Quarters__options-item__period">
                    {label.period.replace(/\.json/g, '')}
                    {index === 0 ? ' (Current)' : ' (Old)'}
                  </div>
                </div>
                {isSelect === index ? (
                  <div className="Quarters__expand__icon">
                    <Check className="Quarters__options__check-icon" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Quarters = ({ names, gitLoading, gitError, data, file, value, selectGlossary, setSelect, scrollPosition }) => {
  const [oldVersionBanner, setOldVersionBanner] = useState(false);
  const [selectValue, setSelectValue] = useState(value);
  const [copyState, setCopyState] = useState(false);
  const [quartersSelects, setQuartersSelects] = useState([]);

  const { t } = useTranslation();

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      const originalURL = window.location.href;
      if (originalURL.lastIndexOf('.json') !== -1) {
        const modifiedURL = originalURL.substring(0, originalURL.lastIndexOf('.json') + 5);
        navigator.clipboard.writeText(modifiedURL + '#head');
      } else {
        navigator.clipboard.writeText(originalURL);
      }
    }
    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 2000);
  };

  const getFileName = res => {
    file(res);
    const index = quartersSelects.findIndex(item => item.period === res);

    setSelectValue(index);
  };

  useEffect(() => {
    if (names && !gitLoading && !gitError) {
      setQuartersSelects(
        names.fileNames.reverse().map((name, index) => ({
          name: 'Version ' + (names.fileNames.length - index).toString(),
          period: name,
        }))
      );

      if (value === 0) {
        setOldVersionBanner(false);
      } else {
        setOldVersionBanner(true);
      }
    }
  }, [gitError, gitLoading, names, value]);

  if (typeof window !== 'undefined') {
    const initfileName = new URL(window.location.href);
    if (initfileName.hash.split('#')[1] === 'undefined' && names) {
      if (names.fileNames[0]) file(names.fileNames[names.fileNames.length - 1]); /// init value
    } else if (initfileName.hash.split('#')[2] === 'head') {
      scrollToActiveElement('select_quater');
    }
  }

  if (quartersSelects.length === 0)
    return (
      <div className="Quarters" id="select_quater">
        <div className="Quarters__form-wrapper">
          <div className="Quarters__form">
            <div>
              <SelectOptions
                className="Quarters__form__select"
                options={quartersSelects}
                sendData={getFileName}
                value={value}
                t={t}
              />
            </div>
            <Button className="Quarters__form__button btn" name="subscribe">
              Loading ...
              <CopyLink className="Quarters__form__linkicon" />
            </Button>
          </div>
          <div></div>
        </div>
        <QuartersListData isLoading={true} />
        <div className="Quarters__bottom__banner">
          <Banner
            icon={<Notic />}
            className="Quarters__bottom__banner__item"
            title={'Disclaimer'}
            information={
              "The information provided in the roadmap document is for illustrative and informational purposes only, and it does not constitute a legally binding agreement. The content presented in the roadmap is subject to change without notice, and any reliance on its accuracy or completeness is at the reader's own risk. The organization and its representatives shall not be held liable for any damages or losses arising from the use or interpretation of the roadmap."
            }
          />
        </div>
      </div>
    );

  return (
    <div className="Quarters" id="select_quater">
      <div className="Quarters__form-wrapper">
        <div className="Quarters__form">
          <div>
            {names && !gitLoading && !gitError ? (
              <SelectOptions
                className="Quarters__form__select"
                options={quartersSelects}
                sendData={getFileName}
                value={value}
                t={t}
              />
            ) : (
              <div className="Quarters__options-wrapper">Loading ...</div>
            )}
          </div>
          <TooltipPanel
            text={`Link to Version ${quartersSelects.length - selectValue} copied!`}
            state={copyState}
            style={{ marginRight: '10px' }}
          >
            <Button className="Quarters__form__button btn" name="subscribe" onClick={() => handleCopy()}>
              {t('roadmap.copysharinglink')}
              <CopyLink className="Quarters__form__linkicon" />
            </Button>
          </TooltipPanel>
        </div>
        <div className="Quarters__top">
          {oldVersionBanner ? (
            <Banner
              icon={<NoticEnable />}
              className="Quarters__top__banner"
              title={'You are previewing an old version of the roadmap'}
              information={'Roadmap gets updated frequently and the one you view right now is an old legacy version.'}
              label={
                <button
                  onClick={() => {
                    getFileName(names.fileNames[0]);
                    setSelect(names.fileNames[0]);
                  }}
                  className="Quarters__top__banner__button"
                >
                  Change to current version
                </button>
              }
              close={() => setOldVersionBanner(false)}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <QuartersListData data={data} selectGlossary={selectGlossary} scrollPosition={scrollPosition} />
      <div className="Quarters__form-wrapper">
        <div className="Quarters__form">
          <div className="Quarters__bottom__banner">
            <Banner
              icon={<Notic />}
              className="Quarters__bottom__banner__item"
              title={'Disclaimer'}
              information={
                "The information provided in the roadmap document is for illustrative and informational purposes only, and it does not constitute a legally binding agreement. The content presented in the roadmap is subject to change without notice, and any reliance on its accuracy or completeness is at the reader's own risk. The organization and its representatives shall not be held liable for any damages or losses arising from the use or interpretation of the roadmap."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quarters;
