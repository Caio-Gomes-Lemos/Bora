import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    background:{
        backgroundColor:'#fff',
        flex:1
        
    },
    title:{
        marginTop: 10,
        paddingBottom:10,
        fontSize:25,
        textAlign:'center',
        color: 'green'
    },
    catImage:{

        position: 'absolute',
        width:373,
        height:175,
        borderRadius:10,
        marginLeft:10,
        marginRight: 10,
        marginTop:20,
        flexDirection:'row'
    },
    container:{

        flex:1

    }
});
export default styles;