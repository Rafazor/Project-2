import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";

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
                'http://www.omdbapi.com/?apikey=' + MOVIE_API_KEY + '&i=' + this.props.navigation.getParam("imdbID"),
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
            <View style={{}}>
                <View style={styles.detailsImageContainer}>
                    <Image
                        style={styles.detailsImage}
                        source={{uri: movie.Poster}}
                    />
                </View>
                <View style={[styles.detailsTextContainer]}>
                    <Text style={[styles.detailsTitle]}>{movie.Title} ({movie.Year}) - {movie.Type}</Text>
                    <Text><Text style={styles.bold}>Released:</Text> {movie.Released}</Text>
                    <Text><Text style={styles.bold}>Genre:</Text> {movie.Genre}</Text>
                    <Text><Text style={styles.bold}>Actors:</Text> {movie.Actors}</Text>
                    <Text><Text style={styles.bold}>Language:</Text> {movie.Language}</Text>
                    <Text style={styles.detailsPlot}>{movie.Plot}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailsImage: {
        width: 300,
        height: 300,
        marginTop: 10
    },
    detailsImageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    detailsTextContainer: {
        marginLeft: 20,
        marginRight: 20
    },
    detailsTitle: {
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    bold: {fontWeight: 'bold'},
    detailsPlot: {
        marginTop: 10,
        marginBottom: 10
    }
});