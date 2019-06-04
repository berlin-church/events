/**
 *
 * Asynchronously loads the component for LayoutWrapper
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
