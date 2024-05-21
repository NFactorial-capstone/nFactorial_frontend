import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

import themeColors from '../../../assets/styles/themeColors';

const screenWidth = Dimensions.get('window').width;

const chartConfig1 = {
    backgroundColor: themeColors.white0,
    backgroundGradientFrom: themeColors.white0,
    backgroundGradientTo: themeColors.white0,
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(40, 55, 71, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(40, 55, 71, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: themeColors.navy0
    },
    propsForLabels: {
      fontSize: 16,
    },
};

const chartConfig2 = {
  backgroundColor: themeColors.white0,
  backgroundGradientFrom: themeColors.white0,
  backgroundGradientTo: themeColors.white0,
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(40, 55, 71, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(40, 55, 71, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: themeColors.navy0
  },
  propsForLabels: {
    fontSize: 16,
  },
};

const weightData = {
  labels: ['5/11', '5/12', '5/13', '5/14', '5/15'],
  datasets: [
    {
      data: [69.5, 70, 70.5, 68, 68.5],
    },
  ],
};


const Caloriedata = {
    labels: ["5/10", "5/11", "5/12", "5/13", "5/14", "5/15"],
    datasets: [
      {
        data: [2000, 2100, 2200, 2300, 2400, 2100],
        color: (opacity = 1) => themeColors.navy0,
        strokeWidth: 2
      },{
        data: [1500, 1700, 1600, 1500, 1400, 1700],
        color: (opacity = 1) => themeColors.yellow0,
        strokeWidth: 2            
      }
    ],
    legend: ["섭취 칼로리", "소모 칼로리"]

  };

function SummaryScreen(){

    return(
    <ScrollView>
        <Text style={{fontSize:22, margin:15, fontWeight: 'bold'}}>최근 기록을 차트로 확인해보세요!</Text>
        <Text style={styles.header}>몸무게 변화</Text>
        <BarChart
          style={styles.chart}
          data={weightData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig1}
          verticalLabelRotation={30}
        />

        <Text style={styles.header}>섭취칼로리/소모칼로리</Text>
        <LineChart
            style={{marginVertical: 10}}
            data={Caloriedata}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig2}
            withShadow={true}
            props
        />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  chart: {
    marginVertical: 10,
  },
});


export default SummaryScreen;
