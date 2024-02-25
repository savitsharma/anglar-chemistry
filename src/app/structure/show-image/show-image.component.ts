import { HttpClient } from '@angular/common/http';
import { Component, Renderer2, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ChemserviceService } from 'src/app/shared/shared/chemservice.service';
import { HttpService } from 'src/app/shared/shared/http.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.scss']
})
export class ShowImageComponent {

  constructor(private sanitizer: DomSanitizer,private router: Router, private http: HttpService, private renderer: Renderer2, private fb: FormBuilder, private url: ChemserviceService,
    private viewContainerRef: ViewContainerRef,private https: HttpClient, private route: ActivatedRoute,) { }
  goToCategories(){
    this.router.navigate(["/categories"]);
  }
  goToStructure(){
    this.router.navigate(["/structure"]);
  }
  
}
