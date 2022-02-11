import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspaceComponent } from './espace/espace.component';
import { QuestionnaireCardComponent } from './questionnaire-card/questionnaire-card.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EspaceComponent,
    QuestionnaireCardComponent,
    TopNavBarComponent,
    NewQuestionnaireComponent,
    NewQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
