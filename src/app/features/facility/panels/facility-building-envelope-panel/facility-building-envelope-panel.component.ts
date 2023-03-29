import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-facility-building-envelope-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatCheckboxModule, MatCardModule],
  templateUrl: './facility-building-envelope-panel.component.html',
  styleUrls: ['./facility-building-envelope-panel.component.css']
})
export class FacilityBuildingEnvelopePanelComponent implements OnChanges, OnInit {
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
    series: [
      {
        name: "basic",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    }
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

