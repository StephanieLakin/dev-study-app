import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    'SQL',
  ];
  flashcards: Flashcard[] = [];
  currentFlashcard!: Flashcard;
  currentIndex: number = 0;
  selectedTopic: string = 'OOP';
  colorMode = 'lightMode';

  constructor(
    private flashcardService: FlashcardService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateFlashcards();
  }
  
  updateFlashcards(): void {
    this.flashcardService.getFlashcardsByTopic(this.selectedTopic).subscribe({
      next: (data: Flashcard[]) => {
        if (data && data.length) {
          this.flashcards = data;
          this.currentIndex = 0;
          this.currentFlashcard = this.flashcards[this.currentIndex];
        } else {
          console.error("No flashcards available for the selected topic.");
          this.flashcards = [];
        }
      },
      error: (err: any) => {
        console.error("Error fetching flashcards:", err);
        this.flashcards = [];
      }
    });
  }

  selectTopic(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedTopic = target.value;
    this.updateFlashcards();
  }

  nextFlashcard(): void {
    if (this.flashcards.length && this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    } else {
      console.warn("No more flashcards available.");
    }
  }

  refreshList(): void {
    if (this.flashcards.length) {
      this.currentIndex = 0;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    } else {
      console.warn("No flashcards available to refresh.");
    }
  }

  previousFlashcard(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    } else {
      console.warn("Already at the first flashcard.");
    }
  }

  toggleMode() {
    this.colorMode = this.colorMode === 'lightMode' ? 'darkMode' : 'lightMode';
  }

  home() {
    this.router.navigate(['/home']);
  }
}
