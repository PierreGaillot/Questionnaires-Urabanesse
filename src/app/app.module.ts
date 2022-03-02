import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspaceComponent } from './espace/espace.component';
import { QuestionnaireCardComponent } from './espace/questionnaire-card/questionnaire-card.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatToolbarModule, MAT_DATE_LOCALE } from '@angular/material';
import { NewQuestionnaireComponent } from './questionnaires/new-questionnaire/new-questionnaire.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionItemListComponent } from './questions/question-item-list/question-item-list.component';
import { MatListModule } from '@angular/material';
import { DetailQuestionnaireComponent } from './questionnaires/detail-questionnaire/detail-questionnaire.component';
import { QuestionnaireItemListComponent } from './questionnaires/questionnaire-item-list/questionnaire-item-list.component';
import { ReadQuestionnaireComponent } from './read-questionnaire/read-questionnaire.component';
import { ReadQuestionComponent } from './read-questionnaire/read-question.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReadQuestionTypeCheckbox } from './read-questionnaire/read-type-question/read.question-type-checkbox.component';
import { ReadQuestionTypeRadio } from './read-questionnaire/read-type-question/read.question-type-radio.component';
import { ReadQuestionTypeInput } from './read-questionnaire/read-type-question/read.question-type-input.component';
import { ReadQuestionTypeNote } from './read-questionnaire/read-type-question/read.question-type-note.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DetailsProjectComponent } from './project/details-project/details-project.component';
import { TimelineComponent } from './project/timeline/timeline.component';
import { DateComponent } from './project/timeline/date.component';







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
    QuestionnaireItemListComponent,
    ReadQuestionnaireComponent,
    ReadQuestionComponent,
    ReadQuestionTypeCheckbox,
    ReadQuestionTypeRadio,
    ReadQuestionTypeInput,
    ReadQuestionTypeNote,
    NewProjectComponent,
    DetailsProjectComponent,
    TimelineComponent,
    DateComponent,

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
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    TextFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
