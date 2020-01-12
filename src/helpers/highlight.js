import trim from 'lodash/fp/trim';
import memoize from 'fast-memoize';

const highlight = (termToMatch, value) => {
  const regex = new RegExp(trim(termToMatch), 'gi');

  return value.replace(regex, match => `<b>${match}</b>`);
};

export default memoize(highlight);
