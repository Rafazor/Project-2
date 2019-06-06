import React from 'react';
import {ScrollView, Text, Image, View, Dimensions} from "react-native";

const MovieList = ({movieList, navigation, getMoreResults}) => {
    return (
        <ScrollView
            style={{alignSelf: "stretch", paddingLeft: 15}}
            onScroll={(e) => {
                let windowHeight = Dimensions.get('window').height,
                    height = e.nativeEvent.contentSize.height,
                    offset = e.nativeEvent.contentOffset.y;
                if (windowHeight + offset >= height) {
                    getMoreResults();
                }
            }}>
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
        </ScrollView>
    )
};

export default MovieList;