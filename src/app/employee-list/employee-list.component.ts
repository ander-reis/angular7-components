import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee, EmployeeService} from '../employee.service';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employee: Employee;
    showMessageSuccess = false;
    employeeToEdit: Employee;

    @ViewChild(EmployeeNewModalComponent) // pegar referencia de um elemento
    employeeNewModal: EmployeeNewModalComponent;

    @ViewChild(EmployeeEditModalComponent) // pegar referencia de um elemento
    employeeEditModal: EmployeeEditModalComponent;

    constructor(public employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    openNewModal() {
        this.employeeNewModal.show();
    }

    openEditModal(employee: Employee) {
        this.employeeToEdit = employee;
        this.employeeEditModal.show();
    }

    onNewEmployee(employee: Employee) {
        this.employee = employee;
        this.showMessageSuccess = true;
    }

    onEditEmployee(employee: Employee) {
        console.log(employee);
    }
}
