import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstTerms from './components/firstTerms/FirstTerms'
import TwoTerms from './components/twoTerms/TwoTerms'

const TermsCon = () => {
  return (
    <div>
        <Layout>
            <FirstTerms/>
            <TwoTerms/>
        </Layout>
    </div>
  )
}

export default TermsCon