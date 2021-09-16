import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
        'is-invalid': this.verificaValidTouched(campo),
        'is-valid': campo.valid && campo.touched
    }
  }

  onSubmit(form: any){

    console.log(form.value);
    console.log(form);

  }

}
