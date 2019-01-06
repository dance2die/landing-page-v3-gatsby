import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import {
  BoxContainer,
  WritingsBox,
  DevBox,
  SocialBox,
  MiscBox,
} from '../components/Boxes'
import '../styles/styles.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="layout">
      <head>
        <h1 className="title">Hi, I am Sung</h1>
      </head>
      <BoxContainer>
        <WritingsBox />
        <DevBox />
        <SocialBox />
        <MiscBox />
      </BoxContainer>
    </section>
  </Layout>
)

export default IndexPage
