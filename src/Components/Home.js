
import styled from 'styled-components';

const Fundo = styled.div`
background:#000000;
`
const H1 = styled.h1`
color:white;
height:50%;
display:flex;
justify-content:center;
align-items:center;
margin-top:10%;
font-size:40px;
`


const H2 = styled.h2`
color:red;
display:flex;
justify-content:center;
align-items:center;
padding:9%;
margin:0%;
font-size:150px;
`


function Home() {
    return (
      <Fundo>
        <H1>Home</H1>
        <H2>GBFLIX</H2>
      </Fundo>
   )
  }

  export default Home