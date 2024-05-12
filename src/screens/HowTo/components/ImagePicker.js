import {Button, View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {launchCameraAsync} from 'expo-image-picker'
import { useState } from 'react';
import themeColors from '../../../../assets/styles/themeColors';

function ImagePicker(){

    const [pickedImage, setPickedImage] = useState(null);

    async function takeImageHandler(){
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect : [16, 9],
            quality: 0.5
        });
        setPickedImage(image.assets[0].uri);
    }
    let imagePreview = <Text>No image taken yet.</Text>

    if(pickedImage){
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}}/>
    }

    return <View>
        <View style={styles.imagePreview}>{imagePreview}</View>
        <TouchableOpacity onPress={takeImageHandler} style={styles.button}>
            <Text style={styles.text}>사진찍기</Text>
        </TouchableOpacity>
    </View>

}

const styles = StyleSheet.create({
    imagePreview:{
        width: '100%',
        height: 300,
        marginVertical: 8,
        borderRadius: 4,
        backgroundColor: themeColors.white1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    button:{
        paddingVertical: 15,
        backgroundColor: themeColors.navy1,
        borderRadius: 10
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
        color : themeColors.white0,
        textAlign: 'center'
    },
});

export default ImagePicker;