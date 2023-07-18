import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';

interface CustomTextProps {
    viewStyle: StyleProp<ViewStyle>;
    labelStyle: StyleProp<TextStyle>;
    label: string;
}

const CustomText: React.FC<CustomTextProps> = ({ viewStyle, labelStyle, label }) => {
    return (
        <View style={[styles.container, viewStyle]}>

            <Text style={[styles.textStyle, labelStyle]}>{label}</Text>
        </View>
    );
};

export default CustomText;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    textStyle: {
        fontSize: 20
    },
});
