import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }
  @Input()
  title!:string;

  @Input()
  margin?='1em 0 1em 0.2em';

  @Input()
  fontSize?='1.7rem'
  ngOnInIt(): void{
    
  }

  ngOnInit(): void {
  }

}
