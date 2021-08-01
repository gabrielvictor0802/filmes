import React, { Component } from "react"
import axios from 'axios'
import styled from 'styled-components';

const Filmes = axios.create({

  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=92c85de029c32c39e04a804270d6157b"

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

const SectionMovies = styled.div`
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
margin-top:14%;
border-radius:20px;
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




class Movie extends Component {

  state = {
    movies: [],
    filtro: []
  };

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const response = await Filmes.get();
    console.log(response.data.results)

    const imgFilmes = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w300${item.poster_path}`
      }
    })

    this.setState({
      movies: imgFilmes,
      filtro: imgFilmes
    });

  }

  handleChange = (event) => {
    const { movies } = this.state;
    if (event.target.value === "") {
      this.setState({
        filtro: movies
      });
      return;
    }
    const filterItemConvert = movies.filter((item) => {
      if (item.original_title.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true;
      }
      return false
    });
    this.setState({
      filtro: filterItemConvert
    });
  }



  render() {
    return (
      <Fundo>
        <SectionTitulo>
          <div>
            <h1>Escolha seu filme:</h1>
          </div>
          <div>
            <Int type="text" placeholder="Escreva Aqui" onChange={this.handleChange} />
          </div>
        </SectionTitulo>
        <div>
          <div>
            <Titulo>Filmes</Titulo>
          </div>
          <SectionMovies>
            {this.state.filtro.map((item, index) => (
              <Lista key={index}>
                <Img src={item.poster_path} alt={`poster do filme ${item.original_title}`} />
                <Li>{item.original_title}</Li>
                <Li>{item.release_date}</Li>
                <Li>{item.vote_average}</Li>
              </Lista>
            ))}
          </SectionMovies>
        </div>
      </Fundo>

    );
  }
}
export default Movie;
