import React from 'react';
import { View, TextInput, StyleSheet, StyleProp, ViewStyle, TextStyle, } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface CustomTextInputProps {
    viewStyle?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<TextStyle>,
    leftIcon?: string;
    rightIcon?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

const STextInput: React.FC<CustomTextInputProps> = ({
    viewStyle,
    inputStyle,
    leftIcon,
    rightIcon,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
}) => {
    return (
        <View style={[styles.container, viewStyle]}>
            {leftIcon && (
                <MaterialIcon
                    name={leftIcon}
                    size={24}
                    color="black"
                    style={styles.icon} />
            )}
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
            />
            {rightIcon && (
                <MaterialIcon
                    name={rightIcon}
                    size={24}
                    color="black"
                    style={styles.icon} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 8,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
    },
    icon: {
        marginRight: 8,
    },
});

export default STextInput;
