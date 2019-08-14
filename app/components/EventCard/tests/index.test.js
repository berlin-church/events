/**
 *
 * Tests for EventCard
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import EventCard from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<EventCard />', () => {
  it('Should render and match the snapshot', () => {
    const event = {
      title: 'Eu',
      image:
        'https://ichef.bbci.co.uk/news/660/cpsprodpb/9C76/production/_105745004_gettyimages-684415304.jpg',
      url:
        'https://ichef.bbci.co.uk/news/660/cpsprodpb/9C76/production/_105745004_gettyimages-684415304.jpg',
      msgKey: 'connect',
    };

    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <EventCard event={event} />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
