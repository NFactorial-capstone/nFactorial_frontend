import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { LineChart, ProgressChart, StackedBarChart, PieChart } from 'react-native-chart-kit';

import themeColors from '../../../assets/styles/themeColors';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // 소수점 두 자리까지 표시
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: themeColors.navy0
    }
};

function SummaryScreen(){
    const data1 = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.4, 0.6, 0.8]
    };

    const data2 = {
        labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2
          },{
            data: [70, 60, 22, 43, 64, 58],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2            
          }
        ],
        legend: ["차트 데모"]
      };

      const data3 = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
          [60, 60, 60],
          [30, 30, 60]
        ],
        barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
      };

      const data4 = [
        {
          name: "Seoul",
          population: 21500000,
          color: "rgba(131, 167, 234, 1)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Toronto",
          population: 2800000,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Beijing",
          population: 527612,
          color: "red",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "New York",
          population: 8538000,
          color: "#ffffff",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Moscow",
          population: 11920000,
          color: "rgb(0, 0, 255)",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];

    return(
    <ScrollView>
        <ProgressChart
        style={{marginVertical: 10}}
        data={data1}
        width={screenWidth}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
        />

        <LineChart
            style={{marginVertical: 10}}
            data={data2}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />
        <PieChart
            data={data4}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 0]}
        />

        <StackedBarChart
            style={{marginVertical: 10}}
            data={data3}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
        />


    </ScrollView>
    );
}

export default SummaryScreen;
