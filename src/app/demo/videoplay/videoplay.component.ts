import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoplay',
  templateUrl: './videoplay.component.html',
  styleUrls: ['./videoplay.component.scss']
})
export class VideoplayComponent implements OnInit {

  public show:boolean = false;
  public buttonName:boolean = true;

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = false;
    else
      this.buttonName = true;
  }

}
