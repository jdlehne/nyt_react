import React from "react";
//import Thumbnaili from "../Thumbnail";
import {Container, Row, Col } from "../Grid";
//import SaveButton from "../SaveButton";

export const Results = props => (

    <div>
        {props
            .articles
            .map(article => <ul key={article._id}>
              <Container>
                <Row>
                  <Col size="md-3">
                    <h4>
                      <a href={article.web_url}>{article.multimedia.filter(media => media.subtype === 'wide').map(media => (
                      <img src={'https://nytimes.com/' + media.url} key={article.headline.main} alt={article.headline.main} />))}</a>
                    </h4>
                  </Col>
                    <Col size="md-7">
                      <h3>
                        <a href={article.web_url}>{article.headline.print_headline || article.headline.main}</a>
                      </h3>
                      <h4>
                        {article.snippet}<a href={article.web_url} style={{fontStyle:"italic"}}>  ...Read More</a>
                      </h4>
                      <h6>Published Date: {article.pub_date}</h6>
                    </Col>
                    <Col size="md-2">
                        <button className="btn btn-success input-lg" id={article.headline.print_headline || article.headline.main} url={article.web_url} onClick={props.onClick}>Save Article</button>
                    </Col>
                    <hr></hr>
                  </Row>
                </Container>
            </ul>)}
    </div>
);
