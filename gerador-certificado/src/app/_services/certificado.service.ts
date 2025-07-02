import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/Certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  listCertificate: Certificado[] = []

  constructor() { }

  addCertificate(certificado: Certificado){
    this.listCertificate.push({...certificado})
    localStorage.setItem('certificados', JSON.stringify(this.listCertificate))
  }
}
