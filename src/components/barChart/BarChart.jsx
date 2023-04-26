import React from 'react'
import {
  AppRegistry, StyleSheet, Text, View, processColor,
} from 'react-native'

import { BarChart } from 'react-native-charts-wrapper'

class StackedBarChartScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      legend: {
        enabled: false,
        
      },
      
      xAxis: {
        enabled: false,
        drawGridLines: false,
drawAxisLine: false,


        
      },
      yAxis: {
        enabled: false,
        zeroLine: {enabled: false},
limitLines: [{limit: 1}],
left: {
drawGridLines: false,
drawAxisLine: false,
drawLabels: false,
axisMinimum: 0, // set minimum value to 0
axisMaximum:100
},
right: {
drawGridLines: false,
drawAxisLine: false,
drawLabels: false,
},
      },

      marker: {
        enabled: false,
        
        markerColor: processColor('white'),
        
        textColor: processColor('white'),
        markerFontSize: 14,
      },
      data: {
        dataSets: [
          {
            values: [80, 100, 67, 71, 83,90],
            
            label: 'Company A',
            config: {
              drawValues: false,
              colors: [processColor('#C4EE85')],
            },
          },
          {
            values: [90,80, 80, 70, 83, 79],
            label: 'Company B',
            config: {
              drawValues: false,
              colors: [processColor('#A0DBFD')],
            },
          },
         
        ],
        config: {
          barWidth: 0.15,
          group: {
            fromX: 0,
            groupSpace: 0,
            barSpace: 0.4,
          },
        },
      },
     

    }
  }


  render() {
    return (
 
          <BarChart
            style={styles.chart}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            data={this.state.data}
            legend={this.state.legend}
            drawValueAboveBar={false}
  drawGridBackground={false}
  chartDescription={{text: ''}}
  
          />
       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chart: {
    flex: 1,
  },
})

export default StackedBarChartScreen