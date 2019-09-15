import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllCars = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_CARS_PENDING
  });
  try {
    let response = await axios.get(BASE_URL);
    dispatch({
      type: types.FETCH_ALL_CARS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_CARS_FAILED,
      payload: err
    });
  }
};

export const addCar = newCar => async dispatch => {
  dispatch({
    type: types.ADD_CAR_PENDING
  });
  try {
    let response = await axios.post(BASE_URL, newCar);
    dispatch({
      type: types.ADD_CAR_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.ADD_CAR_FAILED,
      payload: err
    });
  }
};

export const removeCar = id => async dispatch => {
  dispatch({
    type: types.REMOVE_CAR_PENDING
  });
  try {
    let response = await axios.delete(BASE_URL + `/${id}`);
    dispatch({
      type: types.REMOVE_CAR_SUCCESS,
      payload: id
    });
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: types.REMOVE_CAR_FAILED,
      payload: err
    });
  }
};

export const editCar = (updatedCar, id) => async dispatch => {
  dispatch({
    type: types.EDIT_CAR_PENDING
  });
  try {
    let response = await axios.patch(BASE_URL + `/${id}`, updatedCar);
    dispatch({
      type: types.EDIT_CAR_SUCCESS,
      payload: response.data
    });
    console.log(response.data);
  } catch (err) {
    dispatch({
      type: types.EDIT_CAR_FAILED,
      payload: err
    });
  }
};

export const selectCar = car => dispatch => {
  dispatch({
    type: types.SELECT_CAR_PENDING
  });
  try {
    dispatch({
      type: types.SELECT_CAR_SUCCESS,
      payload: car
    });
  } catch (err) {
    dispatch({
      type: types.SELECT_CAR_FAILED,
      payload: err
    });
  }
};
