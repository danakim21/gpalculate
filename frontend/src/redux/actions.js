import { LOGOUT, SET_CONVERSION, SET_SEMESTERS, TOGGLE_COURSE } from "./types";
import axios from "axios";

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setConversion = (conversionArr, conversion) => {
  return {
    type: SET_CONVERSION,
    payload: {
      conversionArr,
      conversion,
    },
  };
};

export const setSemesters = (semesters) => {
  return {
    type: SET_SEMESTERS,
    payload: {
      semesters,
    },
  };
};

export const toggleCourse = (semesterId, courseId, include) => {
  return {
    type: TOGGLE_COURSE,
    payload: {
      semesterId,
      courseId,
      include,
    },
  };
};

export const updateUserInfo = (conversionArr, conversion) => {
  return (dispatch) => {
    dispatch(setConversion(conversionArr, conversion));
  };
};
