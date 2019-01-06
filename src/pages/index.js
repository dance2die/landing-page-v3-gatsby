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
  <section className="layout">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <head>
      <h1 className="title">Hi, I am Sung</h1>
    </head>
    <BoxContainer>
      <WritingsBox />
      <DevBox />
      <SocialBox />
      <MiscBox />
    </BoxContainer>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </section>
)

export default IndexPage
