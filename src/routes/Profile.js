import styled from "styled-components";
import Navbar from "../components/Navbar";
import insta from "../image/insta.jpg";
import people from "../image/people.jpg";
import 배경1 from "../image/배경1.jpg";
import 배경2 from "../image/배경2.jpg";
import 배경3 from "../image/배경3.jpg";




const Background = styled.div`
background : url(${insta}) repeat;
height: 100vh;
`
const Container = styled.div`
width : 800px;
margin : auto;
`

const Image = styled.div`
background : url(${people}) center;
width : 150px;
height: 150px;
border-radius : 50%;
margin-right : 30px;
`;

const MenuContainer = styled.div`
height : 250px;
display : flex;
justify-content: center;
padding : 50px;
border-bottom : 1px solid ;
`;

const ListBox = styled.div`
display : flex;
flex-direction: column;
justify-content: space-around;
width : 50%;
font-weight: bold;

`;

const HeaderBox = styled.div`
display : flex;
justify-content:space-around ;
align-items:center ;
`;

const Header = styled.div`
font-size: 30px;
`;

const Button = styled.button`
border : none;
border-radius:10px;
cursor : pointer;
`;

const ContentBox = styled.ul`
display : flex;
justify-content: space-around;
font-weight: bold;
`;

const Content = styled.li`
`;

const Intro = styled.p`
text-align : center;
`

const ImageBox = styled.div`
display : grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 25px;
width : 800px;
margin-top : 30px;
`;

const Imagefeed = styled.img`
width : 250px;
height : 230px;
overflow: hidden;
border-radius: 10px;
cursor : pointer;
:hover{
  opacity : 0.5;
}
`;



function Profile(){
  return(
    <Background>
    <Navbar/>
    <Container>
    <MenuContainer>
    <Image/>
    <ListBox>
      <HeaderBox>
      <Header>I Subin8411</Header>
      <Button>프로필 편집</Button>
      </HeaderBox>
      <ContentBox>
        <Content>게시물 : 3</Content>
        <Content>팔로워 : 1004</Content>
        <Content>팔로우 : 998</Content>
      </ContentBox>
      <Intro>
        인스타 클론입니다 호호호
      </Intro>
    </ListBox>
    </MenuContainer>
    <ImageBox>
      <Imagefeed src={배경1}/>
      <Imagefeed src={배경2}/>
      <Imagefeed src={배경3}/>
    </ImageBox>
    </Container>
    </Background>
  ) 

}

export default Profile;