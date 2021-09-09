import React from 'react'
import Nav from './nav'
import Hero from './hero'
import Aboutus from './aboutus'
import Tenvirt from './tenvirt'
import Journey from './journey'
import Explore from './explore'
import Benefits from './Benefits'
import Testimonials from './Testimonials'
import Form from './form'
import Fixedimage from './fixedimage'
const Fullpage = () => {
    return (
        <div>
            <Fixedimage />
            <Nav />
            <Hero />
            <Aboutus />
            <Tenvirt />
            <Journey />
            <Explore />
            <Benefits />
            <Testimonials />
            <Form />
        </div>
    )
}

export default Fullpage
