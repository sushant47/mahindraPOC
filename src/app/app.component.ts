import { Component } from '@angular/core';
import { HttpService } from './core/services/http.service';
import { APICONSTANTS } from './core/constants/apiconst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrapDemo';
  constructor(private httpService: HttpService) {

  }

  call() {
    this.httpService.post(`${APICONSTANTS.URL}${APICONSTANTS.API_MODULE}`, APICONSTANTS.GET_MANDI_DETAILS_BODY ).subscribe((data) => {
      console.log(data);
  });
  }
}
