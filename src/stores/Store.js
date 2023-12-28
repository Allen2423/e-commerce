import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        isLoggedIn: false,
        token: '',
        selectedProduct: 0,
        currentCategory:'',
        loggedInUser:null,
        orders: [],
        cart:[],
        registerUser: [
          {  fname :"Allen", lname:"Mosha", email: "allenmosha@gmail.com", phoneNo: 765453755, password: "12345678",}
        ],
        products01:[
            {id:1, name:"Italian sofa", price: 20000.00, quantity:4, img: "Sofa.jpg", description:"This is a marvelouse Italian Sofa Good for block house", category: "home", brand:"Supreme", stock:50, size: '', color:''},
            {id:2, name:"Men perfume", price: 40000.00, quantity:1, img: "perfume.jpg", description:"Long last Men perfumes", category: "perfume", brand:"CR7", stock:90, size: '', color:''},
            {id:3, name:"Modern Rubber shoes", price: 10000.00, quantity:5, img: "rubber2.jpg", description:"Modern Sports and workout rubber ", category: "shoes", brand:"Nike", stock:130, size: '', color:''},
            {id:4, name:"black white rubber", price: 34000.00, quantity:1, img: "rubber.jpg", description:"White and black rubber for fussion", category: "shoes", brand:"Addidas", stock:96, size: '', color:''},
            {id:5, name:"General perfume", price: 12000.00, quantity:6, img: "perfume2.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "perfume", brand:"CR7", stock:14, size: '', color:''},
            {id:6, name:"Portable bag", price: 89000.00, quantity:10, img: "PortableBag.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "bag", brand:"Nike", stock:42, size: '', color:''},
            {id:7, name:"Addidas Rubber", price: 60000.00, quantity:20, img: "shoes.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "shoes", brand:"Addidass", stock:47, size: '', color:''},
            {id:8, name:"Wireless PC Keyboard", price: 24000.00, quantity:12, img: "Keyboard.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "electronic", brand:"AmoElectronics", stock:40, size: '', color:''},
            {id:9, name:"Rounded Table", price: 13000.00, quantity:16, img: "RoundTable.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "home", brand:"Nike", stock:70, size: '', color:''},
            {id:10, name:"Bed matress", price: 19000.00, quantity:5, img: "BedMatress.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "home", brand:"Clothee", stock:10, size: '', color:''},
            {id:11, name:"Pc Bag", price: 53000.00, quantity:9, img: "pcBag.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "bag", brand:"Amo Bags", stock:10, size: '', color:''},
            {id:12, name:"Body Spray", price: 67000.00, quantity:2, img: "perfume3.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "perfume", brand:"Amo Aromour", stock:20, size: '', color:''},
            {id:13, name:"Female perfume", price: 86000.00, quantity:8, img: "perfume2.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "perfume", brand:"Amo Aromour", stock:140, size: '', color:''},
            {id:14, name:"Jewlleries", price: 20000.00, quantity:11, img: "Collection.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "jewlleries", brand:"Quartz", stock:25, size: '', color:''},
            {id:15, name:"official shoes", price: 10000.00, quantity:17, img: "OfficeShoes2.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "shoes", brand:"Addidas", stock:67, size: '', color:''},
            {id:16, name:"water Botle", price: 2000.00, quantity:23, img: "waterBotle.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "botle", brand:"Amo", stock:54, size: '', color:''},
            {id:17, name:"watch", price: 80200.00, quantity:1, img: "watch.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "jewlleries", brand:"Quartz", stock:40, size: '', color:''},
            {id:18, name:"Mark 11 Cannon Camera", price: 120000.00, quantity:6, img: "camera.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "electronic", brand:"Cannon", stock:15, size: '', color:''},
            {id:19, name:"Iphone X", price: 500000.00, quantity:2, img: "IphoneX.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "smartdevice", brand:"Apple", stock:91, size: '', color:''},
            {id:20, name:"Official shoes", price: 10000.00, quantity:17, img: "OfficeShoes.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "shoes", brand:"gucci", stock:22, size: '', color:''},
            {id:21, name:"Watch", price: 2000.00, quantity:23, img: "Watch.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "jewlleries", brand:"Quartz", stock:45, size: '', color:''},
            {id:22, name:"Camera", price: 8000.00, quantity:1, img: "CameraNikon.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "electronic", brand:"Nike", stock:13, size: '', color:''},
            {id:23, name:"Chair", price: 120000.00, quantity:6, img: "dhChairs.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "home", brand:"Ibra Furniture", stock:56, size: '', color:''},
            {id:24, name:"Headset", price: 550000.00, quantity:2, img: "Headset.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "electronic", brand:"Sony", stock:45, size: '', color:''},
            {id:25, name:"Slim Laptop", price: 507000.00, quantity:2, img: "pc.jpg", description:"lorem ipsum dolor sit amet, consectetur adip", category: "electronic", brand:"hp", stock:23, size: '', color:''},
        ],
      }),

      getters: {
        isLoggedInAndHasToken({ isLoggedIn, token }) {
          return isLoggedIn && token.length
        },
        
        getIsLoggedIn: (state) => state.isLoggedIn,
        getSelectedProduct: (state) => state.selectedProduct,
        getCurrentCategory: (state) => state.currentCategory,
        getCart: (state) => state.cart,
        getProducts01: (sate) => sate.products01,
        getRegisterUser:(state) => state.registerUser,
        getLoggedinUser:(state) => state.loggedInUser,
        getOrder: (state) => state.orders,
        
      },
      actions: {
        login(token, value) {
          this.isLoggedIn = value;
          this.token = token;
        },
        logout() {
          this.isLoggedIn = false;
          localStorage.removeItem('loggedInUser');
        },
        changeSelectedProduct(index, category){
            this.selectedProduct = index;
            this.currentCategory = category
        },
        cartUpdate(value) {
          this.cart.push(value);
        },
        updateOrder(value) {
          this.orders.push(value);
        },
        updateRegisterUser(value) {
          this.registerUser.push(value);
        }
      }
})
