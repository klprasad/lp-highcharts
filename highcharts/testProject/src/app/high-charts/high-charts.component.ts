import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.scss']
})
export class HighChartsComponent implements OnInit {
  selectedRegion: string | undefined;
  selectedState: string | undefined;
  regions: string[] = ['All Regions', 'Region 1', 'Region 2'];
  sites: string[] = ['All Sites', 'Site 1', 'Site 2'];
  categeriesData: string[] = ['Cleaning', 'Delivery', 'Cold Hold', 'Hold Hold'];

  constructor() {}
  ngOnInit() {
    this.CreateColumnChart();
    this.createPieChart();
    this.CreateTasksChart();
  }
  CreateColumnChart() {
    let data = [50, 30, 40, 70];
    let myOptions : any = {
      chart: {
        type: 'column',
      },
      title: undefined,
      xAxis: {
        categories: this.categeriesData,
      },
      yAxis: {
        min: 0,
        title: undefined,
        tickInterval: 10,
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          color: 'blue',
          data: data,
        },
      ],
    };
    const chart = Highcharts.chart('column-chart', myOptions);
  }
  createPieChart(): void {
    const data: any[] = [
      {
        name: 'Completed',
        y: 48,
      },
      {
        name: 'Open',
        y: 24,
      },
      {
        name: 'Due Today',
        y: 10,
      },
      {
        name: 'Overdue',
        y: 4,
      },
    ];

    const chart = Highcharts.chart('pie-chart', {
      chart: {
        type: 'pie',
      },
      title: {
        text: null,
      },

      plotOptions: {
        pie: {
          showInLegend: true,
          cursor: 'pointer',
          innerSize: '50%',
          dataLabels: {
            enabled: true,
            distance: -30,
            color: 'black',
          },
        },
      },
      series: [
        {
          name: null,
          innerSize: '50%',
          data,
        },
      ],
    } as any);
  }
  CreateTasksChart() {
    let ComapnyData = [50, 30, 40, 70];
    let DublinData = [60, 40, 50, 80];
    let myOptions : any = {
      chart: {
        type: 'column',
      },
      title: undefined,
      xAxis: {
        categories: this.categeriesData,
        crosshair: true,
      },
      yAxis: {
        min: 0,
        title: undefined,
        tickInterval: 10,
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          dataLabels: {
            enabled: false,
          },
        },
      },
      legend: {
        verticalAlign: 'top',
        enabled: true,
      },
      series: [
        {
          name: 'Company Avg',
          color: 'green',
          data: ComapnyData,
        },
        {
          name: 'Dublin',
          color: 'black',
          data: DublinData,
        },
      ],
    };
    const chart = Highcharts.chart('tasks-chart', myOptions);
  }
}
