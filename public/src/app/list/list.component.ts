import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [{'title':'', 'price':0, 'url':''}]
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    const observable = this._httpService.getAllProducts();
    observable.subscribe(results =>{
      this.products = results['products']
    })
  }

}
