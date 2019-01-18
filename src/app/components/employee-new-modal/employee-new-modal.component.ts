import {Component, OnInit, Output, EventEmitter, ViewChild} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {ModalComponent} from '../modal/modal.component';


declare const $;

@Component({
    selector: 'employee-new-modal',
    templateUrl: './employee-new-modal.component.html',
    styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

    employee: Employee = {
        name: '',
        salary: 0,
        bonus: 0,
    };

    @Output()
    onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();
    @ViewChild(ModalComponent)
    modalComponent: ModalComponent;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    addEmployee(event) {
        const copy = Object.assign({}, this.employee);
        this.employeeService.addEmployee(copy);
        this.onSubmit.emit(copy);
        this.hide();
    }

    show() {
        this.modalComponent.show();
    }

    hide() {
        this.modalComponent.hide();
    }
}
