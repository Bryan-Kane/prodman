import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  price_error: string[];
  title_error: string[];
  product = {'_id':'', 'title':'', 'price':0, 'url':''}
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.id={'id':params['id']}
    })
    this.getProduct(this.id);
  }
  getProduct(id){
    const observable = this._httpService.getProduct(id);
    observable.subscribe(results =>{
      this.product = results['product'];
    })
  }
  editProduct(product, id){
    console.log(product.value);
    console.log(id);
    this.id ={'id':id}
    console.log(this.id)
    const observable = this._httpService.editProduct(product.value, this.id);
    observable.subscribe(results =>{
      if(results['message']['errors'] && results['message']['errors']['price'] && results['message']['errors']['price']['name'] == 'ValidatorError'){
        this.price_error = [results['message']['errors']['price']['message']]
      };
      if(results['message']['errors'] && results['message']['errors']['title'] && results['message']['errors']['title']['name'] == 'ValidatorError'){
        this.title_error = [results['message']['errors']['title']['message']]
      };
      if(!results['message']['errors']){
        console.log(results)
        this.goHome();
      };
    });
  };
  goHome() {
    this._router.navigate(['']);
  }

}
