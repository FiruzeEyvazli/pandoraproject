import React from 'react'
import Bracelet from './components/firstSection/Bracelet'
import Layout from '../../../../components/common/layout/Layout'
import FirstSection from './components/twoSection/FirstSection'

const BraceletSection = () => {
  return (
    <div>
        <Layout>
            <FirstSection/>
        <Bracelet/>
        </Layout>
    </div>
  )
}

export default BraceletSection