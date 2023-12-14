import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { STORE } from './basket.data';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  /* -------------------------------------------------------------------------- */
  /*                                   Inject                                   */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  cart: any[] = [];
  summery: number = 0;

  /* -------------------------------------------------------------------------- */
  /*                                 Life Circle                                */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                                    Misc                                    */
  /* -------------------------------------------------------------------------- */
  STORE_LIST = STORE;

  /* -------------------------------------------------------------------------- */
  /*                                  Functions                                 */
  /* -------------------------------------------------------------------------- */
  onAddBasket(item: any) {
    const indexInCart = this.cart.findIndex((i) => i.id === item.id);

    if (indexInCart !== -1) {
      // Product is already in the cart, update the quantity
      const availableAmount =
        this.STORE_LIST.find((i) => i.id === item.id)?.amount || 0;
      const currentQuantity = this.cart[indexInCart].amount;
      const quantityToAdd = Math.min(1, availableAmount, currentQuantity + 1);
      const foundItem = this.STORE_LIST.find((i) => i.id === item.id);

      if (foundItem) {
        foundItem.amount -= quantityToAdd ?? 0;
      }

      this.cart[indexInCart].amount += quantityToAdd;
      this.summery += item.price * quantityToAdd; // Update the summary with the total price of the added items
    } else {
      // Product is not in the cart, add it
      let numProduct = this.STORE_LIST.find((i) => i.id === item.id)?.buy || 0;
      const indexInStore = this.STORE_LIST.findIndex((i) => i.id === item.id);

      if (indexInStore !== -1 && this.STORE_LIST[indexInStore].amount > 0) {
        const amountToAdd =
          numProduct > 0
            ? Math.min(numProduct, this.STORE_LIST[indexInStore].amount)
            : 1;
        const selectedItem = {
          ...this.STORE_LIST[indexInStore],
          amount: amountToAdd,
        };
        this.cart.push(selectedItem);
        this.STORE_LIST[indexInStore].amount -= amountToAdd;
        this.summery += selectedItem.price * amountToAdd; // Update the summary with the total price of the added items
      }
    }
  }

  onRemoveBasket(item: any) {
    const indexInCart = this.cart.findIndex((i) => i.id === item.id);

    if (indexInCart !== -1) {
      const removedItem = this.cart.splice(indexInCart, 1)[0]; // Remove the item from the cart
      const indexInStore = this.STORE_LIST.findIndex((i) => i.id === item.id);

      if (indexInStore !== -1) {
        this.STORE_LIST[indexInStore].amount += removedItem.amount; // Add back the removed quantity to the store
      }

      this.summery -= removedItem.price * removedItem.amount; // Update the summary with the total price of the removed items
    }
  }

  onCheckout() {
    alert(this.summery + ' บาท');
  }

  clearBasket() {
    // Move items back to the store and reset the cart and summary
    this.cart.forEach((item) => {
      const indexInStore = this.STORE_LIST.findIndex((i) => i.id === item.id);
      if (indexInStore !== -1) {
        this.STORE_LIST[indexInStore].amount += item.amount;
      }
    });

    this.cart = []; // Clear the cart
    this.summery = 0; // Reset the summary
  }
}
