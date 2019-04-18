import {Component, OnInit} from '@angular/core';
import {Employee} from '../../services/employee.service';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';
import {HttpClient} from '@angular/common/http';
import {NotifyMessageService} from '../../services/notify-message.service';

declare const $;

@Component({
    selector: 'employee-delete-modal',
    templateUrl: './employee-delete-modal.component.html',
    styleUrls: ['./employee-delete-modal.component.scss']
})
export class EmployeeDeleteModalComponent implements OnInit {

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

    destroy() {
        this.http.delete(`http://localhost:3000/employees/${this.employee.id}`)
            .subscribe(data => {
                this.modalRef.hide({employee: this.employee, submitted: true});
                this.notifyMessage.success('Sucesso', `O empregado <strong>${this.employee.name}</strong> foi excluído com sucesso`);
            });
    }
}
