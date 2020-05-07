import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import "./Home.css";
import Movie from '../components/Movie';


class Like extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies = async () => {
    const {data: {data: {movies}}}= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=like_count");
    this.setState({movies, isLoading: false});
  };

  componentWillMount(){
    this.getMovies();
  };

  render(){
    const {isLoading, movies} = this.state;
    return <section className="container">{ isLoading ? (
    <div className="loader">
      <span className="loader_text">Loading...</span>
    </div> 
    ): (
      <div className="movies">
        {
          movies.map(movie => (
            <Movie url={movie.url} key={movie.id} title={movie.title} year={movie.year} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>
        ))
        }
      </div>
    )
    }</section>;
    
  }
  
}

export default Like;
