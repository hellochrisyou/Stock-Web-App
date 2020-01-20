import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '@shared/interface/interface';
import { HttpService } from 'app/core/service/http/http.service';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService } from 'app/core/service/mapper/chart.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  chartData: ChartDataSets[];
  lineChartLabels: Label[] = ['day 1', 'day 2', 'day 3', 'day 4', 'Today'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#4169E1',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'rgba(245, 171, 53, 1)',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'rgba(211, 84, 0, 1)',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(
    private dialogRef: MatDialogRef<ChartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private httpService: HttpService,
    private chartService: ChartService
  ) {


  }

  ngOnInit(): void {
    this.dialogRef.updateSize('100vw');

    this.httpService.getChart(this.data.keyword.Symbol).subscribe(data => {
      this.chartData = [];
      this.chartService.resolveChartArray(data, this.data.keyword.Symbol);
      this.chartData.push(this.chartService.getLow());
      this.chartData.push(this.chartService.getHigh());
      this.chartData.push(this.chartService.getChange());
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }
}
