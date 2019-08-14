/**
 *
 * EventCardsList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EventCard from '../EventCard';
const Wrapper = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  margin-top: 1%;
`;

function EventCardsList(props) {
  const { events } = props;
  return (
    <Wrapper>
      {events &&
        Object.keys(events).map(event => (
          <EventCard key={event} event={events[event]} />
        ))}
    </Wrapper>
  );
}

EventCardsList.propTypes = {
  events: PropTypes.array,
};

export default memo(EventCardsList);
