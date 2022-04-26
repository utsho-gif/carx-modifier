import React,{useState} from 'react';
import { useParams } from "react-router-dom";
import auth from '../../firebase.init';
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const {name, img, price} = service;
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'Abdul Kuddus',
    //     email: 'abdul@kuddus.com',
    //     address: 'Hera Pheri',
    //     phone: '01711111111'
    // })

    // const handleAdressChange = event => {
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);
    // }
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
        .then(res => {
            console.log(res);
            const {data} = res;
            if(data.insertedId){
                toast.success('Your Order is confirmed, See ya!');
                event.target.reset();
            }
            else{
                toast.error("Can't confirm your placement!");
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>If your pocket aint't empty confirm: {name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-3' type="text" name="name" value={user?.displayName} placeholder='Name' required readOnly/>
                <br />
                <input className='w-100 mb-3' type="email" name="email" value={user?.email} placeholder='Email' required readOnly/>
                <br />
                <input className='w-100 mb-3' type="text" name="service" value={name} placeholder='Service' required readOnly/>
                <br />
                <input className='w-100 mb-3' type="text" name="address" placeholder='Address' required/>
                <br />
                <input className='w-100 mb-3' type="text" name="phone"  placeholder='Phone' required/>
                <br />
                <input className='btn btn-outline-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;