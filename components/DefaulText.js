import React from 'react'
import {Text} from 'react-native'

const DefaulText = (props) => {
    return (
        <Text style={{fontFamily:'open-sans'}} >
            {props.children}
        </Text>
    )
}

export default DefaulText
