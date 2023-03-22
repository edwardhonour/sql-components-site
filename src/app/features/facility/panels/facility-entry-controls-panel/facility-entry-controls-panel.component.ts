import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart, ApexPlotOptions, ApexDataLabels,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-facility-entry-controls-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NgApexchartsModule],
  templateUrl: './facility-entry-controls-panel.component.html',
  styleUrls: ['./facility-entry-controls-panel.component.css']
})
export class FacilityEntryControlsPanelComponent implements OnChanges, OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() facility_id: any = '-2';
  @Output() posted: EventEmitter<any> = new EventEmitter<any>();

  adding: any = 'N';
  data: any;
 
  ngOnChanges() {
    console.log("assessment panel changed")
      console.log(this.facility_id);
      this.getForm()
  }

  ngOnInit(): void {
    
  }

constructor(
private _dataService: DataService
) {
  this.chartOptions = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    series: [{
      data: [{
        x: 'Employee/Occupant',
        y: 10,
        goals: [
          {
            name: 'Expected',
            value: 20,
            strokeColor: '#775DD0'
          }]
      }, {
        x: 'Visior',
        y: 18,
        goals: [
          {
            name: 'Expected',
            value: 20,
            strokeColor: '#775DD0'
          }]
      }, {
        x: 'Retail/Public',
        y: 13,
        goals: [
          {
            name: 'Expected',
            value: 20,
            strokeColor: '#775DD0'
          }]
      }]
    }]
  };

 }

postUpdate() {
  console.log(this.data.formData);
  this._dataService.postForm("post-stakeholder-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  this.posted.emit('RELOAD');
});
}

postDelete() {
  console.log(this.data.formData);
  if (confirm('Are you sure? this cannot be reversed')) {
  this._dataService.postForm("delete-stakeholder-form", this.data.formData).subscribe((data:any)=>{
  this.adding="N";
  this.data=data;
  this.posted.emit('RELOAD');
});
  }
}

closeForm() {
  this.posted.emit('CLOSE');
}

getForm() {
  let inputForm: any = {
    facility_id: this.facility_id
  }
  this._dataService.postForm("get-facility-assessments", inputForm).subscribe((data:any)=>{
    this.data=data;
  });
}

}

