import {Component, Input, OnInit, AfterContentChecked} from '@angular/core';
import {PictureListService} from '../services/picture-list.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterContentChecked {

  @Input() items;

  constructor(
      private pictureListServices: PictureListService
  ) { }

  ngOnInit() {

  }
  ngAfterContentChecked () {
    console.log(this.items);
  }

  setItemSrc (src) {
    if (src) {
      const srcTrue = environment.remoteSiteNashy + src;
      return srcTrue;
    }
    if (src === undefined || src === 'null' ) {
      const srcFalse = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
      return srcFalse;
    }
  }
}
