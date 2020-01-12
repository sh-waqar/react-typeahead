import uniqueId from 'lodash/fp/uniqueId';
import trim from 'lodash/fp/trim';

export const initialState = {
  searchTerm: '',
  tempValue: '',
  activeIndex: -1,
  dropdownActive: false,
  hoverActive: false,
  list: []
};

const SET_LIST = 'typeahead/SET_LIST';
const HIDE_DROPDOWN = 'typeahead/HIDE_DROPDOWN';
const UPDATE_SEARCH_TERM = 'typeahead/UPDATE_SEARCH_TERM';
const SELECT_ITEM = 'typeahead/SELECT_ITEM';
const INCREMENT_ACTIVE_INDEX = 'typeahead/INCREMENT_ACTIVE_INDEX';
const DECREMENT_ACTIVE_INDEX = 'typeahead/DECREMENT_ACTIVE_INDEX';
const ACTIVATE_MOUSE_HOVER = 'typeahead/ACTIVATE_MOUSE_HOVER';
const DEACTIVATE_MOUSE_HOVER = 'typeahead/DEACTIVATE_MOUSE_HOVER';

// Actions
export function setList(payload) {
  return {
    type: SET_LIST,
    payload
  };
}

export function hideDropdown() {
  return {
    type: HIDE_DROPDOWN
  };
}

export function updateSearchTerm(payload) {
  return {
    type: UPDATE_SEARCH_TERM,
    payload
  };
}

export function selectItem(payload) {
  return {
    type: SELECT_ITEM,
    payload
  };
}

export function incrementActiveIndex(payload) {
  return {
    type: INCREMENT_ACTIVE_INDEX,
    payload
  };
}

export function decrementActiveIndex(payload) {
  return {
    type: DECREMENT_ACTIVE_INDEX,
    payload
  };
}

export function activateMouseHover(payload) {
  return {
    type: ACTIVATE_MOUSE_HOVER,
    payload
  };
}

export function deactivateMouseHover(payload) {
  return {
    type: DEACTIVATE_MOUSE_HOVER,
    payload
  };
}

// Reducer

function reducer(state, { type, payload }) {
  switch (type) {
    case SET_LIST: {
      const list = payload.map(item => ({
        id: uniqueId(item),
        value: item
      }));

      return { ...state, list };
    }

    case HIDE_DROPDOWN: {
      return { ...state, dropdownActive: false };
    }

    case UPDATE_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: payload,
        tempValue: '',
        hoverActive: false,
        dropdownActive: true,
        activeIndex: -1
      };
    }

    case SELECT_ITEM: {
      return {
        ...state,
        dropdownActive: false,
        searchTerm: payload
      };
    }

    case INCREMENT_ACTIVE_INDEX: {
      const filteredListLength = payload.length;
      const current = state.activeIndex;

      return {
        ...state,
        activeIndex: current === filteredListLength - 1 ? 0 : current + 1
      };
    }

    case DECREMENT_ACTIVE_INDEX: {
      const filteredListLength = payload.length;
      const current = state.activeIndex;

      return {
        ...state,
        activeIndex: current === 0 ? filteredListLength - 1 : current - 1
      };
    }

    case ACTIVATE_MOUSE_HOVER: {
      return {
        ...state,
        tempValue: payload,
        hoverActive: true
      };
    }

    case DEACTIVATE_MOUSE_HOVER: {
      return {
        ...state,
        tempValue: '',
        hoverActive: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getMatchedItems = (list, searchTerm) => {
  const trimedValue = trim(searchTerm);

  if (trimedValue === '') {
    return [];
  }

  return list.filter(item =>
    item.value.toLowerCase().includes(trimedValue.toLowerCase())
  );
};

export default reducer;
