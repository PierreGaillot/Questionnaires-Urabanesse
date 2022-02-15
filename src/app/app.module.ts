import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspaceComponent } from './espace/espace.component';
import { QuestionnaireCardComponent } from './espace/questionnaire-card/questionnaire-card.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionItemListComponent } from './questions/question-item-list/question-item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EspaceComponent,
    QuestionnaireCardComponent,
    TopNavBarComponent,
    NewQuestionnaireComponent,
    NewQuestionComponent,
    QuestionItemListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
