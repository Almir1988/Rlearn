export const  CREATE_PRODUCT='CREATE_PRODUCT'
export const Pord={
  ProductName:'',
  Quantity:'',
}
export function AddProduct(Prod)
{
     return{
       type:CREATE_PRODUCT,
       Prod
     };
}