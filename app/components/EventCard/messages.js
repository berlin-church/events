/*
 * EventCard Messages
 *
 * This contains all the text for the EventCard component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.EventCard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the EventCard component!',
  },
  connect: {
    id: `${scope}.connect`,
    defaultMessage: 'CONNECT',
  },
  hostCommunity: {
    id: `${scope}.hostCommunity`,
    defaultMessage: 'HOST A COMMUNITY GROUP',
  },
  commnityGroup: {
    id: `${scope}.commnityGroup`,
    defaultMessage: 'COMMUNITY GROUP',
  },
});
