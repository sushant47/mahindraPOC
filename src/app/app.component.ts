import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from './core/services/http.service';
import { APICONSTANTS } from './core/constants/apiconst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootstrapDemo';
  constructor(private translate: TranslateService, private httpService: HttpService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  call() {
    this.httpService.post(APICONSTANTS.url, APICONSTANTS.sampleBody).subscribe((data) => {
      console.log(data);
  });
  }
}
