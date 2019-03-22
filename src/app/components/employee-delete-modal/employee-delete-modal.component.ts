import {Component, OnInit, Input, ElementRef, EventEmitter, Output} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';

declare const $;

@Component({
    selector: 'employee-delete-modal',
    templateUrl: './employee-delete-modal.component.html',
    styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

    employee: Employee;

    constructor(private employeeService: EmployeeService, private modalRef: ModalRefService) {
        this.employee = this.modalRef.context['employee'];
    }

    ngOnInit() {

    }

    destroy() {
        const copy = Object.assign({}, this.employee);
        this.employeeService.destroyEmployee(this.employee);
        this.modalRef.hide({employee: this.employee, submitted: true});
    }
}
