import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit,OnDestroy {
  gifs: any = [];
  // showpost: any = [];
  subscription: Subscription;

  constructor(private dataservice: DataService) { }

  TotalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.dataservice.getTrendinGifs();
    this.dataservice.getGifs().subscribe((response) => {
      this.gifs = response;
      console.log(this.gifs);
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
