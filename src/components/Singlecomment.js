import {useState,useEffect } from "react";
import styled from "styled-components";

const Container = styled.ul`
`;

const Li = styled.li`
display : flex;
justify-content:space-between;
background-color:#E6E6E6;
opacity: 0.7;
padding : 10px;
margin : 10px;
border-radius: 10px;
`

const Button = styled.button`
border : none;
cursor : pointer;
`;





function Singlecomment(props){

  const onClick = ({target})=>{
    const id = target.getAttribute('data-id')
    // const idx = target.getdata('id')
    props.setContents(props.contents.filter((_,idx) => idx !== Number(id) ))
    
  }

  return(
    <Container>
      {props.contents.map((val,idx) =>
      <Li key={idx}>{val}
      <Button id={idx} data-id={idx} onClick = {onClick}>❌</Button>
      </Li>)}
    </Container>
  );
}

export default Singlecomment;