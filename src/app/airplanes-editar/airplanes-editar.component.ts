import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-airplanes-editar',
  templateUrl: './airplanes-editar.component.html',
  styleUrls: ['./airplanes-editar.component.scss']
})
export class AirplanesEditarComponent implements OnInit {
  
  airplaneForm: FormGroup;
  id: String = '';
  modelo: String = '';
  qtidadePassageiros: String = '';
  dataCriacao: Date = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getAiplane(this.route.snapshot.params['Guid']);
    this.airplaneForm = this.formBuilder.group({
   'modelo' : [null, Validators.required],
   'qtidadePassageiros' : [null, Validators.required],
   'dataCriacao' : [null, Validators.required]
 });
 }

 getAiplane(id) {
  this.api.getAirplane(id).subscribe(data => {
    this.id = data.id;
    console.log('informações do get', data);
    this.airplaneForm.setValue({
      modelo: data.modelo,
      qtidadePassageiros: data.qtidadePassageiros,
      dataCriacao: data.dataCriacao
    });
  });
}

updateAirplanes() {
  this.isLoadingResults = true;
  
  console.log('informações do update', this.airplaneForm.value);
  this.api.updateAirplanes(this.id, this.airplaneForm.value)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/airplanes-detalhe/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
   );
}

}
