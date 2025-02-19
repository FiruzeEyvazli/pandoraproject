import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import Rings from './components/twoSec/Rings'
import FirstSec from './components/firstSec/FirstSec'



const RingsSection = () => {
  return (
    <div>
        <Layout>
            <FirstSec/>
            <Rings/>
        </Layout>
    </div>
  )
}

export default RingsSection