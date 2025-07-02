import { Component, OnInit } from '@angular/core';
import { SecondaryButtonComponent } from "../../../_components/secondary-button/secondary-button.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../../_services/certificado.service';
import { Certificado } from '../../../interfaces/Certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit {

  id: string | null = null;
  certificate: Certificado | undefined = undefined

  constructor(private certificateService: CertificadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.certificate = this.certificateService.listCertificate.find(certificado => certificado.id === this.id)
        console.log(this.certificate)
      })
  }
}
