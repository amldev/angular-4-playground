import { Component, HostListener } from '@angular/core';
window.focus(); // make sure we are on this page before we start typing
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  param = {value: 'Anartz!'};
  keyChange(event) {
    console.log("Receive event" +  event[0] + " / " + event[1]);
  }
  constructor(public translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('eu');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('eu');
  }

  changeLanguage(language) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
