import { Dimensions, View } from 'react-native';
import React from 'react';
import { loginStyle } from './style';
import CustomButton from '../../components/Button';
import { COLORS } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const Login: React.FC = () => {
    return (
        <View style={loginStyle.container}>
            <CustomButton buttonTextStyle={{color:'white'}} onPress={function (): void {
                throw new Error('Function not implemented.');
            }} buttonName={'Login'} touchableViewStyle={{ width: width - 50 ,height:50,backgroundColor:COLORS.FROG_GREEN}} />



        </View>
    );
};
export default Login;
