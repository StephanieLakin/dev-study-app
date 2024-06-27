import { Component, OnInit } from '@angular/core';
//import { QUESTIONS } from './questions'; // Adjust the path as necessary

@Component({
  selector: 'app-csharp-quiz',
  templateUrl: './c-sharp.component.html',
  styleUrls: ['./c-sharp.component.css']
})
export class CSharpComponent implements OnInit {
 // questions = QUESTIONS.csharp;
  currentQuestionIndex = 0;
  userAnswers = [];
  showResults = false;

  constructor() { }

  ngOnInit(): void {
  }

  answerQuestion(answer: string): void {
    // this.userAnswers[this.currentQuestionIndex] = answer;
    // if (this.currentQuestionIndex < this.questions.length - 1) {
    //   this.currentQuestionIndex++;
    // } else {
    //   this.showResults = true;
    // }
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.showResults = false;
  }
}

