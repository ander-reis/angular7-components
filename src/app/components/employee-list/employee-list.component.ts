import {Component, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';
import {ModalService} from '../modal-dynamic/modal.service';
import {EmployeeDeleteModalComponent} from '../employee-delete-modal/employee-delete-modal.component';
import {EmployeeDetailModalComponent} from '../employee-detail-modal/employee-detail-modal.component';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    employee: Employee;
    successMessage = {
        message: '',
        show: false
    };

    constructor(public employeeService: EmployeeService, private modalService: ModalService) {
    }

    ngOnInit() {

    }

    openDetailModal(employee: Employee) {
        const modalRef = this.modalService.create(EmployeeDetailModalComponent, {employee});
        modalRef.show();
    }

    openNewModal() {
        const modalRef = this.modalService.create(EmployeeNewModalComponent);

        modalRef.onHide.subscribe((event) => {
            const eventData = event.data;
            if (eventData && eventData.hasOwnProperty('employee')) {
                const employee = eventData.employee;
                const message = `O empregado <strong>${employee.name}</strong> foi criado com sucesso`;
                this.showSuccessMessage(message);
            }
        });

        modalRef.show();
    }

    openEditModal(employee: Employee) {
        const modalRef = this.modalService.create(EmployeeEditModalComponent, {employee});

        modalRef.onHide.subscribe((event) => {
            const eventData = event.data;
            if (eventData && eventData.hasOwnProperty('employee')) {
                const message = `O empregado <strong>${employee.name}</strong> foi alterado com sucesso`;
                this.showSuccessMessage(message);
            }
        });

        modalRef.show();
    }

    openDestroyModal(employee: Employee) {
        const modalRef = this.modalService.create(EmployeeDeleteModalComponent, {employee});

        modalRef.onHide.subscribe((event) => {
            const eventData = event.data;
            if (eventData && eventData.hasOwnProperty('employee')) {
                const message = `O empregado <strong>${employee.name}</strong> foi excluído com sucesso`;
                this.showSuccessMessage(message);
            }
        });

        modalRef.show();
    }

    showSuccessMessage(message) {
        this.successMessage.message = message;
        this.successMessage.show = true;
        setTimeout(() => {
            this.successMessage.show = false;
        }, 3000);
    }
}
