import {
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  @ViewChild(TimerComponent) timerComponent!: TimerComponent;
  isQuizToBeStarted: boolean = false;
  selectedTopic: string = 'Angular Quiz';
  topics: string[] = [
    'OOP Quiz',
    'ASP .NET MVC Quiz',
    '.Net Core Web API Quiz',
    'Angular Quiz',
    'TypeScript Quiz',
    'CSS Quiz',
    'C# Quiz',
    'Javascript Quiz',
    'SQL Quiz',
    'Angular Quiz',
    'Typescript Quiz'
  ];

  constructor(private router: Router) {}

  // onStart() {
  //   this.isQuizToBeStarted = !this.isQuizToBeStarted;
  // }

  onStart() {
    this.isQuizToBeStarted = true;
    setTimeout(() => {
      if (this.timerComponent) {
        this.timerComponent.startTimer();
      }
    }, 0);
  }

  onRefresh() {
    this.isQuizToBeStarted = false;
    setTimeout(() => {
      this.isQuizToBeStarted = true;
      if (this.timerComponent) {
        this.timerComponent.resetTimer();
      }
    }, 100);
  }

  home() {
    this.router.navigate(['/home']);
  }

  selectTopic(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedTopic = target.value;
    this.onRefresh();
    this.onStart();
  }

  onQuizFinished() {
    if (this.timerComponent) {
      this.timerComponent.stopTimer();
    }
  }
}
