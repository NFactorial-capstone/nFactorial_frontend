import {View, Text, StyleSheet} from 'react-native'

function ProfileScreen(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
            onPress={()=>alert('This is "ProfileScreen." ')}
            style={{fontSize: 26, fontWeight: 'bold'}}
            >ProfileScreen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
});

export default ProfileScreen;