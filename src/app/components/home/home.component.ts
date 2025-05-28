import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  labelsMay: string[] = [];
  electricityDataMay: number[] = [];
  gasDataMay: number[] = [];
  waterDataMay: number[] = [];
    constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('assets/data/building-energy - May.csv', { responseType: 'text' })
      .subscribe((csvData) => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
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
          },
        });
      });
  }

  technologies = [
    {
      title: 'Virtual Reality',
      image: 'assets/images/vr-img.jpeg',
      description:
        'Immerse your clients in an interactive, engaging & fun experience with our custom virtual reality (VR) applications...',
    },
    {
      title: 'Augmented Reality',
      image: 'assets/images/ar-img.jpeg',
      description:
        'AR can enhance business marketing efforts by providing an interactive and immersive experience for customers...',
    },
    {
      title: 'Mixed Reality',
      image: 'assets/images/mixed-img.jpeg',
      description:
        'MR blends virtual and real-world elements to create immersive and interactive experiences...',
    },
    {
      title: '3D Rendering',
      image: 'assets/images/3d-render.jpeg',
      description:
        '3D architectural rendering & animation service allows clients to experience a property before it is built...',
    },
    {
      title: '3D Web',
      image: 'assets/images/3dweb.jpeg',
      description:
        '3D web development can bring your website to life with immersive 3D experiences...',
    },
    {
      title: '3D Scanning',
      image: 'assets/images/3d-scan.webp',
      description:
        '3D Matterport scanning allows customers to experience built spaces virtually...',
    },
  ];
}
