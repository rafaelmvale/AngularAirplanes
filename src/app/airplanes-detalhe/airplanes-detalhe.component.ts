import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Airplanes } from 'src/model/airplanes';
@Component({
  selector: 'app-airplanes-detalhe',
  templateUrl: './airplanes-detalhe.component.html',
  styleUrls: ['./airplanes-detalhe.component.scss']
})
export class AirplanesDetalheComponent implements OnInit {
  airplanes: Airplanes = { id: '', modelo: '', qtidadePassageiros: '', dataCriacao: null};
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    

    this.getAirplane(this.route.snapshot.params['Guid']);
  }

  getAirplane(id) {
    this.api.getAirplane(id)
      .subscribe(data => {
        this.airplanes = data;
        console.log(this.airplanes);
        this.isLoadingResults = false;
      });
  }

  deleteAirplanes(id) {
    this.isLoadingResults = true;
    this.api.deleteAirplanes(id)
      .subscribe(res => {
          console.log(id)
          this.isLoadingResults = false;
          this.router.navigate(['/airplanes']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
