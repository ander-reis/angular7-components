import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Employee} from '../models';
import {Observable} from 'rxjs';

interface ListHttpParams {
    search;
    sort: {column, sort};
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

    constructor(private http: HttpClient) {
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
        return this.http.get<Employee[]>(this.baseUrl, {params, observe: 'response'});
    }

    get(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/${id}`);
    }

    create(data: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, data);
    }

    update(data: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.baseUrl}/${data.id}`, data);
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${id}`);
    }
}
