import {Component, OnInit} from '@angular/core';
import {Employee} from '../../services/employee.service';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';
import {HttpClient} from '@angular/common/http';
import {NotifyMessageService} from '../../services/notify-message.service';

declare const $;

@Component({
    selector: 'employee-edit-modal',
    templateUrl: './employee-edit-modal.component.html',
    styleUrls: ['./employee-edit-modal.component.scss']
})
export class EmployeeEditModalComponent implements OnInit {

    employeeId: number;
    employee: Employee = {
        name: '',
        salary: 1,
        bonus: 0
    };

    constructor(private http: HttpClient, private modalRef: ModalRefService, private notifyMessage: NotifyMessageService) {
        this.employeeId = this.modalRef.context['employeeId'];
    }

    ngOnInit() {
        this.http.get<Employee>(`http://localhost:3000/employees/${this.employeeId}`)
            .subscribe(data => this.employee = data);
    }

    editEmployee(event) {
        this.http.put(`http://localhost:3000/employees/${this.employee.id}`, this.employee)
            .subscribe(data => {
                this.modalRef.hide({employee: data, submitted: true});
                this.notifyMessage.success('Sucesso', `O empregado <strong>${this.employee.name}</strong> foi alterado com sucesso`);
            });
    }
}
