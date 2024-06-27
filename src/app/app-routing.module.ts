import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { LandingComponent } from './components/landing/landing.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', component: LandingComponent },
  { path: 'flashcard', component: FlashcardComponent },
  { path: 'quizzes', component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
