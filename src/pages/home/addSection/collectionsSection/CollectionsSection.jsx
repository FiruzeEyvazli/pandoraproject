import React from 'react'
import Layout from '../../../../components/common/layout/Layout'
import FirstS from './components/firstS/FirstS'
import Collection from './components/collection/Collection'

const CollectionsSection = () => {
  return (
    <div>
        <Layout>
            <FirstS/>
            <Collection/>
        </Layout>
    </div>
  )
}

export default CollectionsSection