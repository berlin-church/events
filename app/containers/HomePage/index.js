/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Redirect } from 'react-router-dom';

export default function HomePage() {
  return <Redirect to="/events" />;
}
