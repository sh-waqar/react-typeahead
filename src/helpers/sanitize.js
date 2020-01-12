import sanitizeHtml from 'sanitize-html';
import memoize from 'fast-memoize';

const sanitize = value =>
  sanitizeHtml(value, {
    allowedTags: ['b'],
    allowedAttributes: {},
    allowedIframeHostnames: []
  });

export default memoize(sanitize);
