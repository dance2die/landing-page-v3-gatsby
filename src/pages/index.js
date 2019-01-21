import React from 'react'

import SEO from '../components/seo'

import {
  BoxContainer,
  WritingsBox,
  DevBox,
  SocialBox,
  MiscBox,
} from '../components/Boxes'
import { ExternalLink } from '../components/util'

import Background from '../components/Background'

import '../styles/styles.scss'

const IndexPage = () => (
  <section className="layout">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="edge" />
    <header>
      <h1 className="title">Hi, I am Sung 👋</h1>
    </header>
    <BoxContainer>
      <WritingsBox />
      <DevBox />
      <SocialBox />
      <MiscBox />
    </BoxContainer>
    <footer>
      © {new Date().getFullYear()} Built with
      <ExternalLink url="https://www.gatsbyjs.org">
        <span style={{ margin: '0 0.5rem' }}>Gatsby</span>
      </ExternalLink>
      on
      <ExternalLink url="https://codesandbox.io/s/5wjy6rvn3k">
        <span style={{ margin: '0 0.5rem' }}>CodeSandbox</span>
      </ExternalLink>
    </footer>
    <Background />
  </section>
)

export default IndexPage
