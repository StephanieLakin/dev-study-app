import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard.model';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, switchAll } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  constructor(private http: HttpClient) {}

  getFlashcardsByTopic(topic: string): Observable<Flashcard[]> {
    const url = `assets/data/${this.getFileName(topic)}.json`;
    return this.http.get<Flashcard[]>(url);
  }

  private getFileName(topic: string): string {
    switch (topic) {
      case 'OOP':
        return 'oop';
      case '.Net Core MVC':
        return 'dotnet-core-mvc';
      case '.Net Core Web API':
        return 'dotnet-core-web-api';
      case 'Angular':
        return 'angular';
      case 'TypeScript':
        return 'typescript';
      case 'CSS':
        return 'css';
      default:
        throw new Error('Unknown topic');
    }
  }

//   addFlashcard(flashcard: Flashcard): void {
//     this.flashcards.push(flashcard);
//   }

  // Additional methods for update and delete
}
