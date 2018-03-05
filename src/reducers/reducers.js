import { combineReducers } from 'redux'
import { CREATE_PRODUCT } from '../actions/actions'
function AddProduct(state,action)
{

        switch(action.type)
        {
          case CREATE_PRODUCT:
           return {
               
                ProductName:action.ProductName,
                Quantity:action.Quantity
           }
           default :
           return state
        }
}
function AddProducts(state=[],action){
    switch(action.type)
    {
      case CREATE_PRODUCT:
       return [   
        AddProduct(undefined,action)
       ]
       default :
       return state
    }
}
const ProductApp = combineReducers({
    AddProducts
 })
export default ProductApp