import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { ProductFilterPipe } from './product-filter.pipe';


@Component({
selector:'pm-products',
templateUrl:"./product-list.component.html",
providers: [ProductService,ProductFilterPipe]
})
export class ProductListComponent implements OnInit, DoCheck, OnDestroy
{
    constructor(private productsSrv: ProductService){}
   
    pipeFilter: string;
    pageTite:string = "Product List";
    imgHight:number = 30;
    imgWidth:number = 30;
    showImg:boolean = true;
    listFilter:string = "card";//for ngModel need to import module angular forms
    products: IProduct[];
    objsubscibe: Subscription;

    ngDoCheck(): void {
        console.log("Method ngDoCheck implemented.");
    }
    ngOnInit(): void {
        this.objsubscibe = this.productsSrv.getProducts().subscribe(
            data=> {
                this.products = data;
                console.log("products: " + JSON.stringify(this.products));
            },

            err=>console.log(err)
        );
    }

    ngOnDestroy(){
        this.objsubscibe.unsubscribe();
    }

    toggleImage():void {
        this.showImg = !this.showImg; 
    }

    onRatingClicked(message:string): void {
        this.pageTite ="Product List: " + message;
    }

}