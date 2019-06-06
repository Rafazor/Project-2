import React from 'react';
import {Text, TextInput, View, Picker, StyleSheet} from "react-native";
import {MOVIE_API_KEY} from "../ENV";

export default class SearchScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: "OMDb API App",
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            userSearch: '',
            filterType: ''
        };
    }

    getMovieList = async () => {
        try {
            let response = await fetch(
                'http://www.omdbapi.com/?apikey=' + MOVIE_API_KEY + '&s=' + this.state.userSearch + '&type=' + this.state.filterType,
            );
            let responseJson = await response.json();
            if (responseJson.Response === 'False') {
                alert("No result, try again!")
            } else {
                this.props.navigation.navigate('SearchResults', {
                    movieList: responseJson,
                    searchText: this.state.userSearch
                })
            }
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search something..."
                        onChangeText={(userSearch) => this.setState({userSearch})}
                    />
                    <Text style={styles.searchButton} onPress={() => this.getMovieList()}>SEARCH</Text>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 20}}>Filter by: movie, series,
                    episode</Text>
                <View>
                    <Picker
                        selectedValue={this.state.filterType}
                        style={styles.pickerType}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({filterType: itemValue})
                        }>
                        <Picker.Item label="All results" value=""/>
                        <Picker.Item label="Movie" value="movie"/>
                        <Picker.Item label="Series" value="series"/>
                        <Picker.Item label="Episode" value="episode"/>
                    </Picker>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        paddingLeft: 10,
        borderWidth: 1,
        width: 300,
    },
    textInputContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    searchButton: {
        color: "red",
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        lineHeight: 40,
        fontSize: 13,
        borderLeftWidth: 0
    },
    pickerContainer: {
        borderColor: 'gray',
        borderWidth: 1,
    },
    pickerType: {
        height: 40,
        width: 200,
        paddingLeft: 5,
        paddingRight: 5
    }
});