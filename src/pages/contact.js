import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import haydn5 from "../images/haydn-smaller.jpg"

import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';


const aboutTheAuthor = props => (
  <Layout>
        <SEO title="Contact"/>
        <section className="page-section">
          <Container>
            <h1 className="text-center">Contact</h1>
              <Row>
                <Col md="2">
                
                </Col>
                <Col md="8">
                <p>
                Questions? Speaking Engagements? Just some praise for the book?</p>
                <p>Feel free to contact Haydn Adams at <a href="mailto:haydn@nautilusdesigns.com">haydn@nautilusdesigns.com</a>.</p>

<p>You can also reach him on Facebook through his parent company, Nautilus Designs at <a href="https://facebook.com/nautilusdesigns.com">facebook.com/nautilusdesigns.com</a>.</p>
                </Col>
                <Col md="2">
                </Col>
              </Row>
          </Container>
        </section>
        
      </Layout>
);

export default aboutTheAuthor;

export const pageQuery = graphql`
  query {
    haydn: file(relativePath: { eq: "haydn-smaller.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`;