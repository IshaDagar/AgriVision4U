import React from 'react'
import PackageCard from '../components/PackageCard/PackageCard'
import Questions from '../components/questions/Questions'
import './page2.scss'

export default function Page2() {
    return (
        <div className='page2'>
            <div className='div1'>
                <div className='side-nav' style={{ width: "25vw", height: "1700px", backgroundColor: "#0B6E4F" }}>
                    <h1>All Subjects</h1>
                    <h2>MATHEMATICS</h2>
                    <hr />
                    <p>Geometry</p>
                    <p>Algebra</p>
                    <p>Trigonometery</p>
                    <p>Statistics</p>
                    <h2>ENGLISH</h2>
                    <hr />
                    <p>Verbal</p>
                    <p>Grammar</p>
                    <p>Reading</p>
                </div>
                <div className='subject-questions'>
                    <div className='topic'>
                        <h1>Topics:-</h1>
                        <button>Circles</button>
                        <button>Triangles</button>
                        <button>Quadrilaterals</button>
                        <button>Coordinate system</button>
                        <button>Statistics</button>
                        <button>Lorem ipsum</button>
                    </div>
                    <Questions number='1' />
                    <Questions number='2' />
                    <Questions number='3' />
                    <Questions number='4' />
                    <Questions number='5' />
                </div>
            </div>
            <div className='other-packages'>
                <h1>Checkout other packages</h1>
                <PackageCard />
            </div>
        </div>
    )
}
