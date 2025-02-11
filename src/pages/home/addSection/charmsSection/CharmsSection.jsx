import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import BlackSection from '../../components/blackSec/BlackSection'
import FirstSection from './components/firstSection/FirstSection'
import Charms from './components/twoSection/Charms'


const CharmsSection = () => {
  return (
    <div>
        <Layout>
          <FirstSection/>
          <Charms/>
            <BlackSection/>
        </Layout>
    </div>
  )
}

export default CharmsSection