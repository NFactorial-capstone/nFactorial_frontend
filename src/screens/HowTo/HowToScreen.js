import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import ImagePicker from './components/ImagePicker';
import PostContainer from '../Community/components/PostContainer';


import themeColors from '../../../assets/styles/themeColors';

function HowToScreen(){
    return(
    <View>
        <ImagePicker/>
    </View>
    );
}

const styles = StyleSheet.create({
    button:{
        paddingVertical: 15,
        backgroundColor: themeColors.navy1,
        borderRadius: 10,
        marginVertical: 10,
        width: '50%',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
        color : themeColors.white0,
        textAlign: 'center'
    },
});

export default HowToScreen;