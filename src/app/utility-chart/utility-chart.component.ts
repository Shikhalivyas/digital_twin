import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartType, Chart } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import jsPDF from 'jspdf';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utility-chart',
  templateUrl: './utility-chart.component.html',
  styleUrls: ['./utility-chart.component.scss']
})
export class UtilityChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() label: string = '';
  @Input() color: string = 'blue';
  @Input() displayViewBtn:boolean=false;
  @Input() redirectUrl:string='';  

  chartType: ChartType = 'line'; // Default
  chartData: ChartConfiguration['data'] = { labels: [], datasets: [] };

  constructor(public router: Router) {}
    
  gotoRedirect() {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    } 
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateChart();
  }

  updateChart() {
    this.chartData = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          label: this.label,
          borderColor: this.color,
          backgroundColor: this.color,
          fill: this.chartType === 'line' ? false : true,
          tension: 0.4
        }
      ]
    };
    this.chart?.update();
  }

  changeType(event?: any) {
    this.chartType = event.target.value ?? 'line';
    this.updateChart();
  }

 exportAsImage() {
  const base64Image = this.chart?.chart?.toBase64Image();
  if (!base64Image) return;

  const link = document.createElement('a');
  link.href = base64Image;
  link.download = `${this.label}.png`;
  link.click();
}

 exportAsPDF() {
  const base64Image = this.chart?.chart?.toBase64Image();
  if (!base64Image) return;

  const doc = new jsPDF();
  doc.text(this.label, 10, 10);
  doc.addImage(base64Image, 'PNG', 10, 20, 180, 100);
  doc.save(`${this.label}.pdf`);
}

}
