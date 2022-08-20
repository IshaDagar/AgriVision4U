import React from 'react'
import Rectangle_304 from '../Assets/Rectangle_304.svg';
import Rectangle_444 from '../Assets/Rectangle_444.svg';
import Rectangle_425 from '../Assets/Rectangle_425.svg';
import './Page1.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Questions from '../components/questions/Questions';
import { Link } from 'react-router-dom';
import PackageCard from '../components/PackageCard/PackageCard';

export default function Page1() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className='div1'>
        <img src={Rectangle_304} alt="" />
      </div>
      <div className='div2'>
        <Link to='/questions'>
          <Slider {...settings}>
            <img src={Rectangle_444} alt="" />
            <img src={Rectangle_425} alt="" />
            <img src={Rectangle_444} alt="" />
            <img src={Rectangle_425} alt="" />
            <img src={Rectangle_444} alt="" />
            <img src={Rectangle_425} alt="" />
            <img src={Rectangle_444} alt="" />
            <img src={Rectangle_425} alt="" />
          </Slider>
        </Link>
      </div>
      <hr style={{ width: "80%" }} />
      <div className='div3'>
        <p>Explore various topics for quiz to know where you stand. WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
          Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus diam. Sed nisi. Nbcnt per conubia nostra.
        </p>
        <div className='subjects'>
          <div className='dropdown'>
            <ProSidebar>
              <Menu iconShape="square">
                <SubMenu title="Geometry">
                  <MenuItem>Circles</MenuItem>
                  <MenuItem>Triangles</MenuItem>
                  <MenuItem>Quadilaterals</MenuItem>
                  <MenuItem>Parabolas</MenuItem>
                </SubMenu>
                <SubMenu title="Algebra">
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu title="Rational Numbers">
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
                <SubMenu title="Trigonometry">
                  <MenuItem>Component 1</MenuItem>
                  <MenuItem>Component 2</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
          </div>
          <div className='questions' style={{ width: "60vw", backgroundColor: "white", border: "1px solid grey" }}>
            <Questions number="1" />
            <Questions number="2" />
            <Questions number="3" />
            <Questions number="4" />
            <Questions number="5" />
          </div>
        </div>
      </div>
      <div className='div4'>
        <h1>Checkout other packages</h1>
        <PackageCard/>
      </div>
    </div>
  )
}
