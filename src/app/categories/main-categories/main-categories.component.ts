import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ChemserviceService } from 'src/app/shared/shared/chemservice.service';
import { HttpService } from 'src/app/shared/shared/http.service';

interface ImageData {
  base64ImageData: string;
  zincId: string;
}

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
  structureData:any;
  imageZincData: any;
  error: any;
  imageList: ImageData[] = [];
  getId:any;
  imageLists:any;
  showData: boolean = false;



  constructor(private sanitizer: DomSanitizer,private router: Router, private http: HttpService, private renderer: Renderer2, private fb: FormBuilder, private url: ChemserviceService,
     private viewContainerRef: ViewContainerRef,private https: HttpClient,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log("search", this.searchFilter)

    const token = localStorage.getItem('token');
    if (token) {
      
    } else {
      console.log("Error", this.searchFilter)
    }

    this.route?.root?.firstChild?.data.subscribe((data: any) => {
      this.imageList = data.imageList;
    });



    this.route.queryParams.subscribe(params => {
      const dataString = params['data'];
      // console.log("Data from query params:", dataString);
      
      try {
        const data = JSON.parse(dataString);
        if (Array.isArray(data)) {
          this.imageLists = data;
          this.showData = true;
        } else {
          console.error('Invalid data format:', data);
          // Handle invalid data format
        }
      } catch (error) {
        console.error('Error parsing data:', error);
        // Handle parsing error
      }
    });

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


  onSearch() {
    const searchValue = this.searchFilter.filter.trim();
    const formData = new FormData();
    formData.append('smi', searchValue);
  
    this.https.post(this.url.SHOW_DATA_BY_SEARCH, formData, { responseType: 'blob' }).subscribe((response: Blob) => {
      if (response) {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageZincData = reader.result;
          console.log("response",response);
        };
        reader.readAsDataURL(response);
      } else {
        this.imageZincData = null;
        console.log("ERROR.filter", this.error);
      }
    });
    }
  
    onFocusEvent(filterValue: any) {
      filterValue = (filterValue.target as HTMLInputElement).value;
      filterValue = filterValue.trim().toLowerCase();
      console.log("getLength.length", filterValue.length)
      if (filterValue.length === 0) {
      }
    }
  


    getStructureImages(getId:any){
      
    }

}
