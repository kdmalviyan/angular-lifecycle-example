import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
    console.log("ContactComponent Constructor Executed 0");
  }

  ngOnInit(): void {
    console.log("ContactComponent ngOnInit Executed 1");
  }

  ngDoCheck() {
    console.log("ContactComponent ngDoCheck Executed 2");
  }

  ngAfterContentChecked() {
    console.log("ContactComponent ngAfterContentChecked Executed 4");
  }

  ngAfterContentInit() {
    console.log("ContactComponent ngAfterContentInit Executed 3");
  }

  ngAfterViewInit() {
    console.log("ContactComponent ngAfterViewInit Executed 5");
  }

  ngAfterViewChecked() {
    console.log("ContactComponent ngAfterViewChecked Executed 6");
  }

  ngOnChanges() {
    console.log("ContactComponent ngOnChanges Executed 7");
  }

  ngOnDestroy() {
    console.log("ContactComponent ngOnDestroy Executed 8");
  }
}
