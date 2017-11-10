import React from "react";
import Thumbnail from "../Thumbnail";
//import SaveButton from "../SaveButton";
import { Container, Row, Col } from "../Grid";
// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ArticleListItem = props => (
  <li className="list-group-item" id={props.id}>
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
        </Col>
        <Col size="xs-6 sm-8">
          <h3><a href={props.href}>{props.title}</a></h3>
          <br></br>
          <h4 style={{'fontStyle':"italic"}}>Summary: {props.summary}</h4>
          <br></br>
          <p>Published: {props.date}</p>
        </Col>
        {/* <Col size="xs-2 sm-2">
          <SaveButton onClick={props.onClick}/>
        </Col> */}
      </Row>
      <br></br>
    </Container>
  </li>
);

//
// import React from "react";
// import Thumbnail from "../Thumbnail";
// import SaveButton from "../SaveButton";
// import { Container, Row, Col } from "../Grid";
// // RecipeListItem renders a bootstrap list item containing data from the recipe api call
// export const ArticleListItem = props => (
//   <li className="list-group-item">
//     <Container>
//       <Row>
//         <Col size="xs-4 sm-2">
//           <Thumbnail src={props.thumbnail || "https://placehold.it/300x300"} />
//         </Col>
//         <Col size="xs-6 sm-8">
//           <h3><a href={props.href}>{props.title}</a></h3>
//           <br></br>
//           <h4 style={{'fontStyle':"italic"}}>Summary: {props.summary}</h4>
//           <br></br>
//           <p>Published: {props.date}</p>
//         </Col>
//         <Col size="xs-2 sm-2">
//           <SaveButton
//             type="success"
//             className="input-lg"
//             style={{float: "right"}}
//           >
//             Save Article
//           </SaveButton>
//         </Col>
//       </Row>
//       <br></br>
//     </Container>
//   </li>
// );
