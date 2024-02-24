import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ChemserviceService } from 'src/app/shared/shared/chemservice.service';
import { HttpService } from 'src/app/shared/shared/http.service';

interface ImageData {
  base64ImageData: string;
  zincId: string;
}
@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {
  imageList: ImageData[] = [];


  suggestions: string[] = [];
  formData: FormData = new FormData();
  chemistryDetails:any;
  getId:any;
  error: any;
  zincId: any;

employee?:Data[];
searchFilter = {
  // filter: '', 
  zincId:'',
};
imageZincData: any;
showZincId:any;
showName: boolean = false;
searchValue: string = '';
showModal: boolean = false;
showZincStructure: boolean = false;

  constructor(private sanitizer: DomSanitizer,private router: Router, private http: HttpService, private renderer: Renderer2, private fb: FormBuilder, private url: ChemserviceService,
    private viewContainerRef: ViewContainerRef,private https: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getImages();
    this.getZincStructure();    
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


zincSearch() {
  const searchValue = this.searchFilter.zincId.trim();
  const formData = new FormData();
  formData.append('zincId', searchValue);
  
  if (searchValue) {
  this.https.post(this.url.ZINC_STRUCTURE_FORMULA, formData, { responseType: 'blob' }).subscribe((response: Blob) => {
    if (response) {
      this.showName= true;
      this.showZincStructure = true;
      this.searchValue = searchValue;
      const reader = new FileReader();
      reader.onloadend = () => {
        this.imageZincData = reader.result;
        console.log("response",response);

      };
      reader.readAsDataURL(response);
      this.zincId = searchValue;
      console.log("semi",response);
    } else {
      this.imageZincData = null;
      console.log("ERROR.zincId", this.error);
    }
  }, (error) => {
      console.error('Error fetching image:', error);
  });
}

  }

  // zincSearch() {
  //   const searchValue = this.searchFilter.zincId.trim();
  //   if (searchValue) {
  //     // Your API call to fetch Zinc structure image
  //     this.https.get<any>('http://13.201.216.250:8080/depict/cot/png?semi=' + searchValue)
  //       .subscribe((response: any) => {
  //         // Assuming the response contains base64ImageData and zincId
  //         this.imageZincData = response.base64ImageData;
  //         this.zincId = response.zincId;
  //         this.showZincStructure = true; // Show the Zinc structure container
  //       }, (error: any) => {
  //         console.error('Error fetching Zinc structure:', error);
  //         this.showZincStructure = false; // Hide the Zinc structure container on error
  //       });
  //   } else {
  //     // Handle case when search value is empty
  //     console.error('Search value is empty.');
  //   }
  // }



onFocusEvent(filterValue: any) {
  filterValue = (filterValue.target as HTMLInputElement).value;
  filterValue = filterValue.trim().toLowerCase();
  console.log("getLength.length", filterValue.length)
  if (filterValue.length === 0) {
  }
}


getZincStructure() {
  const zincId = ''; 
  const url = `http://13.201.216.250:8080/zincStructure?zincId=${zincId}`;

  this.https.get(url).subscribe((response: any) => {
    // Assuming the API response contains the zincId value
    this.showZincId = response.zincId;
  }, (error: any) => {
    console.error('Error fetching zinc structure:', error);
  });
}





openModel() {
  this.showModal = true;
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'block';
  } 
this.zincSearch();
}
closeModel() {
  this.showModal = false;
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'none';
  } 
}


getImages() {
  const params = new URLSearchParams();
  params.set('compound', 'InChI=1S/2');
  params.set('exactMatch', 'false');

  this.https.get<any[]>('http://13.201.216.250:8080/oo?' + params.toString())
    .subscribe((response: any[]) => {
      this.imageList = [];
      for (let key in response) {
        
        if (response.hasOwnProperty(key)) {
          const imageData: ImageData = { base64ImageData: response[key].imageData, zincId: response[key].zincId };
          console.log(imageData);
          this.imageList.push(imageData);
        }
      }
    });
}

}
