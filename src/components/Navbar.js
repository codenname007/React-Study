import styled from "styled-components";
import instagram from "../image/instagram.svg";
import plus from "../image/plus.svg";
import sent from "../image/Sent.svg";
import home from "../image/home.svg";
import Ellipse3 from "../image/Ellipse 3.svg";
import Heart from "../image/Heart.svg";
import Vector from "../image/Vector.png";
import {Link} from "react-router-dom";

const Nav = styled.nav`
display :flex;
justify-content:space-between;
align-items: center;
padding : 20px;
border-bottom : 1px solid rgba(118, 116, 116, 0.66);
`;

const Logo = styled.img`
padding-left : 40px;
`;

const Findbox = styled.div`
position : relative;
border-radius: 8px;
border : none;
`;

const Box = styled.div`
display : flex;
width : 20vw;
justify-content: space-around;
align-items: center ;
`;

const Input = styled.input`
border: none;
background: rgba(196, 196, 196, 0.5);
border-radius: 8px;
padding : 10px 40px;
box-sizing: border-box;
:focus{
  outline : none;
}
`;

const Scope = styled.img`
position : absolute;
top : 10px;
left : 10px;
`;

const Img = styled.img`
width : 20px;
height: 20px;
`;


function Navbar(){

  return (<>
  <Nav>
  <Link to="/"><Logo src={instagram}/></Link>
    <Findbox>
    <Scope src={Vector}/>
    <Input placeholder="검색"/>
    </Findbox>
    <Box>
    <Link to="/"><Img src={home}/></Link>
    <Img src={sent}/>
    <Img src={plus}/>
    <Img src={Ellipse3}/>
    <Img src={Heart}/>
    </Box>
  </Nav>
  </> );
}

export default Navbar;