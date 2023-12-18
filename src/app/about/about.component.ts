import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  dateTime = new Date()
  counter = 10;
  constructor() {
    const interrval = setInterval(()=>{                           
      this.dateTime = new Date();
      if(this.counter == 0) {
        clearInterval(interrval);
      }
      this.counter--;
  }, 1000);
  
    console.log("AboutComponent Constructor Executed 0");
  }

  ngOnInit(): void {
    console.log("AboutComponent ngOnInit Executed 1");
  }

  ngDoCheck() {
    console.log("AboutComponent ngDoCheck Executed 2");
  }

  ngAfterContentInit() {
    console.log("AboutComponent ngAfterContentInit Executed 3");
  }

  ngAfterContentChecked() {
    console.log("AboutComponent ngAfterContentChecked Executed 4");
  }

  ngAfterViewInit() {
    console.log("AboutComponent ngAfterViewInit Executed 5");
  }

  ngAfterViewChecked() {
    console.log("AboutComponent ngAfterViewChecked Executed 6");
  }

  ngOnChanges() {
    console.log("AboutComponent ngOnChanges Executed 7");
  }

  ngOnDestroy() {
    console.log("AboutComponent ngOnDestroy Executed 8");
  }
}
