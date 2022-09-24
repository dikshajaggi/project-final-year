import * as actionTypes from "../constants/categoryConstants";

export const getCategoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case actionTypes.GET_CATEGORY_SUCCESS:
      return {
        categories: action.payload,
        loading: false,
      };
    case actionTypes.GET_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
