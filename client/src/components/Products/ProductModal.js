import React from 'react'
import Modal from 'react-modal'
 function ProductModal(props) {
    const {product,closeModel}=props
  return (
   
    <Modal isOpen={product} onRequestClose={closeModel}>
    <span className='close-icon' onClick={closeModel}> &times; </span>
<div className='product-info'>
<img src={product.imgeUrl} alt={product.title}></img>
<p>{product.title}</p>
<p>{product.desc}</p>
<p>${product.price}</p>


</div>
    </Modal>



  )
}

export default ProductModal