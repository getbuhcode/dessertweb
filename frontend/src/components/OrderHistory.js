import { useEffect } from "react";


const OrderHistory = ({ token }) => {

    useEffect(() => {

        let jwt = "Bearer " + token;
        
        fetch('http://localhost:8080/api/v1/order', {
            method: 'GET',
            headers: { 
                'Authorization' : jwt,
            },
        }).then(res => {
            if (!res.ok) {
                throw Error("Could not fetch the data for that resource")
            }
            return res.json();
        }).then( (data)=> {
            console.log(data);
        })

    });

    return ( 
        <div>
            <button>TEST</button>
        </div>
    );
}
 
export default OrderHistory;