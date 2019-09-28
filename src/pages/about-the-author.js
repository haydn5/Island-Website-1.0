import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import haydn5 from "../images/haydn-smaller.jpg"

import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';


const aboutTheAuthor = props => (
  <Layout>
        <SEO title="The "/>
        <section className="page-section">
          <Container>
            <h1 className="text-center">About the Author</h1>
              <Row>
                <Col md="2">
                
                </Col>
                <Col md="8">
                  <img src={haydn5} className="float-left yellow-box" alt="Haydn Adams" />
                <p>
                  Haydn S. Adams is a native Californian. He grew up on the beaches of San Diego but moved up to the San Francisco Bay Area and never left. The tech world called him and he opened his own design company, Nautilus Designs, along with becoming an adjunct faculty member of his alma mater.</p>
                <p>He wrote his first book, on wine, back in 2008: Wineries Beyond Napa Valley: Dry Creek & Alexander Valley. The book was a travel guide of sorts, seeking out the hidden gems of Northern Sonoma County. He still writes for individual wineries, often penning guest articles on wines and travel advice of the area. In addition, he’s written about wineries from Washington State to South Australia and the Barossa Valley.</p>
                <p>Travel is constantly on Haydn’s mind, in addition to his design practice, wine tasting and educating. His late Grandfather was an avid traveler and he’s attempting to make it to all, if not more, of the ports of call that he visited during his lifetime. </p>
                <p>When he’s not writing about wine or far flung South Pacific Islands, he’s often hiking the hills of Marin County, California or enjoying a glass of Sauvignon Blanc on his deck overlooking the San Francisco Bay. He’s got 48 unstamped pages left in his passport and is working to fill them all up. </p>
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