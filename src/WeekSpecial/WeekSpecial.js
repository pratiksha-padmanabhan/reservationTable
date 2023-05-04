
import './WeekSpecial.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faTruck} from '@fortawesome/fontawesome-free-solid'
import Images from '../assets/images';
import React from 'react';

function  WeekSpecial(){
   return(
    <div>
    <div id='ws'>
        <div className='spanspecial'>This week's specials!</div>
        <div><button className='orderOnline' id='orderOnlineBtn'>Online Menu</button></div>
    </div>

    <div className='cardLayout'>
    <div className="Card">

            <img className='foodPic' src={Images.greekSalad}/>        
        <div className="Container">
            <b><div className='titleCard'> <span className="aboutt">Greek Salad</span> <span className='foodPrice'>$12.00</span></div></b>
            <p className='ddd'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago Style feta cheese garnished with crunchy garlic and rosmary croutons</p>
            <span><b> Order a delivery </b>  <FontAwesomeIcon icon={faTruck} /></span>
        </div>
    </div>


    <div className="Card">
        <img className='foodPic' src={Images.bruschetta}/>
        <div className="Container">
            <b><div className='titleCard'><span className="aboutt">Bruschetta</span> <span className='foodPrice'>$5.99</span></div></b>
            <p className='ddd'>Our Bruschetta is made from grilled bread that has been smeared with farlic and seasoned with salt and olive oil.</p>
            <span><b> Order a delivery </b>  <FontAwesomeIcon icon={faTruck} /></span>
        </div>
    </div>


    <div className="Card">
        <img className='foodPic' src={Images.lemonDessert}/>
        <div className="Container">
            <b><div className='titleCard'><span className="aboutt">Lemon Dessert</span> <span className='foodPrice'>$5.00</span></div> </b>
            <p className='ddd'>This comes straight from grandma's recipe book, every last ingridient has been sourced and is as authentic as can be imagined</p>
            <span><b> Order a delivery</b>  <FontAwesomeIcon icon={faTruck} /></span>
        </div>
    </div>

</div>

    </div>
   );
}

export default WeekSpecial;