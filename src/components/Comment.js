import {useState,useEffect } from "react";
import styled from "styled-components";
import Singlecomment from "./Singlecomment";

const Form  = styled.form`
margin : 20px;
height : 100px;
width : 250px;
background-color:#E6E6E6;
border-radius: 15px;
position: relative;
text-align: center;
`;

const Input = styled.input`
background-color:#E6E6E6;
border : none;
height : 100px;
width : 200px;
border-radius: 15px;
opacity : 0.8;
:focus{
  outline : none;
}
text-align: center;
`;

const Button = styled.button`
border : 1px solid rgba(0,0,0,0.3);
border-radius: 5px;
background-color:#E6E6E6;
cursor: pointer;
position :absolute;
right :3px;
bottom :3px;
`;


function Comment(){
  const[content ,setContent] = useState("");
  const[contents, setContents] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    if(content === ""){
      return;
    }
    else{
      setContent("");
      setContents((cur)=>[content, ...cur]);
    }
  }

  const onChange = (event) => {
    setContent(event.target.value);
  }

  return (
  // <Form action="" method="post" onSubmit={onSubmit}>
  <>
  <Input value = {content} placeholder="댓글을 입력해주세요"
  onChange={onChange}/>
  <Singlecomment contents ={contents} setContents={setContents}/>
  <Button onClick={onSubmit}>작성</Button>
  </>
// </Form>
)

}

export default Comment;