import React, { useEffect } from 'react'
import { fetchOrder } from '../store/actions/order'
import { connect } from 'react-redux'
import '../css/orders.css'

 function Orders(props) {

    useEffect(() => {
     props.fetchOrder()
    }, []);
    const {order}=props;
  return (
    <div className='ordertab'>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ITEMS</th>


            </tr>
        </thead>
        <tbody>
            {order && order.map(order=>(
                <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{props.cartItems.map(p=>(
                        <p>{p.title},qté {p.qte}</p>
                    )

                    )}</td>


                </tr>
            ))}
        </tbody>
    </table> 
    </div>
  )
}

export default connect((state)=>{
    return{
        order:state.order.order,
        cartItems:state.cart.cartItems
    }
},{fetchOrder}) (Orders)