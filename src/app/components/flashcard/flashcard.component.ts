import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { Flashcard } from '../../models/flashcard.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css'],
})
export class FlashcardComponent implements OnInit {
  // List of available topics for the flashcards
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
  flashcards!: Flashcard[];
  currentFlashcard!: Flashcard; // The currently displayed flashcard
  currentIndex: number = 0; // Index of the current flashcard in the array
  selectedTopic: string = 'OOP';
  colorMode = 'lightMode'; // Variable to store the current color mode (light/dark)

  constructor(
    private flashcardService: FlashcardService,
    private router: Router
  ) {}

  // Lifecycle hook that is called after the component's view has been fully initialized
  ngOnInit(): void {
    this.updateFlashcards(); // Fetch and display flashcards for the selected topic
  }

  // Method to update the flashcards based on the selected topic
  updateFlashcards(): void {
    this.flashcardService
      .getFlashcardsByTopic(this.selectedTopic) // Fetches flashcards from the service
      .subscribe((data) => {
        this.flashcards = data; // Assigns the fetched flashcards to the local array
        this.currentIndex = 0; // Resets the current index to the first flashcard
        this.currentFlashcard = this.flashcards[this.currentIndex]; // Displays the first flashcard
      });
  }

  // Method to handle the selection of a new topic
  selectTopic(event: Event): void {
    const target = event.target as HTMLSelectElement; // Typecasts the event target
    this.selectedTopic = target.value; // Sets the selected topic
    this.updateFlashcards(); // Updates the flashcards for the new topic
  }

  // Method to navigate to the next flashcard
  nextFlashcard(): void {
    if (this.currentIndex < this.flashcards.length - 1) {
      // Checks if there are more flashcards
      this.currentIndex++; // Increments the current index
      this.currentFlashcard = this.flashcards[this.currentIndex]; // Displays the next flashcard
    }
  }

  // Method to refresh the flashcard list (go back to the first flashcard)
  refreshList(): void {
    this.currentIndex = 0; // Resets the index to the first flashcard
    this.currentFlashcard = this.flashcards[this.currentIndex]; // Displays the first flashcard
  }

  // Method to navigate to the previous flashcard
  previousFlashcard(): void {
    if (this.currentIndex > 0) {
      // Checks if not already at the first flashcard
      this.currentIndex--; // Decrements the current index
      this.currentFlashcard = this.flashcards[this.currentIndex]; // Displays the previous flashcard
    }
  }

  // Method to toggle between light and dark modes
  toggleMode() {
    if (this.colorMode === 'lightMode') {
      // Checks the current mode
      this.colorMode = 'darkMode'; // Switches to dark mode
    } else {
      this.colorMode = 'lightMode'; // Switches to light mode
    }
  }

  home() {
    this.router.navigate(['/home']); // Navigates to the home route
  }
}
