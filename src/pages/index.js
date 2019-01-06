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
      © {new Date().getFullYear()} Built with
      <ExternalLink url="https://www.gatsbyjs.org">{` `}Gatsby</ExternalLink>
      on{' '}
      <ExternalLink url="https://codesandbox.io/s/5wjy6rvn3k">
        CodeSandbox
      </ExternalLink>
    </footer>
  </section>
)

export default IndexPage
