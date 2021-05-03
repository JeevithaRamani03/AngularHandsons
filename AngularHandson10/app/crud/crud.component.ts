import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Products} from './../products';
import { ProductMasterService } from '../product-master.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient,
    private productService:ProductMasterService) { }
    ProductList:Observable<Products[]>;
    productForm:any;
    productId='';
    message='';

  ngOnInit() {
    this.productForm=this.formBuilder.group({
      email:[''],
      first_name:[''],
      last_name:[''],
      avatar:['']
    });
    this.getProductList();
  }
  getProductList()
  {
    this.ProductList=this.productService.getProductList();
  }

  //Insert Method
  PostProduct(product:Products)
  {
    const apis=this.productForm.value;
    this.productService.postProductData(apis).subscribe(()=>
    {
      this.message='Data Saved Successfully';
      this.getProductList();
    });
  }

  //Display the data under the textboxes which you want to edit
  ProductDetailsToEdit(id:string)
  {
    this.productService.getProductDetailsById(id).subscribe(productResult=>{
      this.productId=productResult.id;
      //display the searched records under the text controls of the form
      this.productForm.controls['email'].setValue(productResult.email);
      this.productForm.controls['first_name'].setValue(productResult.first_name);
      this.productForm.controls['last_name'].setValue(productResult.last_name);
      this.productForm.controls['avatar'].setValue(productResult.avatar);
    });
  }

  UpdateProduct(product:Products)
  {
    product.id=this.productId;
    const apis=this.productForm.value;
    this.productService.updateProduct(apis).subscribe(()=>
    {
      this.message='Data Updated Successfully';
      this.getProductList();
    });
  }

  DeleteProduct(id:string)
  {
    if(confirm('Do you want to Delete this Product!!'))
    {
      this.productService.deleteProductById(id).subscribe(()=>{
        this.getProductList();
      });
    }
  }

  
  Reset()
  {
    this.productForm.reset();
  }

}


