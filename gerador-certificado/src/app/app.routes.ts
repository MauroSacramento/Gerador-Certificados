import { Routes } from '@angular/router';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoComponent } from './pages/certificados/certificado/certificado.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';

export const routes: Routes = [
  { path: "", redirectTo: "certificates", pathMatch: "full" },
  { path: "certificates", component: CertificadosComponent },
  { path: "certificates/new", component: CertificadoFormComponent},
  { path:"certificates/:id", component: CertificadoComponent},

  // { path: "*", component:NotFoundComponent }
];
