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
   // List of topics for the flashcard dropdown
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
  
  flashcards: Flashcard[] = []; // Array to hold the flashcards
  currentFlashcard!: Flashcard;  // Variable to hold the current flashcard being displayed
  currentIndex: number = 0;  // Index of the current flashcard in the array
  selectedTopic: string = 'OOP';
  colorMode = 'lightMode';

  constructor(  // inject the flashcard service and router
    private flashcardService: FlashcardService,
    private router: Router
  ) {}

  // Lifecycle hook that gets called after the component's view has been initialized
  ngOnInit(): void {
    this.updateFlashcards();
  }
  
  // Method to update the flashcards based on the selected topic
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

  // Handle topic selection from the dropdown
  selectTopic(event: Event): void {
    const target = event.target as HTMLSelectElement; // this type assertion is necessary to access the value property of the select element without TypeScript raising an error.
    this.selectedTopic = target.value; 
    this.updateFlashcards(); 
  }

   // Refresh the flashcard list and reset to the first flashcard
   nextFlashcard(): void {
    // Check if there are any flashcards available and the current index is not the last index
    if (this.flashcards.length && this.currentIndex < this.flashcards.length - 1) {
        // Increment the current index to move to the next flashcard
        this.currentIndex++;
        // Update the current flashcard to the flashcard at the new current index
        this.currentFlashcard = this.flashcards[this.currentIndex];
    } else {
        // If no more flashcards are available, log a warning message
        console.warn("No more flashcards available.");
    }
}

 // Refresh the flashcard list and reset to the first flashcard
  refreshList(): void {
    if (this.flashcards.length) {
      this.currentIndex = 0;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    } else {
      console.warn("No flashcards available to refresh.");
    }
  }

    // Display the previous flashcard
  previousFlashcard(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentFlashcard = this.flashcards[this.currentIndex];
    } else {
      console.warn("Already at the first flashcard.");
    }
  }

 //Toggle between light and dark modes
  toggleMode() {
    this.colorMode = this.colorMode === 'lightMode' ? 'darkMode' : 'lightMode';
  }

  home() {
    this.router.navigate(['/home']);
  }
}
