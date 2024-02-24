import { Component, Inject, Renderer2, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './shared/shared/http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RXN Finder';
  showFiller = true;
 

  constructor(private sanitizer: DomSanitizer,
    private router: Router,
    private http: HttpService,
    private renderer: Renderer2,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private route: ActivatedRoute,){}


  goToCategories(){
    this.router.navigate(["/categories"]);
  }
  
  goToReaction(){
    this.router.navigate(["/categories/main"]);
  }
  goToSubstance(){
    this.router.navigate(["/categories/sub"]);
  }
  goToStructure(){
    this.router.navigate(["/structure"]);
  }
  goToShowImage(){
    this.router.navigate(["/structure/show-image"]);
  }
}
