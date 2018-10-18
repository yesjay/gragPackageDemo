import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-dnd-prac',
  templateUrl: './ngx-dnd-prac.component.html',
  styleUrls: ['./ngx-dnd-prac.component.css']
})
export class NgxDndPracComponent implements OnInit {
  nestedLists = [
    {
      label: 'Item 1',
      children: []
    },
    {
      label: 'Item 2',
      children: [
        {
          label: 'Item 2a',
          children: []
        },
        {
          label: 'Item 2b',
          children: []
        },
        {
          label: 'Item 2c',
          children: []
        }
      ]
    },
    {
      label: 'Item 3',
      children: [
        {
          label: 'Item 3a',
          children: []
        },
        {
          label: 'Item 3b',
          children: []
        },
        {
          label: 'Item 3c',
          children: []
        }
      ]
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
