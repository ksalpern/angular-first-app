import { Component, OnInit } from '@angular/core'
import { ModalService } from 'src/app/services/modal.service'
import { ProductsService } from 'src/app/services/products.services'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = 'angular app'
  // products: IProduct[] = []
  // products$: Observable<IProduct[]>
  loading = false
  term = ''

  constructor (
    public productsService: ProductsService,
    public modalService: ModalService
  ) {}

  ngOnInit (): void {
    this.loading = true
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)))
    this.productsService.getAll().subscribe(() => {
      // this.products = products
      this.loading = false
    })
  }
}
