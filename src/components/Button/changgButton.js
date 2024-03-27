import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from 'prop-types'


const changgButton = (props) => {
    return (
        <TouchableOpacity style={[props.myStyle, {backgroundColor:props.myColor,  marginTop:20, marginBottom:20}]} onPress={props.onMyPress}>
            <Text style={{fontSize:26, textAlign:'center', color:'white'}}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default changgButton

changgButton.propTypes = {
    onMyPress: PropTypes.func,
}