import React from 'react';
import {ScrollView, Text, Image, View} from "react-native";

const MovieList = ({movieList, navigation, getMoreResults}) => {
    return (
        <ScrollView style={{alignSelf: "stretch", paddingLeft: 15}}>
            {movieList.map((prop, key) => {
                return (
                    <View key={key} style={{}}>
                        <Image
                            style={{width: 120, height: 120, marginBottom: 10}}
                            source={{uri: prop.Poster}}
                        />
                        <Text
                            style={{marginBottom: 10, color: 'blue'}}
                            onPress={() => navigation.navigate('Details', {
                                imdbID: prop.imdbID
                            })}>{prop.Title} ({prop.Year})</Text>
                        <Text
                            style={{marginBottom: 40}}
                        >Type: {prop.Type}</Text>
                    </View>
                );
            })}
            <Text style={{marginBottom: 40}} onPress={() => getMoreResults()}>Get more results...</Text>
        </ScrollView>
    )
};

export default MovieList;