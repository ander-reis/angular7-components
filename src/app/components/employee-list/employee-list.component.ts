import {Component, OnInit} from '@angular/core';
import {Employee} from '../../services/employee.service';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';
import {ModalService} from '../modal-dynamic/modal.service';
import {EmployeeDeleteModalComponent} from '../employee-delete-modal/employee-delete-modal.component';
import {EmployeeDetailModalComponent} from '../employee-detail-modal/employee-detail-modal.component';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    employees: any = [];
    search = '';
    sortColumn = {column: 'name', sort: 'asc'};
    pagination = {
        itemsPerPage: 2,
        currentPage: 1,
        // totalItems: 5
    };

    constructor(
        private modalService: ModalService,
        private http: HttpClient) {
    }

    ngOnInit() {
        this.getEmployees();
    }

    openDetailModal(employee: Employee) {
        const modalRef = this.modalService.create(EmployeeDetailModalComponent, {employee});
        modalRef.show();
    }

    openNewModal() {
        const modalRef = this.modalService.create(EmployeeNewModalComponent);

        modalRef.onHide.subscribe((event) => {
            this.getEmployeesAfterSuccess(event);
        });

        modalRef.show();
    }

    openEditModal(employee: Employee) {
        const modalRef = this.modalService.create(EmployeeEditModalComponent, {employeeId: employee.id});

        modalRef.onHide.subscribe((event) => {
            this.getEmployeesAfterSuccess(event);
        });

        modalRef.show();
    }

    openDestroyModal(employee: Employee) {
        const modalRef = this.modalService.create(EmployeeDeleteModalComponent, {employeeId: employee.id});

        modalRef.onHide.subscribe((event) => {
            this.getEmployeesAfterSuccess(event);
        });

        modalRef.show();
    }

    getEmployeesAfterSuccess(event) {
        const eventData = event.data;
        if (eventData && eventData.hasOwnProperty('submitted')) {
            this.getEmployees();
        }
    }

    handleSearch(search) {
        this.search = search;
        this.pagination.currentPage = 1;
    }

    getEmployees() {
        this.http.get<Employee[]>('http://localhost:3000/employees')
            .subscribe(data => {
                this.employees = data;
            });
    }
}
