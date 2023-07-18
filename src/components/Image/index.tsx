import { Image, ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

interface ImageComponentProps {
    viewStyle: StyleProp<ViewStyle>;
    imageStyle: StyleProp<ImageStyle>;
    source: any;
}

const SImage: React.FC<ImageComponentProps> = ({ viewStyle, imageStyle, source }) => {
    return (
        <View style={[styles.container, viewStyle]}>
            <Image style={[styles.image, imageStyle]} source={source} />
        </View>
    );
};

export default SImage;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    image: {

    },
});
