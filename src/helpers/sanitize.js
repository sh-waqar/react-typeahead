import sanitizeHtml from 'sanitize-html';

export default function sanitize(value) {
  return sanitizeHtml(value, {
    allowedTags: ['b'],
    allowedAttributes: {},
    allowedIframeHostnames: []
  });
}
