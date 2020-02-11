import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


function Weather({locationname, temp}){
    return (
    <View style={styles.container}>
        <Text style={styles.loadingText}>{locationname} {temp}</Text>
    </View>
);
}
/*
class Weather extends React.Component{
    state={

    }
    render(){
        return (
            <View style={styles.container}>
                <Text>weather Page</Text>
            </View>
        );
    }
}*/

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA',
        padding: 20
    },
    loadingText:{
        color: '#2c2c2c',
        fontSize: 30,
    }
});


export default Weather;