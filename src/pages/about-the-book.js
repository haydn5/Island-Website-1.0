import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import kindle from "../images/kindle.jpg"
import book from "../images/cover-and-back-cover.jpg"
import ipad from "../images/ipad-cover-800x1119.jpg"
import buyAmazon from "../images/buy-button-amazon-1.png"

import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';


const aboutTheBook = props => (
  <Layout>
        <SEO title="The Book"/>
        <section className="page-section">
          <Container>
            <h1 className="text-center">About the Book</h1>
              <Row>
                <Col md="2">
                </Col>
                <Col md="8">
                <h2>There’s a magical place in the middle of nowhere in the South Pacific. </h2>
                <p>Devoid of stoplights, Starbucks or free wifi. Where coconut juice is refreshing and the beauty pristine. It’s a place where people often ask, “What exactly do you do there?” Author Haydn Adams discovered the answer to that question with every day he spent on the island nation. </p>
                <p>But it wasn’t the white sandy beaches or the world’s most beautiful lagoon that drew him back to the Cook Islands a second time. It was the islanders who showed Haydn how to live, laugh and enjoy paradise. Pride and love are interwoven into daily life in this island nation. Enjoy reading how Haydn fell in love with an island, maybe you will too.</p>
                </Col>
                <Col md="2">
                </Col>
              </Row>
          </Container>
        </section>
        
      </Layout>
);

export default aboutTheBook;

export const pageQuery = graphql`
  query {
    iBookstore: file(relativePath: { eq: "ibookstore-500x155.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    buyAmazon: file(relativePath: { eq: "buy-button-amazon.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;