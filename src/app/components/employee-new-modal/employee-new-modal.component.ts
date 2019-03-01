import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewChildren} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {Modalable} from '../modal/modalable';
import {InputDirective} from '../../directives/input.directive';

declare const $;

@Component({
    selector: 'employee-new-modal',
    templateUrl: './employee-new-modal.component.html',
    styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

    employee: Employee = {
        name: '',
        salary: 0,
        bonus: 0,
    };

    // @ViewChild(InputDirective)
    // inputName: InputDirective;

    @ViewChild('inputSalary', {read: InputDirective})
    inputName: InputDirective;

    @ViewChildren(InputDirective)
    inputs;

    @Output()
    onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

    constructor(private employeeService: EmployeeService) {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        this.onShow.subscribe(() => {
            //console.log(this.inputName);
            this.inputName.focus();
        });
    }

    ngAfterViewInit(){
        console.log(this.inputs);
    }

    addEmployee(event) {
        const copy = Object.assign({}, this.employee);
        this.employeeService.addEmployee(copy);
        this.onSubmit.emit(copy);
        this.hide();
    }

    // fechou(event) {
    //     console.log(event);
    //     this.onHide.emit(event);
    // }
    //
    // mostrou(event) {
    //     console.log(event);
    // }
}
