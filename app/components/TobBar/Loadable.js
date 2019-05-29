/**
 *
 * Asynchronously loads the component for TobBar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
