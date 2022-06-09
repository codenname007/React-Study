import {useState,useEffect } from "react";
import styled from "styled-components";
import Comment from "../components/Comment";
import Navbar from "../components/Navbar";
import insta from "../image/insta.jpg";

const Background = styled.div`
background : url(${insta}) repeat;
height : 100vh;
`

const Container = styled.div`
display: flex;
justify-content: center;
`;


function Feed(){
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  // useEffect(()=>{
  //   fetch("http://152.67.210.208:5000/feed", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error))
  // },[]);

  return(
  <Background>
  <Navbar/>
  <Container>
  <Comment/>
  </Container>
  </Background>) 
}

export default Feed;