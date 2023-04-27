import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  processColor,
} from 'react-native'


import { LineChart } from 'react-native-charts-wrapper'

class LineChartScreen extends React.Component {
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
          left: {
            drawGridLines: false,
            drawAxisLine: false,
            drawLabels: false,
            axisMinimum: 0,
            axisMaximum: 100,
          },
          right: {
            drawGridLines: false,
            drawAxisLine: false,
            drawLabels: false,
          },
        },
        yAxis: {
          enabled: false,
          zeroLine: { enabled: false },
          left: {
            drawGridLines: false,
            drawAxisLine: false,
            drawLabels: false,
            axisMinimum: 0,
            axisMaximum: 50,
          },
          right: {
            drawGridLines: false,
            drawAxisLine: false,
            drawLabels: false,
          },
        },
        marker: {
          enabled: false,
        },
        data: {
          dataSets: [
            {
              values: [
                { x: 0, y: 10 },
                { x: 5, y: 18 },
                { x: 12, y: 16 },
                { x: 20, y: 50 },
           
            
              ],
              label: 'C',
              config: {
                    drawLabels:false,
                    drawValues: false, // set drawValues to false
                color: processColor('#7876F5'),
                                circleColor: processColor('#A0DBFD'),
              },
            },
          ],
        },
      };
      
  }


  render() {
    return (
  
       

    


          <LineChart
            style={styles.chart}
            data={this.state.data}
            chartDescription={{ text: '' }}
            legend={this.state.legend}
            marker={this.state.marker}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
            drawGridBackground={false}
         
            drawBorders={false}
            autoScaleMinMaxEnabled={false}
 
            
            highlightPerDragEnabled={false}
            
            ref="chart"
            keepPositionOnRotation={false}
           
          />

 
    )
  }
}

const styles = StyleSheet.create({

  chart: {
    flex: 1,
    
  },
})

export default LineChartScreen