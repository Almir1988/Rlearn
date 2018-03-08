import { combineReducers } from 'redux'
import {LOGIN_ADMIN} from '../actions/actions'



function admins(state = [], action) {
   switch (action.type) {
      case LOGIN_ADMIN:
         return [
            
            ...state,
            action.admin 
         ]
      default:
         return state
   }
}
const AdminRed = combineReducers({
      admins
})

export default (AdminRed)