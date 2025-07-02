import { Component, inject, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import {FormsModule, NgForm} from '@angular/forms';
import { Certificado } from '../../interfaces/Certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuidV4 } from 'uuid'
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  activity: string = "";
  private certificateService = inject(CertificadoService)
  private routes = inject(Router)

  @ViewChild('form') form!: NgForm;

  certificado: Certificado = {
    id: "",
    name: "",
    activities: [],
    dataEmissao: ""
  }

  certificateForm(){
    if(!this.certificado.name && this.certificado.activities.length === 0){
      return
    }

    this.certificado.dataEmissao = this.dataAtual()
    this.certificado.id = uuidV4()

    this.certificateService.addCertificate(this.certificado)

    this.routes.navigate(['certificates', this.certificado.id])
    // this.certificado = this.formInitialState()
    // this.form.reset()
  }

  addActivity(){
    this.certificado.activities.push(this.activity)
    this.activity = ""
  }

  removeActivity(index: number){
    this.certificado.activities.splice(index, 1)
  }

  dataAtual(){
    const dataAtual = new Date();
    const day = String(dataAtual.getDate()).padStart(2, '0');
    const month = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const year = dataAtual.getFullYear();

    const dataFormatada = `${day}/${month}/${year}`

    return dataFormatada;
  }

  formInitialState(): Certificado{
    return {
      id: '',
      name: '',
      activities: [],
      dataEmissao: ""
    }
  }
}
