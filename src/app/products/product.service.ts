import {Injectable} from '@angular/core';
import {IProduct} from './IProduct';
import { injectAttribute } from '@angular/core/src/render3';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators'

@Injectable()//while service call service

export class ProductService {
    _productURL:string = './assets/api/products.json';
    constructor(private http: HttpClient){}

    getProducts1(): Observable<IProduct[]> {
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
        return this.getProducts1().pipe(
            map(result =>
              result.find(result => result.productId === id)
            )
          );
    }
}