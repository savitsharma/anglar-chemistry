import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ChemserviceService } from 'src/app/shared/shared/chemservice.service';
import { HttpService } from 'src/app/shared/shared/http.service';



@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.scss']
})

export class MainCategoriesComponent implements OnInit {
  searchFilter = {
    filter: '',
  };
  suggestions: string[] = [];
  formData: FormData = new FormData();

  constructor(private sanitizer: DomSanitizer,private router: Router, private http: HttpService, private renderer: Renderer2, private fb: FormBuilder, private url: ChemserviceService,
     private viewContainerRef: ViewContainerRef,private https: HttpClient) { }

  ngOnInit(): void {
    console.log("search", this.searchFilter)

    const token = localStorage.getItem('token');
    if (token) {
      
    } else {
      console.log("Error", this.searchFilter)
    }
  }

  handleButtonClick(sectionId: string): void {
    const section = document.querySelector(sectionId);
    if (section) {
      const card = document.querySelector(".card");
      if (card) {
        card.classList.toggle("is-active", sectionId !== "#about");
        card.setAttribute("data-state", sectionId);
      }
      document.querySelectorAll(".card-section").forEach(s => s.classList.remove("is-active"));
      document.querySelectorAll(".card-buttons button").forEach(b => b.classList.remove("is-active"));
      const button = document.querySelector(`[data-section="${sectionId}"]`);
      if (button) {
        button.classList.add("is-active");
      }
      section.classList.add("is-active");
    }
  }


  onSearch(){
    const searchValue = this.searchFilter.filter.trim(); 
    console.log("searchValue", searchValue)

    const formData = new FormData();
    console.log("SearchWorking", formData);
    formData.append('smi', searchValue);

    this.https.post(this.url.CHEM_SEARCH_POST, formData).subscribe((data:any)=>{
      console.log("data", data);
      if(data){
        console.log("Molecular formula structure:", data)
      } else {
        this.suggestions = [];

      }
    },
    (error) => {
      console.error('Search error:', error);
      this.suggestions = [];
    }
    ) 
  }

  onFocusEvent(filterValue: any) {
    filterValue = (filterValue.target as HTMLInputElement).value;
    filterValue = filterValue.trim().toLowerCase();
    console.log("getLength.length", filterValue.length)
    if (filterValue.length === 0) {
    }
  }

}
