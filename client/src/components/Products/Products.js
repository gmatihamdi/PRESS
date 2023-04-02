import React,{useState,useEffect} from 'react'
import "../../css/Products/Products.css"
import Bounce from 'react-reveal/Bounce'
import ProductModal from './ProductModal';
import {connect} from 'react-redux'
import { fetchProducts } from '../../store/actions/products';
import {addToCart} from  '../../store/actions/cart';
 function Products(props) {
    const [product,setProduct]=useState('');
    const openModal=(product) =>{
setProduct(product)
    }
    const closeModel=()=>{
        setProduct(false)
    }
    useEffect(()=>{
      props.fetchProducts()
    },[])
  return (
    <Bounce left cascade>
         <div className='productElm'>
         {props.products && props.products.length ? props.products.map(product=>(
<div className='product-item' key={product.id}>
<a href='#' onClick={()=>openModal(product)}>
<img src={product.imgeUrl}   alt={product.title}/>
</a>
<div className='product-desc'>
<p>{product.title}</p>
<span>{product.price}</span>
 </div>
 <button onClick={()=>props.addToCart(product)}>Add to cart</button>
 </div>

         )):"loading..."}
       <ProductModal product={product} closeModel={closeModel}/>
         </div>
         </Bounce>
    
  )
}

export default connect((state)=>{
  return{
    products:state.products.filterProducts
  }
},{fetchProducts,addToCart})(Products)