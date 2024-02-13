import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Column Chart'
    },
    xAxis: {
      categories: ['Vivo', 'Apple', 'Samsung', 'Xiaomi', 'Oppo']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      type: 'column', // Specify the series type as 'column'
      name: 'Value',
      data: [10, 20, 15, 8, 12]
    }]
  };


  pieChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie' // Set the chart type as 'pie' for the doughnut chart
    },
    title: {
      text: 'Doughnut Chart'
    },
    plotOptions: {
      pie: {
        innerSize: '50%' // Set the inner size to create a doughnut chart
      }
    },
    series: [{
      type: 'pie', // Specify the series type as 'pie'
      name: 'Value',
      data: [
        { name: 'Category 1', y: 10 },
        { name: 'Category 2', y: 20 },
        { name: 'Category 3', y: 15 },
        { name: 'Category 4', y: 8 },
        { name: 'Category 5', y: 12 }
      ]
    }]
  };
  
}
