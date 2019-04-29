import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';
import {Employee} from '../models';
import {Observable, throwError} from 'rxjs';
import {NotifyMessageService} from './notify-message.service';
import {catchError} from 'rxjs/operators';

interface ListHttpParams {
    search;
    sort: { column, sort };
    pagination: {
        page: number;
        perPage: number
    };
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeHttpService {

    private baseUrl = 'http://localhost:3000/employees';

    constructor(private http: HttpClient, private notifyMessage: NotifyMessageService) {
    }

    list({search, sort, pagination}: ListHttpParams): Observable<HttpResponse<Employee[]>> {
        let filterObj = {
            _sort: sort.column,
            _order: sort.sort,
            _page: pagination.page + '',
            _limit: pagination.perPage + ''
        };

        if (search !== '') {
            filterObj = Object.assign({}, filterObj, {name: search});
        }
        const params = new HttpParams({
            fromObject: filterObj
        });
        return this.http.get<Employee[]>(this.baseUrl, {params, observe: 'response'})
            .pipe(catchError((responseError) => this.handlerError(responseError)));
    }

    get(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/${id}`)
            .pipe(catchError((responseError) => this.handlerError(responseError)));
    }

    create(data: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, data)
            .pipe(catchError((responseError) => this.handlerError(responseError)));
    }

    update(data: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.baseUrl}/${data.id}`, data)
            .pipe(catchError((responseError) => this.handlerError(responseError)));
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${id}`)
            .pipe(catchError((responseError) => this.handlerError(responseError)));
    }

    private handlerError(error: HttpErrorResponse) {
        console.log(error);
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // backend-side error
            errorMessage = `Error: código - ${error.error.status}<br>, Mensagem: ${error.message}`;
        }
        this.notifyMessage.error('Não foi possível realizar a operação', errorMessage);
        return throwError(error);
    }
}
