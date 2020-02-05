import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-airplanes-novo',
  templateUrl: './airplanes-novo.component.html',
  styleUrls: ['./airplanes-novo.component.scss']
})
export class AirplanesNovoComponent implements OnInit {

  airplanesForm: FormGroup;
  isLoadingResults = false;

  addAirplanes() {
    this.isLoadingResults = true;    
    this.api.addAirplanes(this.airplanesForm.value)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          console.log(this.airplanesForm.value);
          this.router.navigate(['/airplanes-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
  

  ngOnInit() {
    this.airplanesForm = this.formBuilder.group({
      'modelo' : [null, Validators.required, Validators.maxLength(50)],
      'qtidadePassageiros' : [null, [Validators.required, Validators.minLength(10)]],
      'dataCriacao' : [null, Validators.required]
    });
  }

}
