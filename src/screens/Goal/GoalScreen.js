import {View, Text, StyleSheet} from 'react-native'

function GoalScreen(){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
            onPress={()=>alert('This is "GoalScreen." ')}
            style={{fontSize: 26, fontWeight: 'bold'}}
            >GoalScreen</Text>
    </View>
    );
}

const styles = StyleSheet.create({
});

export default GoalScreen;