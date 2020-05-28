import React from "react"
import { graphql } from "gatsby"
import { Cards, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Travel destinations"
        description="Check the most popular travel destinations in Europe."
        // image={data.hero.url}
      />

      <div>
        <div className="flex-1">
          <Cards nodes={data.items.nodes} />
        </div>
      </div>
      {/* <Hero
        tag="#travel"
        title="Travel destinations"
        description="Check the most popular travel locations in Europe."
      /> */}
    </Layout>
  )
}

export const query = graphql`
  query SchoolsQuery($tableName: String!) {
    # hero: file(relativePath: { eq: "hero-travel.jpg" }) {
    #   ...HeroImageFragment
    # }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          College_University
          State
          County
          Type
          slug
        }
      }
    }
  }
`
