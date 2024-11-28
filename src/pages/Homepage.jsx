import React from 'react'
import Home from '../components/Home'
import Features from '../components/Featurs'
import Strategies from '../components/Strategies'
import CTABanner from '../components/CTABanner'
import AlgoTrading from '../components/Alogtrading'
import RiskManagement from '../components/RiskManagement'
import Steps from '../components/Steps'
import DownloadFAQ from '../components/DownloadFAQ'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

export default function Homepage() {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="relative">
        <Home />
        <Features />
        <Strategies />
        <CTABanner />
        <AlgoTrading/>
        <RiskManagement />
        <Steps/>
        <DownloadFAQ/>
        <TestimonialsCarousel/>
      </div>
    </div>
  )
}
