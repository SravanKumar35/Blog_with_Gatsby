import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Gatsby JS Crash Course</h1>
    <p>This is a sample website for gatsby crash course</p>
  </Layout>
)

export default IndexPage
