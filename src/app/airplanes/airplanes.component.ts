import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Airplanes } from 'src/model/airplanes';

@Component({
  selector: 'app-airplanes',
  templateUrl: './airplanes.component.html',
  styleUrls: ['./airplanes.component.scss']
})

export class AirplanesComponent implements OnInit {

  isLoadingResults = false;

  displayedColumns: string[] = ['modelo', 'qtidadePassageiros' , 'dataCriacao', 'acao'];
  dataSource: Airplanes[];
constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getAirplanes()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
  

}
