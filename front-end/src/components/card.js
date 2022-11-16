import * as React from 'react';
import man1 from "../images/man1.png";
import women1 from "../images/women1.png";
import boot from "../images/boot.png";
import kid1 from "../images/kid1.png";
import {
  products,
  col,
  card,
  container,
  cardfooter,
  title,
  rating,
  bi,
} from '../components/css/card.module.css'

const Card = () => {

  const cardInfo = [
    {image: man1, title: "Nope Not Today Hoodie", price:1150},
    {image: women1, title: "Stiched Ladies Kurti", price:595},
    {image: kid1, title: "Baby Suit Unisex", price:750},
    {image: boot, title: "Nylon Boot Predator", price:13500},
  ];

  const renderCard = (carddata, index) => {
      return(
          
        <div class={`col-3 ${col}`}>
              <div class={`${card} card text-center align-items-center text-bg-dark pb-3`} key={index}>
                <div>
                  <a class="text-decoration-none" href="/productdetails">
                    <div class={`${container} container d-flex align-items-center justify-content-center`}>
                      <img src={carddata.image} class="card-img-top" />
                    </div>
                  </a>
                  <div class="card-body">
                    <a class="text-decoration-none" href="/productdetails">
                      <h6 class="card-title text-white">{carddata.title}</h6>
                      <p class="card-text">
                      </p>
                    </a>
                    {/* <div class="buttons d-flex gap-3 justify-content-center align-items-center">
                      <i onclick="decrement(${id}), generateCartItems()" class={`${bi} btn py-0 px-1 text-white bi bi-dash-lg`} role="button"></i>
                        <div class="quantity text-white">${search.item}</div>
                      <i onclick="increment(${id}), generateCartItems()" class={`${bi} btn py-0 px-1 text-white bi bi-plus-lg`} role="button"></i>
                    </div> */}
                  </div>
                </div>
                <div class={`${cardfooter} card-footer d-flex flex-column`}>
                  <div>Rs {carddata.price}</div>
                  
                </div>
              </div>
            </div>
    )
  }



  return (
    <div id="Featured" class={`container pt-lg-4 ${products} px-0`}>
      {/* <!--Featured Products--> */}
      <div class="row m-auto">  
        <div class="col"><h2 class={title}>Featured Products</h2></div>
      </div>
      <div id="featured" class="shop row justify-content-center px-lg-5 mx-lg-5">
        {cardInfo.map(renderCard)}
      </div> 
      {/* <!--Featured Products End--> */}
    </div> 
  )
}

export default Card;