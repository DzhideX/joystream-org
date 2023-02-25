import React from 'react';

import { ReactComponent as WorkingGroupIcon } from '../../../assets/svg/token/working-group.svg';
import { ReactComponent as ElectionsIcon } from '../../../assets/svg/token/participate-in-elections.svg';
import { ReactComponent as NominateValidatorsIcon } from '../../../assets/svg/token/nominate-validators.svg';
import { ReactComponent as ProposalsIcon } from '../../../assets/svg/token/engage-in-proposals.svg';
import { ReactComponent as VideosIcon } from '../../../assets/svg/token/publish-videos.svg';
import { ReactComponent as InteractIcon } from '../../../assets/svg/token/interact-with-others.svg';
import { ReactComponent as InvestIcon } from '../../../assets/svg/token/invest-in-creators.svg';

import CreatorsCenterIllustration from '../../../assets/images/token/creators-illustration-center.webp';
import CreatorsRightIllustration from '../../../assets/images/token/creators-illustration-right.webp';
import CreatorsLeftIllustration from '../../../assets/images/token/creators-illustration-left.webp';
import InteractIllustration from '../../../assets/images/token/interact-illustration.webp';
import VideosIllustration from '../../../assets/images/token/videos-illustration.webp';

import './style.scss';

const Utility = () => {
  return (
    <section className="TokenPage__utility-wrapper">
      <div className="TokenPage__utility-background-wrapper">
        <div className="TokenPage__utility">
          <header className="TokenPage__utility__header">
            <span className="TokenPage__utility__header__section-title">UTILITY</span>
            <h2 className="TokenPage__utility__header__title">What can you do with the JOY token?</h2>
            <p className="TokenPage__utility__header__subtitle">
              Holding on to your JOY tokens opens up a world of exciting opportunities for engaging with the Joystream
              community.
            </p>
          </header>

          <div className="TokenPage__utility__grid">
            <div className="TokenPage__utility__grid__working-group">
              <div className="TokenPage__utility__grid__working-group__icon-wrapper">
                <WorkingGroupIcon className="TokenPage__utility__grid__working-group__icon" />
              </div>
              <div className="TokenPage__utility__grid__working-group__info">
                <h3 className="TokenPage__utility__grid__working-group__info__title">Publish videos</h3>
                <h3 className="TokenPage__utility__grid__working-group__info__subtitle">
                  Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus.
                </h3>
              </div>
            </div>

            <div className="TokenPage__utility__grid__videos">
              <div className="TokenPage__utility__grid__videos__icon-wrapper">
                <VideosIcon className="TokenPage__utility__grid__videos__icon" />
              </div>
              <div className="TokenPage__utility__grid__videos__info">
                <h3 className="TokenPage__utility__grid__videos__info__title">Be part of a Working Group</h3>
                <h3 className="TokenPage__utility__grid__videos__info__subtitle">
                  Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus.
                </h3>
              </div>
              <img src={VideosIllustration} className="TokenPage__utility__grid__videos__illustration" alt="" />
            </div>

            <div className="TokenPage__utility__grid__election">
              <div className="TokenPage__utility__grid__election__icon-wrapper">
                <ElectionsIcon className="TokenPage__utility__grid__election__icon" />
              </div>
              <div className="TokenPage__utility__grid__election__info">
                <h3 className="TokenPage__utility__grid__election__info__title">Participate in elections</h3>
                <h3 className="TokenPage__utility__grid__election__info__subtitle">
                  Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus.
                </h3>
              </div>
            </div>

            <div className="TokenPage__utility__grid__creators">
              <div className="TokenPage__utility__grid__creators__icon-wrapper">
                <InteractIcon className="TokenPage__utility__grid__creators__icon" />
              </div>
              <div className="TokenPage__utility__grid__creators__info">
                <h3 className="TokenPage__utility__grid__creators__info__title">Invest in creators</h3>
                <h3 className="TokenPage__utility__grid__creators__info__subtitle">
                  Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus.
                </h3>
              </div>
              <img
                src={CreatorsCenterIllustration}
                className="TokenPage__utility__grid__creators__illustration TokenPage__utility__grid__creators__illustration--center"
                alt=""
              />
              <img
                src={CreatorsRightIllustration}
                className="TokenPage__utility__grid__creators__illustration TokenPage__utility__grid__creators__illustration--right"
                alt=""
              />
              <img
                src={CreatorsLeftIllustration}
                className="TokenPage__utility__grid__creators__illustration TokenPage__utility__grid__creators__illustration--left"
                alt=""
              />
            </div>

            <div className="TokenPage__utility__grid__interact">
              <div className="TokenPage__utility__grid__interact__icon-wrapper">
                <InvestIcon className="TokenPage__utility__grid__interact__icon" />
              </div>
              <div className="TokenPage__utility__grid__interact__info">
                <h3 className="TokenPage__utility__grid__interact__info__title">Interact with others</h3>
                <h3 className="TokenPage__utility__grid__interact__info__subtitle">
                  Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus.
                </h3>
              </div>
              <img src={InteractIllustration} className="TokenPage__utility__grid__interact__illustration" alt="" />
            </div>

            <div className="TokenPage__utility__grid__validators">
              <div className="TokenPage__utility__grid__validators__icon-wrapper">
                <NominateValidatorsIcon className="TokenPage__utility__grid__validators__icon" />
              </div>
              <div className="TokenPage__utility__grid__validators__info">
                <h3 className="TokenPage__utility__grid__validators__info__title">Nominate validators</h3>
                <h3 className="TokenPage__utility__grid__validators__info__subtitle">
                  Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus dignissim purus.
                </h3>
              </div>
            </div>

            <div className="TokenPage__utility__grid__proposals">
              <div className="TokenPage__utility__grid__proposals__icon-wrapper">
                <ProposalsIcon className="TokenPage__utility__grid__proposals__icon" />
              </div>
              <div className="TokenPage__utility__grid__proposals__info">
                <h3 className="TokenPage__utility__grid__proposals__info__title">Engage in proposals</h3>
                <h3 className="TokenPage__utility__grid__proposals__info__subtitle">
                  Lorem ipsum dolor sit amet consectetur. Laoreet venenatis pharetra faucibus.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Utility;
