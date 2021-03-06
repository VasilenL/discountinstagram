import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  input: string;

  inputForChild: string;
  constructor() { }

  ngOnInit(): void {
  }

  submitInputToChild() {
    this.inputForChild = this.input;
  }

  clearInput() {
    this.input = null;
    this.inputForChild = null;
  }
}
