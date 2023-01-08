import { getallproduct } from "../../constant";


export default function AddProducts(dispatch , updatefilte){

    async function getData(){
        // old apis
        // const res = await fetch('https://frankbodyapi.herokuapp.com/products');
        // const res = await fetch('https://odd-pleat-cod.cyclic.app/products');
        
        // new api
        const res = await fetch(`${getallproduct}`);
        const data = await res.json();

        const products = data.data;

        let temp = products.map((elem)=>{

            return {...elem}

        })

        updatefilte(temp)
        
        dispatch({
            type:"ADDDATA",
            payload:temp
    
        })
    }
   
    getData()

    

}


function setActiveCategory(curr , dispatch){

    dispatch({
        type:"SETCAT",
        payload : curr
    })
}

function setSortingOrder(curr , dispatch){

    dispatch({
        type:"SORTINGORDER",
        payload:curr
    })
}


function addToCart(data , dispatch){

    dispatch({
        type:"ADD",
        payload:data
    })


    // console.log("data received");
}

function quantityZero(data ,dispatch , id){

    // fetch(`https://frankbodyapi.herokuapp.com/products/${id}`,{

        fetch(`https://odd-pleat-cod.cyclic.app/products/${id}`,{
        method:'PATCH',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            "cartStatus" : false
        })
    })

    const newarr = data.filter((elem)=>{
        return elem.id != id
    })

    dispatch({
        type:"DELETE",
        payload:newarr
    })

}

function SetLogin(dispatch , status){

    dispatch({
        type:"SetLogin",
        payload:status,
    })
}

export const DeleteFromCart = (data,index,dispatch)=>{
    data.splice(index,1);
    var NewArr = [...data];
    
    dispatch({
        type : "Delete_From_Cart",
        payload : NewArr,
    })
 }

 export const AddQuantityKey = (data,dispatch)=>{
   const temp = data.map((elem)=>{
    let tem = {...elem , quantity:1}
    return tem;
    })
   dispatch({
    type : "Add_quantity_key",
    payload : [...temp],
   })

 }

 export const DecreaseQuantity = (data,index,dispatch)=>{
     data[index].quantity = data[index].quantity - 1;
     const newArr = [...data];
     dispatch({
        type : "decrease_quantity",
        payload : newArr
     })
 }

 export const IncreaseQuantity = (data,index,dispatch)=>{
    data[index].quantity = data[index].quantity + 1;
    const newArr = [...data];
    
    dispatch({
       type : "increase_quantity",
       payload : newArr
    })
}

export function makeZero(dispatch){

    dispatch({
        type:"makezero",
        payload:[]
    })
}

export function setUserID(dispatch, data){

   dispatch({
    type:"SETUSERID",
    payload : data
   })

}

export {setActiveCategory , setSortingOrder , addToCart , quantityZero , SetLogin};