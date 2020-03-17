import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugissuetracker',
  templateUrl: './bugissuetracker.component.html',
  styleUrls: ['./bugissuetracker.component.css']
})
export class BugissuetrackerComponent implements OnInit {
  name = 'Angular 6';

 
  selected= {
    name: 'Done',
    color: 'green'
  }

  data = [{
    name: 'Done',
    color: 'green'
  }, {
    name: 'Not Started',
    color: 'red'
  }, {
    name: 'In Progress',
    color: 'blue'
  }]
  // onChange(value){
  //   this.selected = value;
  // }
  compareObjects(o1: any, o2: any): boolean {
    return o1.color === o2.color
  }

  ngOnInit() {
    // this.selectedColor = this.selectedColor[0].name;
  }

}
