import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./_components/nav-bar/nav-bar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "./_components/secondary-button/secondary-button.component";
import { ItemCertificadoComponent } from "./_components/item-certificado/item-certificado.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";
import { CertificadosComponent } from "./pages/certificados/certificados.component";
import { CertificadoFormComponent } from "./pages/certificado-form/certificado-form.component";
import { CertificadoComponent } from "./pages/certificados/certificado/certificado.component";
import { CertificadoService } from './_services/certificado.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';

  private certificateService = inject(CertificadoService)

  ngOnInit(): void {
      const certificados = localStorage.getItem('certificados')
      this.certificateService.listCertificate = certificados ? JSON.parse(certificados) : []
  }
}
