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


const test3 = props => (
  <Layout>
        <SEO title="The Book"/>
        <section className="page-section">
          <Container>
            <h1 className="text-center">Tales of Accidental Adventures in the Cook Islands</h1>
            <Row>
              <Col md="4" className="text-center">
              <img src={kindle} alt="Kindle" className="img-fluid" style={{ maxHeight: `300px`, marginBottom: `1.45rem` }} />
              <h2>Kindle Edition<br/>
$9.99</h2>
<p className="text-center">
              <a href="https://www.amazon.com/How-Fell-Love-Island-Accidental-ebook-dp-B07JKLY142/dp/B07JKLY142/ref=mt_kindle?_encoding=UTF8&me=&qid=1542067343">
 <Img fluid={props.data.buyAmazon.childImageSharp.fluid} className="img-fluid"  style={{ maxWidth: `200px`, margin: `0 auto` }} alt="Book" /></a>
 </p>              </Col>
              <Col md="4" className="text-center">
              <img src={book} alt="Book" className="img-fluid" style={{ maxHeight: `300px`, marginBottom: `1.45rem` }} />
              <h2>Kindle Edition<br/>
$9.99</h2>
<p className="text-center">
<a href="https://www.amazon.com/How-Fell-Love-Island-Accidental-ebook-dp-B07JKLY142/dp/B07JKLY142/ref=mt_kindle?_encoding=UTF8&me=&qid=1542067343">
 <Img fluid={props.data.buyAmazon.childImageSharp.fluid} className="img-fluid"  style={{ maxWidth: `200px`, margin: `0 auto` }} alt="Book" /></a>
 </p>
              </Col>
      
              <Col md="4" className="text-center">
              <img src={ipad} alt="iPad Format" className="img-fluid" style={{ maxHeight: `300px`, marginBottom: `1.45rem` }} />
              <h2>iPad/iPhone<br />
$9.99</h2>    
              <p className="text-center">
              <a href="https://books.apple.com/us/book/how-i-fell-in-love-with-an-island/id1439649265">
 <Img fluid={props.data.iBookstore.childImageSharp.fluid} className="img-fluid"  style={{ maxWidth: `170px`, margin: `0 auto` }} alt="Book" /></a>
 </p>
              </Col>
            </Row>
          </Container>
        </section>
        
      </Layout>
);

export default test3;

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