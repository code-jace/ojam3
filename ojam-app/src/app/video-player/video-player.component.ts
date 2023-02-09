import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import YouTubePlayer from 'yt-player';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements AfterViewInit {
  @Output() VideoEnded = new EventEmitter<string>();
  @Output() PlayerLoaded = new EventEmitter<string>();


  player!: YouTubePlayer;
  @ViewChild('player') el!:ElementRef;

  constructor(private videoService: VideoService){

  }    

  endedSetUp = false;

  ngAfterViewInit(): void {
    this.player =  new YouTubePlayer(this.el.nativeElement);
       
    this.videoService.currentVideoId$.subscribe(vid => {
      this.player.load(vid, true);
      this.player.play();
      if(!this.endedSetUp){
        this.player.on('ended', () => {
          console.log('video ended');
          
          this.VideoEnded.emit("video ended");
        });
      }
    });

    this.PlayerLoaded.emit("video player loaded");   
    

  }
  
}
