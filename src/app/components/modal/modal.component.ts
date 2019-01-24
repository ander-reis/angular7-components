import {Component, ElementRef, OnInit} from '@angular/core';
declare const $;
@Component({
  selector: 'modal',
  template: `
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <ng-content select="[modal-title]"></ng-content>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ng-content select="[modal-body]"></ng-content>
          <ng-content select="[modal-footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.querySelector('[modal-title]').classList.add('modal-title');
    nativeElement.querySelector('[modal-body]').classList.add('modal-body');
    nativeElement.querySelector('[modal-footer]').classList.add('modal-footer');
  }

  show() {
    $(this.divModal).modal('show');
  }

  hide() {
    $(this.divModal).modal('hide');
  }

  private get divModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }
}
