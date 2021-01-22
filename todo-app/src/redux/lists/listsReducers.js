import { combineReducers } from "redux";
import { listsTypes } from "./listsTypes";

const listsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case listsTypes.FETCH_LISTS_SUCCESS:
      return payload.lists;

    case listsTypes.DELETE_LIST_SUCCESS:
      return state.filter((item) => item.id !== payload.id);

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case listsTypes.FETCH_LISTS_REQUEST:
      return true;

    case listsTypes.FETCH_LISTS_SUCCESS:
    case listsTypes.FETCH_LISTS_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case listsTypes.FETCH_LISTS_REQUEST:
    case listsTypes.FETCH_LISTS_SUCCESS:
      return null;

    case listsTypes.FETCH_LISTS_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  items: listsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
