import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  // post a product to the database
  addProduct(product){
    return this._http.post('addproduct', product);
  }
  // get all products from the database
  getAllProducts(){
    return this._http.get('getallproducts');
  }
  // delete a product
  deleteProduct(id){
    return this._http.post('deleteproduct', id);
  }
  getProduct(id){
    return this._http.post('/getaproduct', id);
  }
  editProduct(product, id){
    return this._http.post('/editproduct', {product:product, id:id});
  }
}
