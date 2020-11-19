import {ActionTypeCart} from '../Action/cartAction'

var data = JSON.parse(localStorage.getItem('CART'));
const listCart = data?data:[];

const cart =(state=listCart,action)=>{
    var {product,quantity}=action;
    var index =-1;
    switch(action.type){
        case ActionTypeCart.ADD_PRODUCT_CART:
            index = findProductCart(state,product);
           if(index!==-1){
               state[index].quantity+=quantity;
           }
           else{
            state.push({
                product,quantity
            });
           }
           localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case ActionTypeCart.DELETE_PRODUCT_CART:
            index = findProductCart(state,product);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            console.log(state)
            return [...state];
            default : return [...state];
    }
}

const  findProductCart=(cart,product)=>{
    var index =-1;
    if(cart.length>0){
        for(var i=0;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                index=i;
                break;
            }
        }
    }
    return index;

}

export default  cart;