import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from "../../../_components/secondary-button/secondary-button.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../../_services/certificado.service';
import { Certificado } from '../../../interfaces/Certificado';
import html2canvas from 'html2canvas'

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

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.certificate = this.certificateService.listCertificate.find(certificado => certificado.id === this.id)
      })
  }

  downloadCertificado(){

    if(this.certificate === undefined){
      return
    }

    html2canvas(this.certificadoElement.nativeElement, {scale: 2}).then(
      canvas => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificado_'+this.certificate?.name.replaceAll(' ', '_')+'.png';
        link.click();
      }
    )
  }
}
