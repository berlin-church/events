/**
 *
 * EventsPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEventsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import LayoutWrapper from '../../components/LayoutWrapper/index';
import EventCardsList from '../../components/EventCardsList/index';

const events = [
  {
    title: 'connect',
    image:
      'https://res.cloudinary.com/dkbwcwx1s/image/upload/v1536004712/connect.jpg',
    url: 'register',
    msgKey: 'connect',
  },
  {
    title: 'host a community group',
    image:
      'https://res.cloudinary.com/dkbwcwx1s/image/upload/v1528827293/placeholder.png',
    url: 'register',
    msgKey: 'hostCommunity',
  },
  {
    title: 'community group',
    image:
      'https://res.cloudinary.com/dkbwcwx1s/image/upload/v1536004711/CG/community-group.jpg',
    url: 'see all',
    msgKey: 'commnityGroup',
  },
];

export function EventsPage() {
  useInjectReducer({ key: 'eventsPage', reducer });
  useInjectSaga({ key: 'eventsPage', saga });

  return (
    <div>
      <Helmet>
        <title>EventsPage</title>
        <meta name="description" content="Description of EventsPage" />
      </Helmet>
      <LayoutWrapper />
      <EventCardsList events={events} />
    </div>
  );
}
//
// EventsPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  eventsPage: makeSelectEventsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EventsPage);
