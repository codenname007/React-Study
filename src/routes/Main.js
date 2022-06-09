import styled from "styled-components";
import {  faInstagramSquare , } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {Link} from "react-router-dom";
import insta from "../image/insta.jpg";


const Container = styled.div`
display : flex;
flex-direction: column;
justify-content: center;
align-items:center;
height : 100vh;
color : #424242;
background : url(${insta}) repeat center center;
`;

const Header = styled.div`
font-family: 'Pacifico', cursive;
font-size : 60px;
margin : 30px;
`;

const Box = styled.div`
display: flex;
flex-direction: coulumn;
align-items: center;
justify-content: center;
margin : 20px;
position : relative;
::before{
  content : ' ';
  position : absolute;
  background : #424242;
  height: 1px;
  width: 0;
  transition: 0.5s;
  bottom  : -5px;
  left : 50%;
  transform : translateX(-50%);
}
:hover:before{
  width : 100%;
}
`;

const Content = styled.div`
font-family: 'Righteous', cursive;
font-weight: bold;
font-size : 40px;
padding-left : 10px;
`

const Footer = styled.div`
display : flex;
flex-direction : column;
justify-content: center;
align-items: center;
width : 700px;
border-top : 1px solid black;
margin-top : 20px;
`
const Copyright = styled.div`
margin : 20px;
font-size: 15px;
font-weight : bold;
`;
const Seemore = styled.a`
border-bottom : 1px solid black;
border-radius: 50px;
width : 150px;
text-align: center ;
margin : 10px;
:hover{
  background-color: #424242;
  color : white;
}
`;


function Main(){
  return (
  <Container>
  <FontAwesomeIcon icon={faInstagramSquare}
   style ={{
    fontSize : '200px',
    color: 'white',
  }}/>
  <Header>Bin'stagram</Header>
  <Box>
  <FontAwesomeIcon icon={faHashtag}
   style ={{
    fontSize : '35px',
    color: '',
  }}/>
  <Link to ="/feed"><Content>Feed</Content></Link>
  </Box>
  <Box>
  <FontAwesomeIcon icon={faHashtag}
   style ={{
    fontSize : '35px',
    color: '',
  }}/>
  <Link to ="/profile"><Content>Profile</Content></Link>
  </Box>
  <Footer>
  <Copyright>CopyRight by SubinLee</Copyright>
  <Seemore href="https://codenname007.github.io/webportfolio/webPortfolio.html">See more</Seemore>
  </Footer>
  </Container> )
}

export default Main;