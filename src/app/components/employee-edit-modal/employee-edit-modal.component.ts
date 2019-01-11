import {Component, ElementRef, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from '../../services/employee.service';


declare const $;

@Component({
    selector: 'employee-edit-modal',
    templateUrl: './employee-edit-modal.component.html',
    styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

    @Input()
    employee: Employee;
    @Output()
    onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
    }

    addEmployee(event) {
        const copy = Object.assign({}, this.employee);
        this.onSubmit.emit(copy);
        this.hide();
    }

    show() {
        const divModal = this.getDivModal();
        $(divModal).modal('show');
    }

    hide() {
        const divModal = this.getDivModal();
        $(divModal).modal('hide');
    }

    private getDivModal(): HTMLElement {
        const nativeElement: HTMLElement = this.element.nativeElement;
        return nativeElement.firstChild.firstChild as HTMLElement;
    }
}
