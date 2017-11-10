import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
//import { ArticleList, ArticleListItem } from "./components/ArticleList";
import { Container, Row, Col } from "./components/Grid";
//import  Search from "./Search";
import {Results} from "./components/Search";
//import SaveButton from "./components/SaveButton";
//import { List, ListItem } from "./components/ArticleList";




  class Search extends Component {
  state = {
    articles: [],
    title: "",
    beginDate: "",
    endDate: "",
    query: "",
    url: "",
    snippet:""
  };

//   componentDidMount() {
//   this.loadArticles();
// }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    console.log("searching for articles");
   event.preventDefault();
   this.loadArticles();
 };

  loadArticles = () => {
  API
    .getArticles({q: this.state.title})
    .then(res => this.setState({articles: res.data.response.docs}))
    .catch(err => console.log(err));
};

saveArticle= event => {
  if (event.target.id) {
    console.log("saving article: " + event.target.id);
    console.log(event.target);
    console.log(this.state.title);
    API.saveArticle({
      title: this.state.title,
      url: this.state.href,
      date: this.state.date
    })
      .catch(err => console.log(err));
  }
};


handleClick=(event)=>{
  console.log("6 " + event.target.id)
  console.log(this.articles)
  //console.log("7 " + event.target.headline.main)
}


  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Search for a topic"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
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
</Row> */}
<Row>
  <Results articles={this.state.articles} onClick={this.handleClick}/>
</Row>

          {/* <Row>
            <Col size="xs-12">
               {!this.state.articles ? (
                <h1 className="text-center">No Articles to Display</h1>
              ) : (
                <ArticleList>
                  {this.state.articles.map(article => {
                    console.log(this.state.articles)
                    return (
                      <ArticleListItem
                        key={article._id}
                        title={article.headline.print_headline }
                        href={article.web_url}
                        summary={article.snippet}
                        thumbnail={article.media}
                        date={article.pub_date}
                        id={article._id}
                        onClick={this.handleClick.bind(this)}
                      />
                    );
                  })}
                </ArticleList>
              )}

            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default Search;

//onClick={this.saveArticle.bind(this, article._id)}
//(event)=>this.saveArticle(event, article._id)
{/* <strong>
  <a href={article.url} target="blank">{article.title}</a>
  <p>Published: {article.date}</p>
  <button id={article._id} className="btn-success" onClick={(event)=>this.saveArticle(event, article._id)}>Save Article</button>
</strong> */}
//onClick={(event)=>this.saveArticle(article._id, event)}
//
// <Row>
//   <Col size="md-6">
//           {this.state.articles.length ? (
//             <List>
//               {this.state.articles.map(article => (
//                 <ListItem key={article._id}>
//                   <Link to={"/articles/" + article._id}>
//                     <strong>
//                       {article.headline.print_headline || article.headline.main}
//                       {article.snippet}
//                     </strong>
//                   </Link>
//                   <SaveButton onClick={() => this.saveArticle(article._id)} />
//                 </ListItem>
//               ))}
//             </List>
//           ) : (
//             <h3>No Results to Display</h3>
//           )}
//         </Col>
// </Row>
