import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspaceComponent } from './espace/espace.component';
import { QuestionnaireCardComponent } from './espace/questionnaire-card/questionnaire-card.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { NewQuestionnaireComponent } from './questionnaires/new-questionnaire/new-questionnaire.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionItemListComponent } from './questions/question-item-list/question-item-list.component';
import { MatListModule } from '@angular/material';
import { DetailQuestionnaireComponent } from './questionnaires/detail-questionnaire/detail-questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    EspaceComponent,
    QuestionnaireCardComponent,
    TopNavBarComponent,
    NewQuestionnaireComponent,
    NewQuestionComponent,
    QuestionItemListComponent,
    DetailQuestionnaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    //* Mat-Modules 
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
