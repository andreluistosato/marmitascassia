import { Inject, Injectable } from '@angular/core';
import { AngularFire, FirebaseRef, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Product } from '../../models/product';


@Injectable()
export class ProductService {
	constructor(private af: AngularFire) { }
	getProducts(): FirebaseListObservable<Product[]> {
		return this.af.database.list('/products');
	} 
	getProduct(id: number): FirebaseObjectObservable<Product> {
	  	return this.af.database.object(`/products/${id}`);
	}
	createProduct(prod: Product) {
		return this.af.database.list('/products').push(prod);	
	}
}