import { combineReducers } from 'redux'
import {LOGIN_ADMIN,SIGN_UP,ADD_PRODUCT,ADD_USER,DELETE_PRODUCT} from '../actions/actions'
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
      switch (action.type) {
         case ADD_PRODUCT:
            return action.product
                 
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
   function deleteProducts(state = [], action) {
      switch (action.type) {
         case DELETE_PRODUCT:
            return action.id
            default:
            return state
      }
   }
const AdminRed = combineReducers({
      admins,
      user,
      products,
      users,
      deleteProducts
})

export default (AdminRed)