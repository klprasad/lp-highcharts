import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service.ts';
import { MatSelectModule } from '@angular/material/select';
import Highcharts = require('highcharts');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedRegion: string;
  selectedState: string;
  regions: string[] = ['All Regions', 'Region 1', 'Region 2'];
  sites: string[] = ['All Sites', 'Site 1', 'Site 2'];
  categeriesData: string[] = ['Cleaning', 'Delivery', 'Cold Hold', 'Hold Hold'];

  @ViewChild('charts') public chartEl: ElementRef;
  constructor(private highcharts: HighchartsService) {}
  ngOnInit() {
    this.CreateColumnChart();
    this.createPieChart();
    this.CreateTasksChart();
  }
  CreateColumnChart() {
    let data = [50, 30, 40, 70];
    let myOptions = {
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
    this.highcharts.createChart(this.chartEl.nativeElement, myOptions);
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
            formatter: function () {
              return this.point.y;
            },
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
    let myOptions = {
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
    this.highcharts.createChart('tasks-chart', myOptions);
  }
}
