import React from 'react'
import Home from '../components/Home'
import Features from '../components/Featurs'
import Strategies from '../components/Strategies'
import CTABanner from '../components/CTABanner'
import AlgoTrading from '../components/Alogtrading'
export default function Homepage() {
  return (
    <div>
      <Home />
      <Features />
      <Strategies />
      <CTABanner />
      <AlgoTrading/>
    </div>
  )
}
