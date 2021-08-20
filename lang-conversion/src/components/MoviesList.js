import React, {Component} from 'react';
import "./MoviesList.css"
class MoviesList extends Component {
    constructor(){
        super()
        this.state = {
            movieTitleInput:"",
            movieImageInput:"",
            movieList: [
                {
                    movieTitle: "Lightstorm1",
                    image: "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-2%2F522%2F697522%2FNqdCJtF9%2F85983568716f4267b996c733acdb05d5&methods=resize%2C1000%2C5000"
                },
                {
                    movieTitle: "Lightstorm2",
                    image: "https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-ipage-v1-0-2%2F522%2F697522%2FNqdCJtF9%2F66cdf336f9d6419093844cd52b18b65c&methods=resize%2C1000%2C5000"
                }
            ]
        }
    }
    handleMovieTitleInput(e){
        
        this.setState({movieTitleInput : e.target.value
        })
    }
    handleMovieImageInput(e){
        
        this.setState({movieImageInput : e.target.value
        })
    }
    handleAddMovie(){
        const {movieList, movieTitleInput, movieImageInput} = this.state
        this.setState({
            movieList: [...movieList,{movieTitle: movieTitleInput , image: movieImageInput}],
            movieImageInput: "",
            movieTitleInput: ""

        })
    }
    render(){
        console.log(this.state)
        const movieCards = this.state.movieList.map(element => {
            return(
                <div>
                <p>{element.movieTitle}</p>
                <img className="movie-card" src={element.image} alt={element.movieTitle}/>
                </div>
            )
        })
        return(
            <div>
                <h1> Movie List</h1>
                <input onChange={(e) => this.handleMovieTitleInput(e)}placeholder="movie title" value={this.state.movieTitleInput}/>
                <input onChange={(e) => this.handleMovieImageInput(e)} placeholder="movie image" value={this.state.movieImageInput}/>
                <button onClick={() => this.handleAddMovie()}>Add movie to list</button>
                <section className="movie-cards-container">
                {movieCards}
                </section>
               
            </div>
        )
    }
}
export default MoviesList;


