import {Dimensions, View, Text, StyleSheet} from 'react-native'
import {LineChart, ProgressChart} from "react-native-chart-kit";

import themeColors from "../../../../assets/styles/themeColors";
import PhysicalBox from './PhysicalBox';

let data = {
    data: [0.0]
  };
  
  const chartConfig = {
    backgroundGradientFrom: themeColors.white0,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: themeColors.white0,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 0) => `rgba(243, 156, 18, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

const screenWidth = Dimensions.get('window').width;
let progressStatus = 0

const ProgressBox = ({gauge}) => {
    return (
    <View style = {styles.View}>
        <Text style = {styles.Text}>오늘의 계획이 {gauge}% 달성되었습니다.</Text>
        <ProgressChart
            data={data}
            width={screenWidth}
            height={200}
            strokeWidth={16}
            radius={50}
            chartConfig={chartConfig}
            hideLegend={true}
            style={styles.Chart}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    View:{
        alignContent: 'center',
        justifyContent: 'center', 
        alignItems : 'center',
        width: '90%', 
        marginHorizontal: 23, 
        marginVertical: 8, 
        borderRadius: 4, 
        backgroundColor: themeColors.white0, 
        borderRadius: 20, 
        borderColor: themeColors.navy1,
        borderWidth : 2
    },
    Text: {
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,  // 간격을 줄이기 위해 paddingTop 값을 감소
    },
    Chart: {
        marginTop: -15,  // 차트의 상단 마진을 음수로 설정하여 텍스트와의 간격을 줄임
        marginBottom : -20,
        alignItems: 'center'
    }
})

export default ProgressBox;