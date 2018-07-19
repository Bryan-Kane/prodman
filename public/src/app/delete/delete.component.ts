import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router} from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

    ngOnInit() {
      this._route.params.subscribe((params:Params) => {
        this.id={'id':params['id']}
      })
      this.deleteProduct(this.id)
    }
    deleteProduct(id){
      const observable = this._httpService.deleteProduct(id);
      observable.subscribe(results => {
        console.log(results);
        this.goHome();
      })
    }
    goHome() {
      this._router.navigate([''])
    }

}
