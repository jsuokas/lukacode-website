import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const siteTitle = author.node.title

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="author">
            <div className="authorImage">
              <img src={author.node.image.file.url} alt={author.node.image.file.filename} />
            </div>
            <div className="authorBio">
              <h2>{author.node.title}</h2>
              <p
              dangerouslySetInnerHTML={{
                __html: author.node.description.childMarkdownRemark.html,
              }}
            />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson {
      edges {
        node {
          description {
            childMarkdownRemark {
              html
            }
            description
          }
          heroimage {
            file {
              fileName
              url
            }
          }
          image {
            file {
              url
              fileName
              contentType
            }
            id
          }
          title
        }
      }
    }
  }
`
