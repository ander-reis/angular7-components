import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'modal-body',
  template: '<ng-content></ng-content>',
  styleUrls: []
})
export class ModalBodyComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.element.nativeElement;
    const firstChild = nativeElement.firstChild;
    (<any>firstChild).classList.add('modal-body');
  }

}
