import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  @Output() quizFinished = new EventEmitter<void>();

  topics: string[] = [
     'ASP .NET MVC Quiz',
    'Angular Quiz',
    // '.Net Core Web API Quiz',
   'TypeScript Quiz',
    // 'CSS Quiz',
    // 'Javascript Quiz',
    'C# Quiz',
    'SQL Quiz',
  ];
  selectedTopic!: string;
  questions: any[] = [];
  i: number = 0;
  question: any = null;
  totalQuestions: number = 0;
  answer: string = '';
  score: number = 0;

  constructor(private flashcardService: FlashcardService, private router: Router) {}

  ngOnInit() {
    
  }
  onTopicChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const topic = target.value;
    this.selectedTopic = topic;
    this.flashcardService.getQuizQuestionsByTopic(topic).subscribe(
      (data) => {
        this.questions = data;
        this.totalQuestions = this.questions.length;
        this.i = 0;
        this.question = this.questions[this.i];
      },
      (error) => {
        console.error('Error fetching quiz questions', error);
      }
    );
  }

  onSelecting(event: Event) {
    const target = event.target as HTMLInputElement;
    this.answer = target.value;
  }

  onPrev() {
    if (this.i > 0) {
      --this.i;
      this.question = this.questions[this.i];
    }
  }

  onNext() {
    if (this.answer === this.question.correctAnswer) {
      ++this.score;
    }
    if (this.i < this.totalQuestions - 1) {
      ++this.i;
      this.question = this.questions[this.i];
      this.answer = ''; // Reset the selected answer
    } else {
      this.question = null; // End of quiz
    }
  }

  getOptionKeys(options: any): string[] {
    return Object.keys(options);
  }

  onRefresh() {
    this.i = 0;
    this.score = 0;
    this.answer = '';
    this.question = this.questions[this.i];
  }

  onHome() {
    this.router.navigate(['/home']);
  }
}
