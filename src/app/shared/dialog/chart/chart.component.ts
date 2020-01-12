import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '@shared/interface/interface';
import { HttpService } from 'app/core/service/api/http.service';
import { ChartService } from 'app/core/service/resolve/chart.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chartData: ChartDataSets[];

  lineChartLabels: Label[] = ['Low', 'High', 'Latest Price', 'Change'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private httpService: HttpService, private chartService: ChartService) { }

  ngOnInit(): void {

    this.httpService.getChart(this.data.keyword).subscribe(data => {
      console.log('chartdata', this.chartService.resolveChartArray(data, this.data.keyword));
      this.chartData.push(this.chartService.getLow());
      this.chartData.push(this.chartService.getHigh());
      this.chartData.push(this.chartService.getLatestPrice());
      this.chartData.push(this.chartService.getChange());
    });

  }

}
