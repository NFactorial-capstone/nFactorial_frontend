import {View, Text, StyleSheet} from 'react-native'

function CommunityScreen(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
            onPress={()=>alert('This is "CommunityScreen." ')}
            style={{fontSize: 26, fontWeight: 'bold'}}
            >CommunityScreenScreen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
});

export default CommunityScreen;