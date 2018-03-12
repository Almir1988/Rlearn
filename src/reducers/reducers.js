import { combineReducers } from 'redux'
import {LOGIN_ADMIN,SIGN_UP,ADD_PRODUCT,ADD_USER,DELETE_PRODUCT,SHOW_PRODUCTS} from '../actions/actions'
function admins(state = [], action) {
   switch (action.type) {
      case LOGIN_ADMIN:
         return action.admin
              
         default:
         return state
   }
}
function user(state = [], action) {
      switch (action.type) {
         case SIGN_UP:
            return action.user
            default:
            return state
}}
   function products(state = [], action) {
      debugger;
      switch (action.type) {
         case ADD_PRODUCT:
            return action.product
         case DELETE_PRODUCT:
          return state.filter(product => product._id !== action.id)
          case SHOW_PRODUCTS:
          return action.prod
            default:
            return state
      }
   }
   function users(state = [], action) {
      switch (action.type) {
         case ADD_USER:
            return action.user
                 
            default:
            return state
      }
   }
   
const AdminRed = combineReducers({
      admins,
      user,
      products,
      users,
      
})

export default (AdminRed)