import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} alt='' className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                        <h1 className='text-5xl font-bold text-white'>
                            Affordable <br />
                            Price for Car <br />
                            Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
                        <p className='text-white text-xl'>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>
                    </div>
                    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
                        <button className="rounded-xl btn btn-warning mr-5">Discover</button>
                        <button className="rounded-xl btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="hover:bg-pink-600 btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="hover:bg-pink-600 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} alt='' className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="hover:bg-pink-600 btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="hover:bg-pink-600 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} alt='' className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="hover:bg-pink-600 btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="hover:bg-pink-600 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img4} alt='' className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="hover:bg-pink-600 btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="hover:bg-pink-600 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img5} alt='' className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="hover:bg-pink-600 btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="hover:bg-pink-600 btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;