import trim from 'lodash/fp/trim';

const highlight = termToMatch => value => {
  const regex = new RegExp(trim(termToMatch), 'gi');

  return value.replace(regex, match => `<b>${match}</b>`);
};

export default highlight;
