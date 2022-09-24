import * as actionTypes from "../constants/categoryConstants";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_CATEGORY_REQUEST });

    const {data} = await axios.get("/category");

    dispatch({
      type: actionTypes.GET_CATEGORY_SUCCESS,
      payload: data,
    });
};

