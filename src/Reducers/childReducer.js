import { 
    FETCH_CHILD_REQUEST,
    FETCH_CHILD_SUCCESS,
    FETCH_CHILD_FAILURE,
    FETCH_ALL_CHILDREN_REQUEST,
    FETCH_ALL_CHILDREN_SUCCESS,
    FETCH_ALL_CHILDREN_FAILURE,
    ADD_CHILD_SUCCESS,
    ADD_CHILD_FAILURE,
    EDIT_CHILD_SUCCESS,
    EDIT_CHILD_FAILURE,
    DELETE_CHILD_SUCCESS,
    DELETE_CHILD_FAILURE
  } from "../Actions/Children";
  
  export const initialState = {
      children: [
        {
          name: '',
          user_id: 0,
        }
      ],
  
      child: {
          name: '',
          user_id: 0,
      },
  
      editing: false,
      loading: false,
      deleting: false,
      error: ''
  }
  
  export default function recipeReducer(state = initialState, action) {
      switch(action.type) {
        case FETCH_CHILD_REQUEST:
          return {
            ...state,
            loading: true
          }
        case FETCH_CHILD_SUCCESS:
          return {
            ...state,
            userChild: action.payload,
            loading: false
          }
        case FETCH_CHILD_FAILURE:
          return {
            error: 'Fetch Child Failure',
            loading: false
          }
  
        case FETCH_ALL_CHILDREN_REQUEST: 
          return {
            ...state,
            loading: true
          }
        case FETCH_ALL_CHILDREN_SUCCESS: 
          return {
            ...state,
            allChildren: action.payload,
            loading: false,
          }
        case FETCH_ALL_CHILDREN_FAILURE: 
          return {
            error: 'Fetch all failed',
            loading: false
          }
  
        case ADD_CHILD_SUCCESS:
          return {
            ...state,
            recipes: action.payload
          };
        case ADD_CHILD_FAILURE:
          return {
            error: 'Add Child Failure'
          }
  
        case EDIT_CHILD_SUCCESS:
          return {
            ...state,
            recipe: action.payload,
            editing: true
          }
          
          case EDIT_CHILD_FAILURE:
          return {
            error: 'Add Child Failure'
          }
          
        case DELETE_CHILD_SUCCESS:
          return {
            ...state,
            children: state.children.filter(child => child.id !== action.payload.id),
            deleting: true,
          };
        case DELETE_CHILD_FAILURE:
          return {
            error: 'Delete Child Failure'
          }
  
        default:
          return state;
      }
    }