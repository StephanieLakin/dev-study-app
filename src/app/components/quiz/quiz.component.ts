import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  isQuizToBeStarted: boolean = false;
  selectedTopic: string = 'OOP';
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
    'Angular Quiz'
  ];

constructor(private router: Router){}

  onStart() {
    this.isQuizToBeStarted = !this.isQuizToBeStarted;
  }  

  onRefresh() {
    this.isQuizToBeStarted = false;
    setTimeout(() => {
      this.isQuizToBeStarted = true;
    }, 100);
  }

  home() {
    this.router.navigate(['/home']);
  }

  selectTopic(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedTopic = target.value;
   // this.updateQuiz();
  }

}
