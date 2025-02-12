import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import Necklaces from './components/necklaces/Necklaces'
import OneSection from './components/firstSection/OneSection'

const NecklacesSection = () => {
  return (
    <div>
        <Layout>
            <OneSection/>
            <Necklaces/>
        </Layout>
    </div>
  )
}

export default NecklacesSection