import {Component, OnInit, ViewChild, ViewChildren, OnDestroy} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {InputDirective} from '../../directives/input.directive';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';
import {HttpClient} from '@angular/common/http';
import {NotifyMessageService} from '../../services/notify-message.service';

declare const $;

@Component({
    selector: 'employee-new-modal',
    templateUrl: './employee-new-modal.component.html',
    styleUrls: ['./employee-new-modal.component.scss']
})
export class EmployeeNewModalComponent implements OnInit, OnDestroy {

    employee: Employee = {
        name: '',
        salary: 0,
        bonus: 0,
    };

    @ViewChild('inputSalary', {read: InputDirective})
    inputName: InputDirective;

    constructor(
        private http: HttpClient,
        private employeeService: EmployeeService,
        private modalRef: ModalRefService,
        private notifyMessage: NotifyMessageService) {
    }

    ngOnInit() {
        this.modalRef.onShow.subscribe(() => {
            this.inputName.focus();
        });
    }

    addEmployee(event) {
        this.http.post('http://localhost:3000/employees', this.employee)
            .subscribe(
                data => {this.modalRef.hide({employee: data, submitted: true});
                    this.notifyMessage.success('Sucesso', `O empregado <strong>${this.employee.name}</strong> foi criado com sucesso`);
                }
            );
    }

    ngOnDestroy(): void {
        console.log('employee new modal destruido');
    }
}
