import React from 'react'
import Basket from '../pages/Basket'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import ProductsList from '../pages/ProductsList'
import Signup from '../pages/Signup'
import {Routes, Route, useLocation } from "react-router-dom"

import { AnimatePresence } from 'framer-motion'
// /dist/framer-motion

const AnimatedRoutes = () => {
    // enable to know wich page your on
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key= {location.pathname}>
            <Route exact path = "/" element= {<Home/>} />
            <Route path = "/login" element= {<Login/>} />
            <Route path = "/signup" element= {<Signup/>} />
            <Route path = "/Products/:id" element= {<ProductsList/>} />
            <Route path = "/Product/:id" element= {<Product/>} />
            <Route path = "/basket" element= {<Basket/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes