import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspaceComponent } from './espace/espace.component';
import { NewQuestionnaireComponent } from './questionnaires/new-questionnaire/new-questionnaire.component';


const routes: Routes = [
  { path: 'espace-component', component: EspaceComponent },
  { path: 'new-questionnaire-component', component: NewQuestionnaireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
