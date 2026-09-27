import { createElement } from 'react';
import type { Decorator, Preview } from '@storybook/react';

// Scry captures each story cropped to its component (sbcov >= 0.6.0,
// captureMode 'root'). It crops to the innermost [data-scry-root], else to
// #storybook-root's first child — but only when that child is smaller than the
// 1280x720 viewport, so a tall full-page story would fall back to the whole
// window (capture.root_found: false). Fullscreen stories get an explicit,
// full-width root here so their crop is the rendered story at any height.
// Centred stories need nothing: their first child already is the component.
const scryRoot: Decorator = (Story, context) =>
  context.parameters.layout === 'fullscreen'
    ? createElement('div', { 'data-scry-root': '' }, createElement(Story))
    : createElement(Story);

const preview: Preview = {
  decorators: [scryRoot],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
