import React, {Component} from 'react';
import "./MoviesList.css"
class MoviesList extends Component {
    constructor(){
        super()
        this.state = {
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
    render(){
        const movieCards = this.state.movieList.map(element => {
            return(
                <div>
                <p>{element.movieTitle}</p>
                <img className="image" src={element.image} alt={element.movieTitle}/>
                </div>
            )
        })
        return(
            <div>
                <h1> Movie List</h1>
                {movieCards}
            </div>
        )
    }
}
export default MoviesList;


