import {Injectable} from '@angular/core';
import {IProduct} from './IProduct';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError, map, mergeMap, retry} from 'rxjs/operators'

@Injectable()//while service call service

export class ProductService {
   
    _productURL:string = './assets/api/products.json';
   
    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this._productURL).pipe(
            catchError(
                (error:any)=>
                {
                    console.log(error);
                    return throwError("error!!!")
                }
            )
        );
    }

    getProductById(id:number): Observable<IProduct> {
        return this.getProducts().pipe(
            map(result =>
              result.find(result => result.productId === id)
            )
          );
    }
}