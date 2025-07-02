import { Component, inject, OnInit } from '@angular/core';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";
import { RouterLink } from '@angular/router';
import { Certificado } from '../../interfaces/Certificado';
import { CertificadoService } from '../../_services/certificado.service';

interface CertificateType {
  name: string,
  activities: string[]
}

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecondaryButtonComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {

  private certificateService = inject(CertificadoService);

  listCertificate: Certificado[] = []

  ngOnInit(): void {
      this.listCertificate = this.certificateService.listCertificate;
  }
}
