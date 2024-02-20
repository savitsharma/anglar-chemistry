import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../shared/shared/http.service';
import { ChemserviceService } from '../shared/shared/chemservice.service';
import { error } from 'highcharts';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  safeUrl: SafeResourceUrl;

  // user_id: string;
  searchFilter = {
    filter: '',
  };
  suggestions: string[] = [];
  formData: FormData = new FormData();
  imageData: any;


  constructor(private sanitizer: DomSanitizer,private router: Router, private http: HttpService, private renderer: Renderer2, private fb: FormBuilder, private url: ChemserviceService,
     private viewContainerRef: ViewContainerRef,private https: HttpClient) {

    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('..src/assets/remote/index1.html');
  }

ngOnInit(): void {
  console.log("search", this.searchFilter)

  const token = localStorage.getItem('token');
  if (token) {
    
  } else {
    console.log("Error", this.searchFilter)
  }
}



onSearch() {
  const searchValue = this.searchFilter.filter.trim();
  const formData = new FormData();
  formData.append('smi', searchValue);

  this.https.post(this.url.CHEM_SEARCH_POST, formData, { responseType: 'blob' }).subscribe((data: Blob) => {
    if (data) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert image data to base64
        this.imageData = reader.result;
      };
      reader.readAsDataURL(data);
    } else {
      // Handle error or set a default image
      this.imageData = null;
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


  // onSearch() {
  //   const searchValue = this.searchFilter.filter.trim(); 
  //   const apiUrl = 'http://13.201.216.250:8080/depict/cow/png/'; 
  //   const formData = new FormData();
  //   formData.append('smi', searchValue); // Add 'smi' value to FormData

  //   this.https.post(apiUrl, formData, { responseType: 'blob' }).subscribe(
  //     (response: Blob) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         const base64data = reader.result as string;
          
  //         console.log('Image base64:', base64data);
  //       };
  //       reader.readAsDataURL(response);
  //     },
  //         (error: any) => {
  //       // Error callback
  //       console.error('Error fetching image:', error);
  //       // Handle error, show error message, etc.
  //     }
  //   );
  // }


}
