const OrderList = ({orders}) => {
    return (
        <div className="orderlist">
            {orders.map( (order) => (
                <div className="orderlistcontainer">
                    <img src={ order.img } alt="" />
                    <h3>{ order.name }</h3>
                    <p>{ order.price.toFixed(2) + "/" + order.unit }</p>
                </div>
            ))}
        </div>
    );
}
 
export default OrderList;