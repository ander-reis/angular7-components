import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models';

@Component({
    selector: 'employee-new',
    templateUrl: './employee-new.component.html',
    styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

    employee: Employee = {
        name: '',
        salary: 0,
        bonus: 0,
    };

    constructor(private employeeService: EmployeeService) {
        // setTimeout(() => {
        //     this.name = 'School of Net';
        // }, 3000);
    }

    ngOnInit() {
    }

    addEmployee(event) {
        const copy = Object.assign({}, this.employee);
        this.employeeService.addEmployee(copy);
    }
}
