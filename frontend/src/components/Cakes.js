import { useState } from 'react';
import chocolateCheeseCake from '../images/chocolateCheeseCake.jpg';
import lemonCheeseCake from '../images/lemonCheeseCake.jpg';
import newYorkCheeseCake from '../images/newYorkCheeseCake.jpg';
import strawberryCheeseCake from '../images/strawberryCheeseCake.jpg';
import MenuList from './MenuList';


const Cakes = ({ handleClick }) => {

    const [cakes, setCakes] = useState([
        {name : "Chocolate Cheese Cake", price : 6.20, unit : "slice", quantity : 1, totalPrice: 0, img : chocolateCheeseCake, id : 1},
        {name : "Lemon Cheese Cake", price : 6.20, unit : "slice", quantity : 1, totalPrice: 0, img : lemonCheeseCake, id : 2},
        {name : "New York Cheese Cake", price : 5.90, unit : "slice", quantity : 1, totalPrice: 0, img : newYorkCheeseCake, id : 3},
        {name : "Strawberry Cheese Cake", price : 6.70, unit : "slice", quantity : 1, totalPrice: 0, img : strawberryCheeseCake, id : 4}
    ])

    return ( 
        <div className="cakes">
            {cakes.map((cake) => (
                <div className="cakescontainer">
                    <MenuList menu={ cake } />
                    <button onClick={ () => { handleClick(cake) } }>Add to cart</button>
                </div>
            ))}
        </div>
    );
}
 
export default Cakes;
