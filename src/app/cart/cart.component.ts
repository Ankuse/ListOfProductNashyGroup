import {Component, Input, OnInit} from '@angular/core';
import {PictureListService} from '../services/picture-list.service';
import {environment} from '../../environments/environment';
// import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() item;

  constructor(
      private pictureListServices: PictureListService
  ) { }

  ngOnInit() {
    this.pictureListServices.getPictureById(this.item.PREVIEW_PICTURE).subscribe((response) => {
      console.log(response);
      if (response.result !== false) {
        this.item.src = environment.remoteSiteNashy + response.result.src;
        this.item.detail = environment.remoteSiteNashy + this.item.DETAIL_PAGE_URL;
      } else {
        this.item.src = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
        this.item.detail = environment.remoteSiteNashy + this.item.DETAIL_PAGE_URL;
      }

    });
    // console.log(this.item);
  }

  // public getPicture(idPicture) {
    // console.log(idPicture);
  // }


}
