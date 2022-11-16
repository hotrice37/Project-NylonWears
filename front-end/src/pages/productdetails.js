import * as React from 'react'
import Layout from '../components/layout'
import man1 from '../images/man1.png'
import hoodie1 from '../images/hoodie1.png'
import hoodie2 from '../images/hoodie2.png'
import hoodie3 from '../images/hoodie3.png'
import {
  singleproduct,
  col,
  btn,
  bi,
  smallimgrow,
  smallimgcol,
} from '../components/css/productdetails.module.css'

const Productdetails = () => {
  return (
    <Layout>
      <div className="container-fluid pt-4 products px-5">
        <div className={`small-container ${singleproduct}`}>
          <div className="row">
            <div className={`col-4 ${col}`}>
              <img src={man1} width="100%" id="ProductImg" />

              <div className={smallimgrow}>
                <div className={smallimgcol}>
                  <img src={man1} width="100%" className="small-img" />
                </div>
                <div className={smallimgcol}>
                  <img src={hoodie3} width="100%" className="small-img" />
                </div>
                <div className={smallimgcol}>
                  <img src={hoodie1} width="100%" className="small-img" />
                </div>
                <div className={smallimgcol}>
                  <img src={hoodie2} width="100%" className="small-img" />
                </div>

              </div>
            </div>
            <div className={`col-4 ${col}`}>
              <p className="text-white">Home / Hoodie </p>
              <h2 className="text-white">Nope Not Today Fleece Hoodie</h2>
              <h4 className="text-white">Rs 1,150</h4>
              
              <div className={`col-4 ${col}`}>
                <select>
                  <option>Select Size</option>
                  <option>Large</option>
                  <option>Medium</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>
              <div className="row align-items-center">
                <div className={`col-4 ${col}`}>
                  <input type="number" value="1" />
                </div>
                <div className={`col-4 ${col}`}>
                  <a className={`${btn} btn text-white`}>Add to Cart</a>
                </div>
              </div>
              
              <h3 className="text-white">Product Details <i className={`${bi} bi bi-indent`}></i></h3>
              <br />
              <p className="text-white">High quality fleece material, machine or hand washable,100% pure cotton
                  Regular fit, special for women winter wear, Export quality stitching and material.</p>
              
            </div>
          </div>
        </div>
        {/* title */}

        <div className="small-container">
          <div className="row">
          <h2 className="text-white">Related Products</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <title>Product</title>

export default Productdetails