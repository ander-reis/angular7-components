import {ViewChild} from '@angular/core';
import {ModalComponent} from './modal.component';

export class Modalable {
    @ViewChild(ModalComponent)
    modalComponent: ModalComponent;

    show() {
        this.modalComponent.show();
    }

    hide() {
        this.modalComponent.hide();
    }
}
