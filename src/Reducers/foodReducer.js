import {
    FETCH_FOOD_REQUEST,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILURE,
    FETCH_ALL_REQUEST,
    FETCH_ALL_SUCCESS,
    FETCH_ALL_FAILURE,
    SET_LOADING,
    ADD_FOOD_SUCCESS,
    ADD_FOOD_FAILURE,
    EDIT_FOOD_SUCCESS,
    EDIT_FOOD_FAILURE,
    DELETE_FOOD_SUCCESS,
    DELETE_FOOD_FAILURE,
} from "../Actions/Food";

export const initialState = {
    foods: [
      {
        name: '',
        category: '',
      }
    ],

    food: {
        name: '',
        category: '',
       
    },

    editing: false,
    loading: false,
    deleting: false,
    error: ''
}

export default function foodReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_FOOD_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_FOOD_SUCCESS:
        return {
          ...state,
          userFood: action.payload,
          loading: false
        }
      case FETCH_FOOD_FAILURE:
        return {
          error: 'Fetch Food Failure',
          loading: false
        }
      case FETCH_ALL_REQUEST: 
        return {
          ...state,
          loading: true
        }
      case FETCH_ALL_SUCCESS: 
        return {
          ...state,
          allFood: action.payload,
          loading: false,
        }
      case FETCH_ALL_FAILURE: 
        return {
          error: 'Fetch all failed',
          loading: false
        }

      case SET_LOADING:
        return {
          ...state,
          loading: false
        }

      case ADD_FOOD_SUCCESS:
        return {
          ...state,
          foods: action.payload
        };
      case ADD_FOOD_FAILURE:
        return {
          error: 'Add Food Failure'
        }

      case EDIT_FOOD_SUCCESS:
        return {
          ...state,
          recipe: action.payload,
          editing: true
        }
        
      case DELETE_FOOD_SUCCESS:
        return {
          ...state,
          foods: state.foods.filter(food => food.id !== action.payload.id),
          deleting: true,
        };
      case DELETE_FOOD_FAILURE:
        return {
          error: 'Delete Food Failure'
        }

      default:
        return state;
    }
  }