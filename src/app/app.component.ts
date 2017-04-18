import { Component, HostListener } from '@angular/core';
window.focus(); // make sure we are on this page before we start typing
import {TranslateService} from '@ngx-translate/core';

import { CreditCardMaskPipe, TempConverterPipe } from 'ng-2-4-utilities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //To show with NGFor strings
  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  Farenheit: any[] = [];
  celcius:any[] = [];
  f: number = 32;
  c: number;
  title = 'app works!';
  param = {value: 'Anartz!'};

  creditCardValueWithTransform: String;

  keyChange(event) {
    console.log("Receive event" +  event[0] + " / " + event[1]);
  }
  constructor(public translate: TranslateService) {
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('eu');

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('eu');

      for (let i = 0; i < 5; i++)
      {
        console.info(i*5);
        this.Farenheit.push({"value": i*5});
        this.celcius.push({"value": i*5});
      }
      console.info(this.Farenheit[0].value);

      this.creditCardValueWithTransform = new CreditCardMaskPipe().transform("343665987286008");

      console.log(new TempConverterPipe().transform(32,"C"));
  }

  changeLanguage(language) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }
}
