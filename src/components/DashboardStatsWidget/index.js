import React from 'react';
import cn from 'classnames';
import { string, bool } from 'prop-types';

import DashboardWidgetHeading from '../DashboardWidgetHeading';

import './style.scss';

const propTypes = {
  heading: string.isRequired,
  text: string.isRequired,
  helperText: string,
  withTextSizeIncreasedFromMd: bool,
};

const DashboardStatsWidget = ({ heading, text, helperText, withTextSizeIncreasedFromMd }) => {
  return (
    <div className="dashboard-stats-widget">
      <DashboardWidgetHeading heading={heading} headingWrapperCn="dashboard-stats-widget__heading" />
      <div className="dashboard-stats-widget__text-wrapper">
        <p
          className={cn('dashboard-stats-widget__text', {
            'with-text-size-increased-from-md': withTextSizeIncreasedFromMd,
          })}
        >
          {text}
        </p>
        {!!helperText && <p className="dashboard-stats-widget__helper-text">{helperText}</p>}
      </div>
    </div>
  );
};

DashboardStatsWidget.propTypes = propTypes;

export default DashboardStatsWidget;
