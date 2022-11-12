import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        fetch(`https://genius-car-server-umber-pi.vercel.app/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])


    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }


    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold py-4'>Our Service Area</h2>
                <p className=' font-semibold py-4'>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable. </p>

                <div>
                    <input ref={searchRef} type="text" placeholder="Type here" className="rounded-lg input input-bordered input-warning w-full max-w-xs" />
                    <button onClick={handleSearch} className="ml-4 btn btn-outline btn-warning rounded-lg">Search</button>
                </div>
                <button onClick={() => setIsAsc(!isAsc)} className="btn mt-3 rounded-lg">{isAsc ? 'desc' : 'asc'}</button>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;