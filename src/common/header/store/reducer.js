import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

// 这里修改state

const defaultState = fromJS({
  searchFocus: false,
  list: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("searchFocus", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("searchFocus", false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data);
    default:
      return state
  }
};