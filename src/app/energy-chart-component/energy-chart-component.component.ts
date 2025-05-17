import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-energy-chart-component',
  templateUrl: './energy-chart-component.component.html',
  styleUrls: ['./energy-chart-component.component.scss']
})
export class EnergyChartComponent implements OnInit {
  labels: string[] = [];
  electricityData: number[] = [];
  gasData: number[] = [];
  waterData: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/data/building-energy.csv', { responseType: 'text' })
      .subscribe(csvData => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: result => {
            const labels: string[] = [];
            const electricityData: number[] = [];
            const gasData: number[] = [];
            const waterData: number[] = [];

            result.data.forEach((row: any) => {
              if (row.timestamp) {
                labels.push(row.timestamp);
                electricityData.push(parseFloat(row.electricity_kWh));
                gasData.push(parseFloat(row.gas_m3));
                waterData.push(parseFloat(row.water_liters));
              }
            });

            this.labels = labels;
            this.electricityData = electricityData;
            this.gasData = gasData;
            this.waterData = waterData;
          }
        });
      });
  }
}
