import Cakes from "./Cakes";
import IceCream from "./IceCream";
import { useState } from "react";

const Menu = ({ handleClick }) => {

    const [isCakes, setIsCakes] = useState(false);
    const [isIceCream, setIsIceCream] = useState(false);

    const handleClickCakes = () => {
        setIsIceCream(false);
        setIsCakes(true);
    }

    const handleClickIceCream = () => {
        setIsCakes(false);
        setIsIceCream(true);
    }

    return (
        <div className="menu">
            <div className="menubar">
                <button onClick={handleClickCakes}>Cakes</button>
                <button onClick={handleClickIceCream}>Ice Cream</button>
            </div>
            {  isCakes ? <Cakes handleClick={handleClick}/>  
            : isIceCream ? <IceCream handleClick={handleClick} /> : ""}    
        </div> 
    );
}
 
export default Menu;