import { Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/Text'
import { STRINGS } from '../../constants/strings'
import { COLORS } from '../../constants/colors'

const SplashScreen: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'transparent',alignSelf:'center' }}>
                <Text style={{color:COLORS.WHITE,fontSize:20}}>{STRINGS.DATE}<Text>{STRINGS.PE}</Text></Text>
            </View>
        </View>
    )
}

export default SplashScreen

