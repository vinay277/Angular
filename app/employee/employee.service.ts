import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()

export class EmployeeService {
    url: string = "demo/src/app/api/employee.json"
    constructor(private http: HttpClient) {}

    getEmployee() {
       return this.http.get(this.url).map(res => res)
    }
}