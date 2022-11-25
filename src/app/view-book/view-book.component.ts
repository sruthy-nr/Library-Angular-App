import { Component } from '@angular/core';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  books:any=[
    {
      "title":"THIS TENDER LAND",
      "image":"https://b9r8e6p9.stackpathcdn.com/app/uploads/2021/03/This-Tender-Land_SS.jpg",
      "author":"WILLIAM KENT KRUEGER",
      "price":"500/-"
    },
    {
      "title":"THE GREATEST NOVELS",
      "image":"https://m.media-amazon.com/images/I/814Ynk2xy8S.jpg",
      "author":"MARK TWAIN",
      "price":"600/-"
    },
    {
      "title":"HARRY POTTER",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kKehQ504Q16ciQXKybxgjvgwJCM__vVzjZ8NLULnadwnha63BuPv6-Go3ew54G5fsws&usqp=CAU",
      "author":"J K ROWLING",
      "price":"1000/-"
    },
    {
      "title":"DAYS WITHOUT END",
      "image":"https://images-na.ssl-images-amazon.com/images/I/51ORemi6ZzL.jpg",
      "author":"SEBASTIAN BARRY",
      "price":"450/-"
    },
    {
      "title":"BRIDGERTON",
      "image":"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1619103580-510GRvgpNRL._SL500_.jpg",
      "author":"JULIA QUINN",
      "price":"370/-"
    },
    {
      "title":"IT ENDS WITH US",
      "image":"https://qph.cf2.quoracdn.net/main-qimg-4e8c02f213d9ca0c8706b92ae078d8d1-pjlq",
      "author":"COLLEEN HOOVER",
      "price":"520/-"
    },
    {
      "title":"THE DARK ROAD",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSwXEn2dIXz__kKTZ13QNvdJANAYhJ5xv5g&usqp=CAU",
      "author":"MA JIAN",
      "price":"340/-"
    },
    {
      "title":"THE OVER STORY",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyohFdxSVj56D2JSV5iXH1y7-0jKFB-15Lh7DZPQSG4huxqilUoVlApXrg00Bqz73Yhc&usqp=CAU",
      "author":"RICHARD POWERS",
      "price":"410/-"
    }
  ]

}
