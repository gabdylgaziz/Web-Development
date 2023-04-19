import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vacancy, Company } from "./VacancyTemplate";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  JSON_URL = `http://127.0.0.1:8000/api`
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.JSON_URL}/companies`);
  }

  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.JSON_URL}/companies/${id}`);
  }

  deleteCompany(id: number): Observable<Company> {
    return this.client.delete<Company>(`${this.JSON_URL}/companies/${id}`);
  }

  createCompany(company: Company): Observable<Company> {
    return this.client.post<Company>(`${this.JSON_URL}/companies`, company)
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.JSON_URL}/vacancies`);
  }

  getVacancy(id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.JSON_URL}/vacancies/${id}`)
  }

}