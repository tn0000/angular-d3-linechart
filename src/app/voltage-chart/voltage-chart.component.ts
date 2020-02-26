import { Component, OnInit } from '@angular/core';
import { DataModel } from '../data/data.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voltage-chart',
  templateUrl: './voltage-chart.component.html',
  styleUrls: ['./voltage-chart.component.css']
})
export class VoltageChartComponent implements OnInit {
  selectedData = new Array<DataModel>();
  nums = new Array();
  wholeData;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Object>('./assets/batteryData.json').toPromise().then(res => {
      this.wholeData = res;
      this.filterBatteries(1);
    });
    for (var i = 0; i < 72; i++) {
      this.nums.push(i + 1);
    }
  }

  filterBatteries(index) {
    let newData = new Array<DataModel>();
    this.wholeData.forEach(element => {
      newData.push({
        time: new Date(element.date),
        value: element["c" + index]
      });
    });
    this.selectedData = newData;

  }

}
