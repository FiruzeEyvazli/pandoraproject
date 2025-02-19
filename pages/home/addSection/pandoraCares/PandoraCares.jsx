import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstSec from './components/firstSec/FirstSec'
import TwoSec from './components/twoSec/TwoSec'

const PandoraCares = () => {
  return (
    <div>
        <Layout>
            <FirstSec/>
            <TwoSec/>
        </Layout>
    </div>
  )
}

export default PandoraCares