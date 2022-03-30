import { Component, OnInit,Input } from '@angular/core';//匯入input
import { Hero } from '../data/hero';
//接收hero物件，並顯示
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?:Hero;
  
  constructor() { }

  ngOnInit() {
  }

}