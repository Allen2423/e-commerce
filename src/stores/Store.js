import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        isLoggedIn: true,
        token: '',
        selectedProduct: 0,
        currentCategory:'',
        cart:[]
      }),
      getters: {
        isLoggedInAndHasToken({ isLoggedIn, token }) {
          return isLoggedIn && token.length
        },
        
        getIsLoggedIn: (state) => state.isLoggedIn,
        getSelectedProduct: (state) => state.selectedProduct,
        getCurrentCategory: (state) => state.currentCategory,
        getCart: (state) => state.cart
        
      },
      actions: {
        login() {
          this.isLoggedIn = true
          this.token = 'token'
        },
        logout() {
          this.isLoggedIn = false
        },
        changeSelectedProduct(index, category){
            this.selectedProduct = index;
            this.currentCategory = category
        },
        cartUpdate(value) {
          this.cart.push(value);
        }
      }
})
