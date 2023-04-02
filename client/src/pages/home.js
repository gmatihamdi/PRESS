import React from 'react'
import Cart from '../components/Cart/Cart';
import Filter from '../components/filter/Filter';
import Products from '../components/Products/Products';

 function home() {
  return (
    <>
        <div className='wrapper'>

<Products ></Products>
 <Filter/>
</div>
<Cart />
    </>
  )
}
export default home;
