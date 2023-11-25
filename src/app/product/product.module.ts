import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild([
      { path: 'products' , component: ProductListComponent },
      { path: 'products/:id', component:ProductDetailsComponent }
    ])
  ]
})
export class ProductModule { }
