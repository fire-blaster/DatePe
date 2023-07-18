import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React from 'react';

interface CustomButtonProps {
    touchableViewStyle: StyleProp<ViewStyle>;
    buttonTextStyle: StyleProp<TextStyle>;
    onPress: () => void;
    buttonName: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ touchableViewStyle, onPress, buttonTextStyle, buttonName }) => {
    return (
        <TouchableOpacity style={[styles.touchableView, touchableViewStyle]} onPress={onPress}>
            <Text style={[styles.buttonText, buttonTextStyle]}>{buttonName}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
      
    },
});

export default CustomButton;
