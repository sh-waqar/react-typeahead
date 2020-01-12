import React, { useEffect, useRef, useReducer } from 'react';
import styled from '@emotion/styled';
import compose from 'lodash/fp/compose';

import reducer, {
  initialState,
  setList,
  hideDropdown,
  updateSearchTerm,
  selectItem,
  incrementActiveIndex,
  decrementActiveIndex,
  activateMouseHover,
  deactivateMouseHover,
  getMatchedItems
} from './reducer';
import InputField from 'components/InputField/InputField';
import sanitize from 'helpers/sanitize';
import highlight from 'helpers/highlight';

const Wrapper = styled.div`
  position: relative;
`;

const ListWrapper = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  max-height: 300px;
  border-radius: 4px;
  overflow: auto;
`;

const ListItem = styled.div`
  cursor: pointer;
  padding: 12px 10px;
  background-color: ${props => (props.isActive ? '#eee' : 'fff')};

  &:hover {
    background-color: #eee;
  }
`;

function Typeahead({ name, options }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const matches = getMatchedItems(state);

  const listRef = useRef(null);
  const inputRef = useRef(null);

  // Set the list in the reducer
  useEffect(() => {
    dispatch(setList(options));
  }, [options]);

  // Check if user clicked outside the input or dropdown
  useEffect(() => {
    function handleClick(evt) {
      if (
        (listRef.current && listRef.current.contains(evt.target)) ||
        (inputRef.current && inputRef.current.contains(evt.target))
      ) {
        return;
      }

      dispatch(hideDropdown());
    }

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Move the active item in the dropdown scroll view
  useEffect(() => {
    const activeNode =
      listRef.current && listRef.current.children[state.activeIndex];

    if (!activeNode) {
      return;
    }

    activeNode.scrollIntoView({
      block: 'nearest'
    });
  }, [state.activeIndex]);

  function handleInputChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }

  function handleKeyDown(evt) {
    if (
      evt.key === 'ArrowDown' &&
      evt.key === 'ArrowUp' &&
      evt.key === 'Enter'
    ) {
      evt.preventDefault();
    }

    switch (evt.key) {
      case 'Enter': {
        return dispatch(selectItem(matches[state.activeIndex].value));
      }

      case 'Tab': {
        return dispatch(hideDropdown());
      }

      case 'Escape': {
        return dispatch(hideDropdown());
      }

      case 'ArrowUp': {
        return dispatch(
          decrementActiveIndex({
            length: matches.length
          })
        );
      }

      case 'ArrowDown': {
        return dispatch(
          incrementActiveIndex({
            length: matches.length
          })
        );
      }

      default: {
        return true;
      }
    }
  }

  function handleItemClick({ target }) {
    dispatch(selectItem(target.dataset.value));
  }

  function handleMouseEnter({ target }) {
    dispatch(activateMouseHover(target.dataset.value));
  }

  function handleMouseLeave() {
    dispatch(deactivateMouseHover());
  }

  return (
    <Wrapper>
      <InputField
        ref={inputRef}
        value={state.hoverActive ? state.tempValue : state.searchTerm}
        type="text"
        name={name}
        id={name}
        autocomplete="off"
        placeholder="Search..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {state.dropdownActive && (
        <ListWrapper ref={listRef}>
          {matches.map((item, idx) => (
            <ListItem
              key={item.id}
              onClick={handleItemClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              data-value={item.value}
              data-index={idx}
              isActive={state.activeIndex === idx}
              dangerouslySetInnerHTML={{
                __html: compose(
                  sanitize,
                  highlight(state.searchTerm)
                )(item.value)
              }}
            />
          ))}
        </ListWrapper>
      )}
    </Wrapper>
  );
}

export default Typeahead;
