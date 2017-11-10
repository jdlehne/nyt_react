import React, {Component} from "react";
//import { Link } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
//import { ArticleList, ArticleListItem } from "./components/ArticleList";
import {Container, Row, Col} from "./components/Grid";
//import  Search from "./Search";
import {Results} from "./components/Search";
//import SaveButton from "./components/SaveButton";
//import { List, ListItem } from "./components/ArticleList";
import axios from "axios";

class Main extends Component {
  state = {
    articles: [],
    title: "",
    beginDate: "",
    endDate: "",
    query: "",
    url: "",
    snippet: ""
  };

  //   componentDidMount() {
  //   this.loadArticles();
  // }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  handleFormSubmit = event => {
    console.log("searching for articles");
    event.preventDefault();
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles({q: this.state.title}).then(res => this.setState({articles: res.data.response.docs})).catch(err => console.log(err));
  };

  saveArticle = event => {
    if (event.target.id) {
      console.log("saving article: " + event.target.id);
      console.log(event.target);
      console.log(this.state.title);
      API.saveArticle({title: event.target.id, url: event.target.url, date: this.state.date}).catch(err => console.log(err));
    }
  };

  handleClick = (event) => {
    console.log("6 " + event.target.id);
    console.log(event.target.id.url);
  };

  render() {
    return (<div>
      <Nav/>
      <Jumbotron/>
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Search for a topic"/>
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button onClick={this.handleFormSubmit} type="success" className="input-lg">
                      Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        {/* <Row>
  <Search articles={this.state.articles}/>
</Row> */
        }
        <Row>
          <Results articles={this.state.articles} onClick={this.saveArticle}/>
        </Row>

      </Container>
    </div>);
  }
}

export default Main;
