import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pass-key',
  templateUrl: './pass-key.component.html',
  styleUrls: ['./pass-key.component.css']
})
export class PassKeyComponent implements OnInit,AfterViewInit {
pkFilled = 0;
@ViewChild('numpad', { static: true }) numpad!: ElementRef;
  constructor() {
  // this.numpad = new ElementRef(null);
  
  
   }
  ngAfterViewInit(): void {
    console.log(" numpad ",this.numpad);
  }

  ngOnInit(): void {
  }

  otpBack(event: KeyboardEvent, value: any) {



  }
}
