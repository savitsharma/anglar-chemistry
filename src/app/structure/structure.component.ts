import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface ImageData {
  base64ImageData: string;
  zincId: string;
}
@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent {
  imageList: ImageData[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getImages();
  }


  getImages() {
    const params = new URLSearchParams();
    params.set('compound', 'InChI=1S/2');
    params.set('exactMatch', 'false');
    
    this.http.get<any[]>('http://13.201.216.250:8080/oo?' + params.toString())
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
