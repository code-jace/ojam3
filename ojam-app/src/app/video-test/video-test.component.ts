import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-test',
  templateUrl: './video-test.component.html',
  styleUrls: ['./video-test.component.css']
})
export class VideoTestComponent {
  
  videos = [
    { id: 'dQw4w9WgXcQ' },
    { id: 'xGytDsqkQY8' },
    { id: '6ZfuNTqbHE8' }
  ];
  currentVideoIndex = 0;
  currentVideoId = '';

  constructor(private videoService: VideoService){}

  ngAfter() {

  }

  playVideo(videoId: string) {
    this.videoService.setCurrentVideoId(videoId);
  }

  onVideoEnd(str: string) {
    // play the next video in the list
    if(this.currentVideoIndex < this.videos.length) {
      this.currentVideoIndex ++;
      this.playVideo(this.videos[this.currentVideoIndex].id);
    }
  }

  onPlayerLoad() {
    // play the first video in the list when the component loads
    this.playVideo(this.videos[this.currentVideoIndex].id);
  }
}
