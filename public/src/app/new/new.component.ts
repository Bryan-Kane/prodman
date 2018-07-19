import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  price_error: string[];
  title_error: string[];
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }
  addProduct(product){
    const observable = this._httpService.addProduct(product.value);
    observable.subscribe(results =>{
      if(results['message']['errors'] && results['message']['errors']['price'] && results['message']['errors']['price']['name'] == 'ValidatorError'){
        this.price_error = [results['message']['errors']['price']['message']]
      }
      if(results['message']['errors'] && results['message']['errors']['title'] && results['message']['errors']['title']['name'] == 'ValidatorError'){
        this.title_error = [results['message']['errors']['title']['message']]
      }
    if(!results['message']['errors']){
      this.goHome();
    }
    })
  }
  goHome() {
    this._router.navigate([''])
  }

}
