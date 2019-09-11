import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllLocations = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_LOCATIONS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_LOCATIONS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_LOCATIONS_FAILED,
      payload: err
    });
  }
};

export const addLocation = newLocation => async dispatch => {
  dispatch({
    type: types.ADD_LOCATION_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newLocation);
    dispatch({
      type: types.ADD_LOCATION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_LOCATION_FAILED,
      payload: err
    });
  }
};

export const removeLocation = selectedLocation => async dispatch => {
  dispatch({
    type: types.REMOVE_LOCATION_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, selectedLocation);
    dispatch({
      type: types.REMOVE_LOCATION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.REMOVE_LOCATION_FAILED,
      payload: err
    });
  }
};

export const editLocation = updatedLocation => async dispatch => {
  dispatch({
    type: types.EDIT_LOCATION_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, updatedLocation);
    dispatch({
      type: types.EDIT_LOCATION_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.EDIT_LOCATION_FAILED,
      payload: err
    });
  }
};

export const selectLocation = location => dispatch => {
  dispatch({
    type: types.SELECT_LOCATION_PENDING
  });
  try {
    dispatch({
      type: types.SELECT_LOCATION_SUCCESS,
      payload: location
    });
  } catch (err) {
    dispatch({
      type: types.SELECT_LOCATION_FAILED,
      payload: err
    });
  }
};
