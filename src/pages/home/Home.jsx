import React from 'react'
import Layout from '../../components/common/layout/Layout'
import SlideSec from './components/slideSec/SlideSec'
import TwoSec from './components/twoSec/TwoSec'
import ForEvery from './components/forEvery/ForEvery'
import BlackSection from './components/blackSec/BlackSection'


const Home = () => {
  return (
    <>
    <Layout>
        <SlideSec/>
        <TwoSec/>
        <ForEvery/>
        <BlackSection/>
    </Layout>
    </>
  )
}

export default Home