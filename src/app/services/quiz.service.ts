import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class QuizService {
    private quizUrl = `assets/data/quiz-questions.json`;

    constructor(private http: HttpClient){}

    getQuizQuestions(): Observable<any[]> {
        return this.http.get<any[]>(this.quizUrl);
    }
}