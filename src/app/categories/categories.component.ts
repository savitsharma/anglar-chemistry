import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Assuming './assets/remote/templates/index.html' is the correct path
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('..src/assets/remote/index1.html');
  }
}
