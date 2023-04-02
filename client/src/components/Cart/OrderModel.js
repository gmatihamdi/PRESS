import React from 'react'
import Modal from "react-modal"
function OrderModel(props) {
  return (
<>
    {props.order &&
    <Modal isOpen={props.order} onRequestClose={props.closeModel}>

<div className='order-info'>
<span className='close-icon' onClick={props.closeModel}>&times;</span>
    <p className='alert-success'> order done success</p>
    <table>
        <tr>
            <td>Name:</td>
            <td>{props.order.name}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>{props.order.email}</td>
        </tr>
        <tr>
            <td>Total:</td>
            <td>{props.cartItem.reduce((a,p)=>{
                return a+p.price
            },0)}</td>
        </tr>
        <tr>
        <td>Slected Items</td>
            <td>{props.cartItem.map(p=>(
                <div className='cart-data'>
                    <p>Number of this products: {p.qte}</p>
                    <p>Title of  products: {p.title}</p>

                </div>
            ))}</td>
            
        </tr>
    </table>
</div>
    
    </Modal>

}
</>
  )
}
export default OrderModel