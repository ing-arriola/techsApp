import React from 'react'
import { HeaderButton  } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { Platform  } from 'react-native'

const CustomHButon = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            IconSize={30}
            color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}

        />
    )
}

export default CustomHButon

//<AntDesign name="up" size={24} color="white" />