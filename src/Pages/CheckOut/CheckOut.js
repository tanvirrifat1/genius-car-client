import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { title, _id, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('order placed successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }

    console.log(user)
    return (
        <div>
            <form onSubmit={handlePlaceOrder} className='m-6'>
                <div className='m-4'>
                    <h2 className="text-3xl">Your are about to order: {title}</h2>
                    <h2 className="text-3xl">Price:{price}</h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your msg" required></textarea>
                <input className='btn btn-outline btn-info rounded-lg' type="submit" value="Place your order" />
            </form>
        </div>
    );
};

export default CheckOut;