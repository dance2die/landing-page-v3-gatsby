import React, { useContext } from 'react'

import SEO from '../components/seo'
import BoxContext from '../components/Boxes/Context'

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

const IndexContent = () => {
  const { closeAllBoxes } = useContext(BoxContext)
  console.log(`context`, closeAllBoxes, BoxContext)

  return (
    <section className="layout" onClick={() => closeAllBoxes()}>
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
      <article className="box-container">
        <BoxCenter />
        <WritingsBox />
        <DevBox />
        <SocialBox />
        <MiscBox />
      </article>
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
}

const IndexPage = () => (
  <BoxContainer>
    <IndexContent />
  </BoxContainer>
)

export default IndexPage
