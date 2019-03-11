import React from 'react';
import {Text, View} from "react-native";

import {MOVIE_API_KEY} from "../ENV";


export default class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movieDetails: {}
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch(
                'http://www.omdbapi.com/?apikey=' +  MOVIE_API_KEY + '&i=' + this.props.navigation.getParam("imdbID"),
            );
            let responseJson = await response.json();
            this.setState({
                movieDetails: responseJson
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const movie = this.state.movieDetails;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{movie.Title}</Text>
                <Text>{movie.Type}</Text>
                <Text>{movie.Year}</Text>
                <Text>{movie.Genre}</Text>
                <Text>{movie.Actors}</Text>
                <Text>{movie.Plot}</Text>
            </View>
        );
    }
}