import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Folder from "../components/folder"
import "../components/global.css"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lydia Sun.</title>
      </Helmet>
      <Folder />
    </Layout>
  )
}
