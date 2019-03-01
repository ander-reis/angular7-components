import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'modal-footer',
  template: '<ng-content></ng-content>',
  styleUrls: []
})
export class ModalFooterComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.element.nativeElement;
    const firstChild = nativeElement.firstChild;
    (<any>firstChild).classList.add('modal-footer');
  }

}