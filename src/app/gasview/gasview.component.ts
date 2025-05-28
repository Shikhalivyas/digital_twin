import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-gasview',
  templateUrl: './gasview.component.html',
  styleUrls: ['./gasview.component.scss']
})
export class GasviewComponent {
 labels: string[] = [];
   electricityData: number[] = [];
   gasData: number[] = [];
   waterData: number[] = [];
   waterDataFeb: number[] = [];
   gasDataFeb: number[]=[];
   electricityDataFeb: number[]=[];
   labelsFeb: string[]=[];
    waterDataMar: number[] = [];
   gasDataMar: number[]=[];
   electricityDataMar: number[]=[];
   labelsMar: string[]=[];
    waterDataApr: number[] = [];
   gasDataApr: number[]=[];
   electricityDataApr: number[]=[];
   labelsApr: string[]=[];
    waterDataMay: number[] = [];
   gasDataMay: number[]=[];
   electricityDataMay: number[]=[];
   labelsMay: string[]=[];
 
   constructor(private http: HttpClient) {}
 
   ngOnInit() {
     this.http.get('assets/data/building-energy - Jan.csv', { responseType: 'text' })
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
               const dateLabel = row.timestamp || row.date;
             if (dateLabel) {
               labels.push(dateLabel);
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
 
         this.http.get('assets/data/building-energy - Feb.csv', { responseType: 'text' })
       .subscribe(csvData => {
         Papa.parse(csvData, {
           header: true,
           skipEmptyLines: true,
           complete: result => {
             const labelsFeb: string[] = [];
             const electricityDataFeb: number[] = [];
             const gasDataFeb: number[] = [];
             const waterDataFeb: number[] = [];
 
             result.data.forEach((row: any) => {
               const dateLabelFeb = row.timestamp || row.date;
             if (dateLabelFeb) {
               labelsFeb.push(dateLabelFeb);
               electricityDataFeb.push(parseFloat(row.electricity_kWh));
               gasDataFeb.push(parseFloat(row.gas_m3));
               waterDataFeb.push(parseFloat(row.water_liters));
             }
             });
 
             this.labelsFeb = labelsFeb;
             this.electricityDataFeb = electricityDataFeb;
             this.gasDataFeb = gasDataFeb;
             this.waterDataFeb = waterDataFeb;
           }
         });
       });
 
         this.http.get('assets/data/building-energy - Mar.csv', { responseType: 'text' })
       .subscribe(csvData => {
         Papa.parse(csvData, {
           header: true,
           skipEmptyLines: true,
           complete: result => {
             const labelsMar: string[] = [];
             const electricityDataMar: number[] = [];
             const gasDataMar: number[] = [];
             const waterDataMar: number[] = [];
 
             result.data.forEach((row: any) => {
               const dateLabel = row.timestamp || row.date;
             if (dateLabel) {
               labelsMar.push(dateLabel);
               electricityDataMar.push(parseFloat(row.electricity_kWh));
               gasDataMar.push(parseFloat(row.gas_m3));
               waterDataMar.push(parseFloat(row.water_liters));
             }
             });
 
             this.labelsMar = labelsMar;
             this.electricityDataMar = electricityDataMar;
             this.gasDataMar = gasDataMar;
             this.waterDataMar = waterDataMar;
           }
         });
       });
 
         this.http.get('assets/data/building-energy - Apr.csv', { responseType: 'text' })
       .subscribe(csvData => {
         Papa.parse(csvData, {
           header: true,
           skipEmptyLines: true,
           complete: result => {
             const labelsApr: string[] = [];
             const electricityDataApr: number[] = [];
             const gasDataApr: number[] = [];
             const waterDataApr: number[] = [];
 
             result.data.forEach((row: any) => {
               const dateLabel = row.timestamp || row.date;
             if (dateLabel) {
               labelsApr.push(dateLabel);
               electricityDataApr.push(parseFloat(row.electricity_kWh));
               gasDataApr.push(parseFloat(row.gas_m3));
               waterDataApr.push(parseFloat(row.water_liters));
             }
             });
 
             this.labelsApr = labelsApr;
             this.electricityDataApr = electricityDataApr;
             this.gasDataApr = gasDataApr;
             this.waterDataApr = waterDataApr;
           }
         });
       });
 
         this.http.get('assets/data/building-energy - May.csv', { responseType: 'text' })
       .subscribe(csvData => {
         Papa.parse(csvData, {
           header: true,
           skipEmptyLines: true,
           complete: result => {
             const labelsMay: string[] = [];
             const electricityDataMay: number[] = [];
             const gasDataMay: number[] = [];
             const waterDataMay: number[] = [];
 
             result.data.forEach((row: any) => {
               const dateLabel = row.timestamp || row.date;
             if (dateLabel) {
               labelsMay.push(dateLabel);
               electricityDataMay.push(parseFloat(row.electricity_kWh));
               gasDataMay.push(parseFloat(row.gas_m3));
               waterDataMay.push(parseFloat(row.water_liters));
             }
             });
 
             this.labelsMay = labelsMay;
             this.electricityDataMay = electricityDataMay;
             this.gasDataMay = gasDataMay;
             this.waterDataMay = waterDataMay;
           }
         });
       });
 
 
   }
}
