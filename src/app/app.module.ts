import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeNewComponent} from './components/employee-new/employee-new.component';
import {FormsModule} from '@angular/forms';
import {SalaryColorDirective} from './directives/salary-color.directive';
import {EmployeeNewModalComponent} from './components/employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from './components/employee-edit-modal/employee-edit-modal.component';
import {AlertSuccessComponent} from './components/alert-success/alert-success.component';
import {EmployeeDeleteModalComponent} from './components/employee-delete-modal/employee-delete-modal.component';
import {MyCurrencyPipe} from './pipes/my-currency.pipe';
import {ModalComponent} from './components/modal/modal.component';
import {TestNgContentComponent} from './components/test-ng-content/test-ng-content.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeNewComponent,
        SalaryColorDirective,
        EmployeeNewModalComponent,
        EmployeeEditModalComponent,
        AlertSuccessComponent,
        EmployeeDeleteModalComponent,
        MyCurrencyPipe,
        ModalComponent,
        TestNgContentComponent,
        TesteComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
