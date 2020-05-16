import React from "react"
import Layout from "../components/layout"
import Folder from "../components/folder"
import "../components/global.css"

export default function Home() {
  return (
    <Layout>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      ></link>
      <Folder />
    </Layout>
  )
}
