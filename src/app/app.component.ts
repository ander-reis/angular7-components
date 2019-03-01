import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {GetViewContainerDirective} from './directives/get-view-container.directive';
import {TestDynamicComponentComponent} from './components/test-dynamic-component/test-dynamic-component.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'app';

    @ViewChild('employeeList', {read: ViewContainerRef})
    viewContainer: ViewContainerRef;
    @ViewChild('template')
    template: TemplateRef<any>;
    @ViewChild(GetViewContainerDirective)
    getViewContainer: GetViewContainerDirective;

    components = [
        TestDynamicComponentComponent,
        EmployeeListComponent
    ];
    indexComponents = -1;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
        // setInterval(() => {
        //     this.getViewContainer.viewContainerRef.clear();
        //     this.indexComponents++;
        //     if (this.indexComponents === this.components.length) {
        //         this.indexComponents = 0;
        //     }
        //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.indexComponents]);
        //     this.getViewContainer.viewContainerRef.createComponent(componentFactory);
        // }, 4000);
    }

    ngAfterViewInit() {
        // console.log(this.viewContainer);
        // this.viewContainer.createEmbeddedView(this.template);

        // setInterval(() => {
        //     this.getViewContainer.viewContainerRef.clear();
        //     this.indexComponents++;
        //     if(this.indexComponents === this.components.length){
        //         this.indexComponents = 0;
        //     }
        //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.components[this.indexComponents]);
        //     this.getViewContainer.viewContainerRef.createComponent(componentFactory);
        // },  4000);
    }
}
