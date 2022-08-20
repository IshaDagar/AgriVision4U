import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import books from '../../Assets/books.svg'
import './PackageCard.scss'
import filled_star from '../../Assets/filled_star.svg';
import empty_star from '../../Assets/empty_star.svg';
import tick from '../../Assets/tick.svg';

export default function PackageCard() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='Packages'>
                <div className='Package'>
                    <div className='image'>
                        <img src={books} alt='' id='books'/>
                        <p>1.2k enrolled</p>
                        <div className='stars'>
                            <p>4.7</p>
                            <img src={filled_star} alt=""/>
                            <img src={filled_star} alt=""/>
                            <img src={filled_star} alt=""/>
                            <img src={filled_star} alt=""/>
                            <img src={empty_star} alt=""/>
                            <p>(12,717)</p>
                        </div>
                    </div>
                    <div className='description'>
                        <h2>Thermodynamics</h2>
                        <div className='subheadings'>
                            <div className='subheading'>
                                <img src={tick} alt=""/>
                                <p>General aptitude</p>
                            </div>
                            <div className='subheading'>
                                <img src={tick} alt=""/>
                                <p>Fluid mechanics</p>
                            </div>
                            <div className='subheading'>
                                <img src={tick} alt=""/>
                                <p>Food Technology</p>
                            </div>
                            <div className='subheading'>
                                <img src={tick} alt=""/>
                                <p>Engineering mathematics</p>
                            </div>
                            <button>View package</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
