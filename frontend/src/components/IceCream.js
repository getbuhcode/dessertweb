import { useState } from 'react';
import chocolateIceCream from '../images/chocolateIceCream.jpg';
import chocolateChipMintIceCream from '../images/chocolateChipMintIceCream.jpg';
import caramelIceCream from '../images/caramelIceCream.jpg';
import vanilla from '../images/vanillaIceCream.jpg';
import MenuList from './MenuList';


const IceCream = ({ handleClick }) => {

    const [icecreams, setIcecreams] = useState([
        {name : "Chocolate Ice Cream", price : 3.50, unit : "scoop", quantity : 1, totalPrice: 0, img : chocolateIceCream, id : 5},
        {name : "Chocolate Chip Mint Ice Cream", price : 3.50, unit : "scoop", quantity : 1, totalPrice: 0, img : chocolateChipMintIceCream, id : 6},
        {name : "Caramel Ice Cream", price : 3.50, unit : "scoop", quantity : 1, totalPrice: 0, img : caramelIceCream, id : 7},
        {name : "Vanilla Ice Cream", price : 3.50, unit : "scoop", quantity : 1, totalPrice: 0, img : vanilla, id :8}
    ])

    return ( 
        <div className="icecream">
            {icecreams.map((icecream) => (
                <div className="icecreamcontainer">
                    <MenuList menu={ icecream } />
                    <button onClick={ () => { handleClick(icecream) } }>Add to cart</button>
                </div>
            ))}
        </div>
    );
}
 
export default IceCream;