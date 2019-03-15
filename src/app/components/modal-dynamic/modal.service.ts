import {ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector} from '@angular/core';
import {ModalDynamicComponent} from './modal-dynamic/modal-dynamic.component';
import {ModalRefService} from './modal-ref.service';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    modalRef: ModalRefService;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef
    ) {
    }

    create(modalImplementedComponent, context = {}): ModalRefService {
        /**
         * cria referencia do component
         */
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(ModalDynamicComponent).create(this.injector);

        /**
         * passa component para modal dynamic component
         */
        this.modalRef = componentRef.instance.mount(modalImplementedComponent, context);
        this.modalRef.appRef = this.appRef;
        this.modalRef.componentRef = componentRef;
        /**
         * informar angular que o component fará parte da aplicação
         */
        this.appRef.attachView(componentRef.hostView);
        /**
         * pega dom e converte para html
         */
        const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        /**
         * inclui no html
         */
        document.body.appendChild(domElement);

        return this.modalRef;
    }

    open() {
        this.modalRef.show();
    }
}
