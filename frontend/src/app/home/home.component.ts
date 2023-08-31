import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productcategories: any;
  products: any;
  categoryName: any;
  ReadMore: boolean;
  visible: any;
  index: any;
  result: any;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllProductsDetails();
  }
  getAllProductsDetails() {
    this.userService.getproducts().subscribe((res: any) => {
      this.result=res.products;
      const data= res.products.map(el=>{return el.category});
      this.productcategories = Array.from(new Set(data));
    });
  }

  onChange(event){
   this.categoryName= event;
    this.products =  this.result.filter(product =>product.category==event)
  }


  onclick(i,categoryName)
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible;
    this.index=i;
    this.onChange(categoryName);
  }
}

