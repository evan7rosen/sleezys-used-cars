import * as types from "./constants";

const initialState = {
  all: [],
  selectedCar: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CARS_PENDING:
    case types.ADD_CAR_PENDING:
    case types.REMOVE_CAR_PENDING:
    case types.EDIT_CAR_PENDING:
    case types.SELECT_CAR_PENDING:
      return state;

    case types.FETCH_ALL_CARS_FAILED:
    case types.ADD_CAR_FAILED:
    case types.REMOVE_CAR_FAILED:
    case types.EDIT_CAR_FAILED:
    case types.SELECT_CAR_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_CARS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_CAR_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.REMOVE_CAR_SUCCESS:
      return {
        ...state,
        all: state.all.filter(status => status.id === action.payload.id)
      };

    case types.EDIT_CAR_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };

    case types.SELECT_CAR_SUCCESS:
      return {
        ...state,
        selectedCar: action.payload
      };

    default:
      return state;
  }
};
