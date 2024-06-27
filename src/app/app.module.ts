import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OopComponent } from './components/oop/oop.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { AngularComponent } from './components/angular/angular.component';
import { CSharpComponent } from './components/c-sharp/c-sharp.component';
import { AspNetComponent } from './components/asp-net/asp-net.component';
import { LandingComponent } from './components/landing/landing.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { HttpClientModule } from '@angular/common/http';
import { TimerComponent } from './components/timer/timer.component';
import { QuestionsComponent } from './components/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    OopComponent,
    QuizComponent,
    TypescriptComponent,
    AngularComponent,
    CSharpComponent,
    AspNetComponent,
    LandingComponent,
    FlashcardComponent,
    TimerComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
