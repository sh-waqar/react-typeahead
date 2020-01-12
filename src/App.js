import React from 'react';
import styled from '@emotion/styled';

import Typeahead from 'components/Typeahead/Typeahead';
import InputField from 'components/InputField/InputField';
import items from 'data/items';

const Wrapper = styled.div`
  padding: 30px;
  width: 400px;
  margin: 0 auto;
`;

const FormField = styled.div`
  padding-bottom: 20px;
`;

const InputLabel = styled.label`
  display: inline-block;
  padding-bottom: 6px;
`;

function App() {
  return (
    <Wrapper>
      <FormField>
        <InputLabel htmlFor="select">Typeahead</InputLabel>
        <Typeahead name="select" options={items} />
      </FormField>

      <FormField>
        <InputLabel htmlFor="other-input">Other Input</InputLabel>
        <InputField type="text" name="other-input" id="other-input" />
      </FormField>
    </Wrapper>
  );
}

export default App;
