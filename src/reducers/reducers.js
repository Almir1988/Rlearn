import { combineReducers } from 'redux'
import {LOGIN_ADMIN,SIGN_UP,ADD_PRODUCT,ADD_USER,DELETE_PRODUCT,SHOW_PRODUCTS,DELETE_USER,SHOW_USERS} from '../actions/actions'
//ADMIN REDUCER
function admins(state = [], action) {
   switch (action.type) {
      case LOGIN_ADMIN:
         return action.admin
              
         default:
         return state
   }
}
//PRODUCT REDUCER
   function products(state = [], action) {
      switch (action.type) {
         case ADD_PRODUCT:
            return [
                  ...state,
                  action.product
            ]
         case DELETE_PRODUCT:
          return state.filter(product => product._id !== action.id)
          case SHOW_PRODUCTS:
          return action.prod
            default:
            return state
      }
   }
//USER REDUCER
   function user(state = [], action) {
      switch (action.type) {
         case SIGN_UP:
            return action.admin
            default:
            return state
    }}
   function users(state = [], action) {
      switch (action.type) {
         case ADD_USER:
            return [
                  ...state,
                  action.user
            ]
            case DELETE_USER:
            return state.filter(user => user._id !==action.id)
            case SHOW_USERS:
            return action.use
            default:
            return state
      }
   }
const AdminRed = combineReducers({
      admins,
      user,
      products,
      users
      
})
export default (AdminRed)