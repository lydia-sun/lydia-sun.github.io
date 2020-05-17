import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function notFound() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </Helmet>
      <div className="content">
        <h2 style={{ margin: `10rem 5rem` }} href="./index.js">
          Nothing here! Click my name to go back.
        </h2>
      </div>
    </Layout>
  )
}
