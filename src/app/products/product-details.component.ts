import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { IProduct } from './IProduct';

@Component({
    templateUrl:"./product-details.component.html",
    providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit, OnDestroy
{

    pageTitle:string = "Product Detail";
    objsubscibe: Subscription;
    product: IProduct;

    constructor(private _route: ActivatedRoute, 
        private productsSrv: ProductService, 
        private _router:Router){}

    ngOnInit(): void {
        let id = +this._route.snapshot.paramMap.get('id'); 
        this.objsubscibe = this.productsSrv.getProductById(id).subscribe(
            data=>{
                this.product = data;
                console.log(this.product);
            },
            err=>console.log(err)
        );     
    }

    ngOnDestroy(){
        this.objsubscibe.unsubscribe();
    }

    onBack() {
        this._router.navigate(['/products']);
    }
    
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}