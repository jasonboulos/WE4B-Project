import { Component, Input } from '@angular/core';
import { SpecialProduct } from 'src/classes/specialproduct';

@Component({
  selector: 'app-specialproduct',
  templateUrl: './specialproduct.component.html',
  styleUrls: ['./specialproduct.component.css']
})
export class SpecialproductComponent {
  @Input() specialproduct!:SpecialProduct
  ngOnInit(): void {
  }

}
