import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugissuetracker',
  templateUrl: './bugissuetracker.component.html',
  styleUrls: ['./bugissuetracker.component.css']
})
export class BugissuetrackerComponent implements OnInit {
 
  headers = ["ID", "Description"];
  rows = [
    {
      "ID" : "1",
      "Description" :"Create login page",
    },
    {
      "ID" : "2",
      "Description" :"Create rgistration page",
    },
    {
      "ID" : "3",
      "Description" :"Integrate OTP API with registration page",
    }
    
  ]
  selectedColor = '';

  status = [
    {
      name: 'Done',
      value: '#ffff00'
    },
    {
      name: 'In Progress',
      value: '#ff3300'
    },
    {
      name: 'Not Started',
      value: '#0000ff'
    }
  ];

  onChange(value){
    this.selectedColor = value;
  }
  ngOnInit() {
  }

  textBoxClick: boolean = true;
  enable(){
    this.textBoxClick = false
  }
  disable(){
    this.textBoxClick = true
  }


}

  // selectedColor: any = {
  //   value: []
  // }

  // color: any ={
  //   col: [
  //     {
  //       cName: 'done',
  //       color: 'green'
  //     },
  //     {
  //       cName: 'in progress',
  //       color: 'blue'
  //     },
  //     {
  //       cName: 'start work',
  //       color: 'red'
  //     }
  //   ]
  // }
  // selected: any = {
  //   value: []
  // }

  // color: any ={
  //   col: [
  //     {
  //       cName: 1,
  //       color: 'green'
  //     },
  //     {
  //       cName: 2,
  //       color: 'blue'
  //     },
  //     {
  //       cName: 3,
  //       color: 'red'
  //     }
  //   ]
  // }
  
  // onChangeSelectedDetails(event, id, o1){
  //   console.log(this.selected.value[id]);
  //   return o1.color
  // }

 
  // selected= {
  //   name: 'done',
  //   color: 'green'
  // }

  // data = [
  //   {
  //   name: 'Done',
  //   color: 'green'
  //   },
  //  {
  //   name: 'Not Started',
  //   color: 'red'
  //  },
  //  {
  //   name: 'In Progress',
  //   color: 'blue'
  //  }]
  // // 
  // compareObjects(o1: any, o2: any): boolean {
  //   return o1.color === o2.color
  // }
 
