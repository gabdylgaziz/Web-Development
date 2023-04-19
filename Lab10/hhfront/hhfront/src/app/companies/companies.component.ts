import { Component, OnInit } from '@angular/core';
import { Company } from "../VacancyTemplate";
import { CompanyService } from "../vacancy.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  loaded: boolean;
  newCompany: Company;
  constructor(private companyService: CompanyService) {
    this.companies = [];
    this.loaded = true;
    this.newCompany = {} as Company;
  }

  getCompanies() {
    this.loaded = false;
    this.companyService.getCompanies().subscribe( (companies) => {
      this.companies = companies;
      this.loaded = true;
    });
  }

  

  deleteCompany(id : number) {
    this.companyService.deleteCompany(id).subscribe((response) => {
      this.companies = this.companies.filter(a => a.id != id);
    })
  }

  createCompany() {
    this.loaded = false;
  }
  
  ngOnInit(): void {
    this.getCompanies();
  }
}