import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private currentVideoId = new Subject<string>();
  currentVideoId$ = this.currentVideoId.asObservable();

  setCurrentVideoId(id: string){
    this.currentVideoId.next(id)
  }

  constructor() { }
}
