import React from 'react'
import Input from '../input/Input'
import Zoom from 'react-reveal/Zoom'
 function Checkout(props) {
  return (
    <>
        
{ props.showform &&
<Zoom>
<div className='checkout-form'>
<span className='close-icon' onClick={()=>props.setShowform(false)}>&times;</span>
    <form onSubmit={props.submitOrder}>
        
        <Input
            label="Name" type="text" onChange={props.handleChange} name="name"
        />
         <Input
            label="E-mail" type="email" onChange={props.handleChange} name="email"
        />
      
        <div > <button type='email'>Sbmit</button>
        </div>
    </form>
</div>
</Zoom>
}
    </>
  )
}

export default Checkout