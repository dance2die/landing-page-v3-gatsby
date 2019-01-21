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

import BoxCenter from '../components/BoxCenter'
import Background from '../components/Background'

import '../styles/styles.scss'

const IndexPage = () => (
  <section className="layout">
    <SEO
      title="Welcome to Sung's Domain 🚀"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <header>
      <h1 className="title">
        Hi, I am Sung{' '}
        <span role="img" aria-label="wave hand">
          👋
        </span>
      </h1>
    </header>
    <BoxContainer>
      <BoxCenter />
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
