import {Link} from 'react-router-dom'
import '../css/ProductBox.css'
import ProductBox from '../Components/ProductBox'
import '../css/Catelog.css'
import { PRODUCTS } from '../Products'
function Catelog() {

  return (
    <div className='product-gallery'>
      {PRODUCTS.products.map((product) => (
        <ProductBox id={product.id} name={product.name} price={product.price} photo={product.image}/>
      ))}
      {/* <ProductBox id={PRODUCTS[1].id} name={PRODUCTS[1].name} price={PRODUCTS[1].price} photo={PRODUCTS[1].image}/>
      <ProductBox id={PRODUCTS[2].id} name={PRODUCTS[2].name} price={PRODUCTS[2].price} photo={PRODUCTS[2].image}/>
      <ProductBox id={PRODUCTS[3].id} name={PRODUCTS[3].name} price={PRODUCTS[3].price} photo={PRODUCTS[3].image}/>
      <ProductBox id={PRODUCTS[4].id} name={PRODUCTS[4].name} price={PRODUCTS[4].price} photo={PRODUCTS[4].image}/> */}
    </div>
  )
}

export default Catelog