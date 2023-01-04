import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import { products as data } from './data/products'
import { ProductsService } from './services/products.services'
import { Observable, tap } from 'rxjs'
import { ModalService } from './services/modal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular app'
  // products: IProduct[] = []
  products$: Observable<IProduct[]>
  loading = false
  term = ''

  constructor (
    private productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit (): void {
    this.loading = true
    this.products$ = this.productsService
      .getAll()
      .pipe(tap(() => (this.loading = false)))
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }
}
