import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { Flashcard } from '../../models/flashcard.model';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css'],
})
export class FlashcardComponent implements OnInit {
  topics: string[] = [
    'OOP',
    'ASP .NET MVC',
    '.Net Core Web API',
    'Angular',
    'TypeScript',
    'CSS',
    'C#',
    'Javascript',
  ];
  flashcards!: Flashcard[];
  currentFlashcard!: Flashcard;
  currentIndex: number = 0;
  selectedTopic: string = 'OOP';
  colorMode = 'lightMode';

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    this.updateFlashcards();
  }

  updateFlashcards(): void {
    this.flashcardService
      .getFlashcardsByTopic(this.selectedTopic)
      .subscribe((data) => {
        this.flashcards = data;
        this.currentIndex = 0;
        this.currentFlashcard = this.flashcards[this.currentIndex];
      });
  }

  selectTopic(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedTopic = target.value;
    this.updateFlashcards();
  }

  nextFlashcard(): void {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    }
  }

  previousFlashcard(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    }
  }

  toggleMode() {
    if (this.colorMode === 'lightMode') {
      this.colorMode = 'darkMode';
    } else {
      this.colorMode = 'lightMode';
    }
  }
}
