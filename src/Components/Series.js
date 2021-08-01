import React, { Component } from "react"
import axios from 'axios';
import styled from 'styled-components';

const Series = axios.create({

    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=92c85de029c32c39e04a804270d6157b"
    
})

const Fundo = styled.div`
background:#000000;
border: double 10px #FF0000;
`


const SectionTitulo = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-left:3%;
color:red;
margin-top:5%;
`

const SectionSeries = styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content:center;
cursor:pointer;
transition:1s;

&:houver{
  transform: scale(1.1);
}
`

const Lista = styled.ul`
list-style:none;
margin: 1rem;
border: double 8px #F8F8FF;
border-radius:20px;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
color:#FF6347;
`
const Img = styled.img`
margin-right:14%;
border-radius:20px;
margin-top:10%;
`
const Li =styled.li`
margin-right:14%;
`

const Titulo = styled.h2`
display:flex;
justify-content:center;
font-size:55px;
color:#F8F8FF
`

const Int = styled.input`
width: 35rem;
height:2rem;
border-radius:20px;
margin-left:3%;
border: solid 5px #FF0000;
outline: none;
`


class series extends Component {
  
    state = {
      series: [],
      filtro:[]
    };
  
    componentDidMount() {
      this.getSeries()
    }
  
    getSeries = async () => {
      const response = await  Series.get();
      console.log(response.data.results)
  
      const imgSerie = response.data.results.map((item) => {
        return{
          ...item,
          poster_path: `https://image.tmdb.org/t/p/w300${item.poster_path}`
        }
      })
      
      this.setState({
        series: imgSerie,
        filtro: imgSerie
      })

    }
    
      handleChange = (event) => {
        const { series } = this.state;
        if (event.target.value === "") {
           this.setState({
               filtro: series
           });
           return;
        }
        const filterItemConvert = series.filter((item) =>{
          if (item.original_name.toLowerCase().includes(event.target.value.toLowerCase())) {
            return true;
          }
          return false
        });
        this.setState({
            filtro:filterItemConvert
        });
      }

    
   
      render() {
        return (
          <Fundo>
            <SectionTitulo>
              <div>
                <h1>Escolha sua Serie:</h1>
              </div>
              <div>
                <Int type="text" placeholder="Escreva Aqui" onChange={this.handleChange} />
              </div>
            </SectionTitulo>
            <div>
              <div>
                <Titulo>Series</Titulo>
              </div>
              <SectionSeries>
                {this.state.filtro.map((item, index) => (
                  <Lista key={index}>
                    <Img src={item.poster_path} alt={`poster do filme ${item.original_name}`} />
                    <Li>{item.original_name}</Li>
                    <Li>{item.first_air_date}</Li>
                    <Li>{item.vote_average}</Li>
                  </Lista>
                ))}
              </SectionSeries>
            </div>
          </Fundo>
    
        );
      }
    }
  
export default series