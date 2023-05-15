import { useEffect, useState } from "react";

const Order = ({ orderItems, setOrderItems, handleChange }) => {

    const [order, setOrder] = useState([]);
    const [quantity, setQuantity] = useState(0);
    
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        let total = 0
        orderItems.map((item) => (
            total += item.quantity * item.price
        ))
        setTotalPrice(total)
    }

    const calculateIndividualPrice = (item) => {
        item.totalPrice = item.quantity * item.price
        return item.totalPrice
    }

    const handleRemove = (id) => {
        const updatedOrderItems = orderItems.filter((item) => item.id !== id);
        setOrderItems(updatedOrderItems);
    }
    
    useEffect(() => {
        calculateTotalPrice();
    },)

    return (
        <div className="order">
            {orderItems.length === 0 && <div className="emptyorder">No item added.</div>}
            {orderItems.length > 0 &&
                <article>
                    <h2>Your Orders</h2>
                    {orderItems.map( (item) => (
                        <div className="order-items" key={ item.id }>
                            <h3>{ item.name }</h3>                    
                            <div className="qtyButtons">
                                <button onClick={() => { handleChange(item, +1) } }> + </button>
                                <button className="qtyButton"> { item.quantity } </button>
                                <button onClick={() => { handleChange(item, -1) } }> - </button>
                            </div>
                            <div className="removeButton">
                                <span>$ { calculateIndividualPrice(item) }</span>
                                <button onClick={ () => { handleRemove(item.id) } }>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="totalPrice">
                        <span>Total Price: </span>
                        <span>{ totalPrice.toFixed(2) }</span>
                    </div>
                    <button className="confirmButton">Confirm Order</button>
                </article>
            }
        </div> 
    );
}
 
export default Order;
