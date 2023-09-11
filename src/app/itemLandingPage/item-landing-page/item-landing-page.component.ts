import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared/shared-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-item-landing-page',
  templateUrl: './item-landing-page.component.html',
  styleUrls: ['./item-landing-page.component.scss']
})
export class ItemLandingPageComponent {
  detailsArray: any = [];
  total: number = 0.000;
  price: any;
  title: any = [];
  selectedArray: any = [];
  subTotal: any = [];
  price1: number = 0;
  item: number = 0;
  discount: number = 0.000;
  vat: number = 0.000;
  item1: number = 1000;
  nill: number = 0;
  show: boolean = false;
  currentDate: any;

  constructor(private service: SharedServiceService, private http: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.service.getDetails().subscribe((res: any) => {
      this.detailsArray = res;
      console.log(this.detailsArray, 'kjdshfjadsfajdsfh');
    })
  }
  openModel() {
    this.show = true;
    // this.show =!this.show
  }
  closeModel() {
    this.show = false;
  }
  date() {
    let date = new Date();
    this.currentDate = this.datePipe.transform(date, "dd-MM-yyyy hh:mm:ss")
  }
  selected(event: any) {
    const result = Array.from(this.selectedArray.filter((m: any) => m.id === event.id));
    console.log('this is duplicated', result);
    if (result.length > 0) {
      event.quantity = event.quantity + 1
      console.log(event.quantity);
      this.item = this.item + 1;
      this.price1 = this.price1 + (parseInt(event.price));
      this.discount = Math.floor(this.price1 / this.item1 * 100);
      this.vat = Math.floor(this.price1 / this.item1 * 100);
      this.total = this.price1 - (this.discount + this.vat);
    }
    else {
      this.selectedArray.push(event);
      this.item = this.item + parseInt(event.quantity)
      this.price1 = this.price1 + (parseInt(event.price));
      this.discount = Math.floor(this.price1 / this.item1 * 100);
      this.vat = Math.floor(this.price1 / this.item1 * 100);
      this.total = this.price1 - (this.discount + this.vat);
    }

  }
  delete(i: any) {
    let deleted = this.selectedArray.splice(i, 1);
    const obj = deleted.pop();
    this.item = this.item - parseInt(obj.quantity);
    this.discount = this.discount - (parseInt(obj.quantity) * (obj.price / 100) * 10);
    this.vat = this.vat - (parseInt(obj.quantity) * (obj.price / 100) * 10);
    this.price1 = this.price1 - (parseInt(obj.price) * parseInt(obj.quantity));
    this.total = this.price1 - ((this.price1 / 100) * 20);
    console.log('total', this.total);
  }
  plus(item: any) {
    this.item = this.item + 1;
    this.price = parseInt(item.price) * parseInt(item.quantity);
    console.log(this.price, 'this is pricefhjdksfkjasdfkaj');
    this.price1 = this.price1 + (parseInt(item.price));
    console.log('this is price 1', this.price1);
    this.discount = Math.floor(this.price1 / this.item1 * 100);
    console.log('persantage', this.discount);
    this.discount = Math.floor(this.price1 / this.item1 * 100);
    this.vat = Math.floor(this.price1 / this.item1 * 100);
    // console.log('vat',this.vat);
    this.total = this.price1 - (this.discount + this.vat);
  }
  mines(item: any) {
    this.item = this.item - 1;
    this.price = parseInt(item.price) * parseInt(item.quantity);
    this.price1 = this.price1 - parseInt(item.price);
    console.log('this is price 1', this.price1);
    this.discount = Math.floor(this.price1 / this.item1 * 100);
    console.log('persantage', this.discount);
    this.discount = Math.floor(this.price1 / this.item1 * 100);
    this.vat = Math.floor(this.price1 / this.item1 * 100);
    this.total = this.price1 - (this.discount + this.vat);
  }
  removeAll() {
    this.selectedArray = [];
    // this.selectedProduct = [];
    this.price1 = this.nill;
    this.discount = this.nill;
    this.vat = this.nill;
    this.item = this.nill;
    this.total = this.nill;
  }
}
