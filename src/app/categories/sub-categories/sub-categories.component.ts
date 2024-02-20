import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ChemserviceService } from 'src/app/shared/shared/chemservice.service';
import { HttpService } from 'src/app/shared/shared/http.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

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

  constructor(private sanitizer: DomSanitizer,private router: Router, private http: HttpService, private renderer: Renderer2, private fb: FormBuilder, private url: ChemserviceService,
    private viewContainerRef: ViewContainerRef,private https: HttpClient, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.getId = params.get('zincId');
    //   console.log('this.getId:', this.getId); 
    // });
    // this.getChemistryDetails;

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


  zincSearch(){
  const requestBody = {
  zincId: this.searchFilter.zincId,
  }
  console.log("requestBody", requestBody);

    this.http.getDataWithPost(this.url.ZINC_STRUCTURE_FORMULA, requestBody).subscribe((response:any)=>{
      if(response.status=== 200){
        console.log("response.zincId", response);
      }
      else {

        this.suggestions = [];
      } 
    },
    (error: any) => {   
            console.error('Error fetching image:', error);
          }
    )
}

// zincSearch() {
//   const searchValue = this.searchFilter.filter.trim();
//   const formData = new FormData();
//   formData.append('zincId', searchValue);

//   this.https.post(this.url.ZINC_STRUCTURE_POST, formData, { responseType: 'blob' }).subscribe((response: Blob) => {
//     if (response) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         this.imageZincData = reader.result;
//         console.log("response",response);
//       };
//       reader.readAsDataURL(response);
//     } else {
//       this.imageZincData = null;
//       console.log("ERROR.zincId", this.error);
//     }
//   });
//   }


onFocusEvent(filterValue: any) {
  filterValue = (filterValue.target as HTMLInputElement).value;
  filterValue = filterValue.trim().toLowerCase();
  console.log("getLength.length", filterValue.length)
  if (filterValue.length === 0) {
  }
}

// getChemistryDetails(zincId: string): void{
//   console.log("zincId", zincId)
//   if (!zincId) {
//     console.error('Zinc ID is required');
//     return;
//   }
  
//   let url = this.url.ZINC_IDPASS_GET;
//   this.https.get(url + zincId).subscribe((response:any)=>{
//     if(response.status === 200){
      
//       this.chemistryDetails = response.Data.getId;
//       console.log("this.companyDetails", this.chemistryDetails);
//     }
//   },(error) => {
//     console.error('ZINCID error:', error);
    
//   }
//   )
// }

}
