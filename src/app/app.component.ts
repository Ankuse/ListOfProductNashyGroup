import {Component, OnInit} from '@angular/core';
import {GoodsListService} from './services/goods-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items = [];

  constructor(
      private goodsList: GoodsListService
  ) { }

  ngOnInit() {
    this.getGoods();
  }

  private getGoods() {
    this.goodsList.getGoodsList().subscribe((response) => {
      this.items = response.result;
    });
  }
}
