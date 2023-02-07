
import App from './App.vue'
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import "vue-easytable/libs/theme-default/index.css"; 
import VueEasytable from "vue-easytable"; 

Vue.use(VueEasytable);

Vue.use(require('vue-cookies'))

import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import ClientInformation from './components/ClientInformation.vue';
import BusinessInformation from './components/BusinessInformation.vue';
import ShippingAddress from './components/ShippingAddress.vue';
import ShippingAddress2 from './components/ShippingAddress2.vue';
import SchoolAddress from './components/SchoolAddress.vue';

import Admin from './components/Admin.vue';
import User from './components/User.vue';
import UserPage from './components/UserPage.vue';
import StudioPage from './components/StudioPage.vue';
import Gallery from './components/Gallery.vue';
import GalleryViewOrder from './components/GalleryViewOrder.vue';
import Prints from './components/Prints.vue';
import PrintsGallery from './components/PrintsGallery.vue';


import ThankYou from './components/Checkouts/ThankYou.vue'
import BillingDetails from './components/Checkouts/BillingDetails.vue'
import ShipToStudio from './components/Checkouts/ShipToStudio.vue'
import OrderDetails from './components/Checkouts/OrderDetails.vue'
import PaymentDetails from './components/Checkouts/PaymentDetails.vue'
import PaymentDetails2 from './components/Checkouts/PaymentDetails2.vue'
import Checkout from './components/Checkouts/Checkout.vue'
import CheckoutLocation from './components/Checkouts/CheckoutLocation.vue'
import CheckoutLocation2 from './components/Checkouts/CheckoutLocation2.vue'

import Album from './components/Album/Album.vue'
import AlbumMain from './components/Album/AlbumMain.vue'



import userInfo from './components/reusable/UserInfo.js'
import Pintura from './components/Pintura.vue'

import Draggable from './components/reusable/Draggable.vue'



import infiniteScroll from "vue-infinite-scroll";

Vue.use(infiniteScroll);
import { library } from '@fortawesome/fontawesome-svg-core'

import { 
   faInfoCircle, faCamera, faAngleDown, faAngleRight, faUser, faLock, faEdit, faSearch, faSort, faCog, faShareAlt,faPencil,
   faShoppingCart, faTrash, faArrows, faEllipsisV, faPlus, faEye, faEyeSlash, faHeart,faArrowDown, faCopy, faCrop, faUserEdit
  } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser, faLock, faEdit, faSearch, faSort, faAngleDown,faAngleRight, faCog, faInfoCircle, faCamera, faShareAlt, faPencil, 
  faShoppingCart, faTrash, faArrows, faEllipsisV, faPlus, faEye, faEyeSlash, faHeart, faArrowDown, faCopy, faCrop,faUserEdit
  )
Vue.component('font-awesome-icon', FontAwesomeIcon);

import '../node_modules/nprogress/nprogress.css';
import BootstrapVue from "bootstrap-vue";
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueLoadmore from 'vuejs-loadmore';

Vue.use(VueLoadmore);

Vue.config.productionTip = false
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
localize("en", en);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.use(BootstrapVue);
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueSweetalert2, options)
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
const routes = [
  {
    name: 'Login',
    path: '/',
    component: Login,
 
  },
   {
    name: 'SignUp',
    path: '/SignUp',
    component: SignUp
  }, {
    name: 'ClientInformation',
    path: '/ClientInformation',
    component: ClientInformation
  },{
    name: 'BusinessInformation',
    path: '/BusinessInformation',
    component: BusinessInformation
  }, {
    name: 'ShippingAddress',
    path: '/ShippingAddress',
    component: ShippingAddress
  }, {
    name: 'ShippingAddress2',
    path: '/ShippingAddress2',
    component: ShippingAddress2
  },{
    name: 'SchoolAddress',
    path: '/SchoolAddress',
    component: SchoolAddress
  },{
    name: 'Admin',
    path: '/Admin',
    component: Admin,
    meta: {
      auth: true
  }
  }, {
    name: 'User',
    path: '/User',
    component: User
  }, {
    name: 'UserPage',
    path: '/UserPage',
    component: UserPage
  }, {
    name: 'StudioPage',
    path: '/StudioPage',
    component: StudioPage
  }, {
    name: 'ThankYou',
    path: '/ThankYou',
    component: ThankYou
  },{
    name:'BillingDetails',
    path: '/BillingDetails',
    component: BillingDetails
  },{
    name:'ShipToStudio',
    path: '/ShipToStudio',
    component: ShipToStudio
  },{
    name:'OrderDetails',
    path: '/OrderDetails',
    component: OrderDetails
  },{
    name:'PaymentDetails',
    path: '/PaymentDetails',
    component: PaymentDetails
  },{
    name:'PaymentDetails2',
    path: '/PaymentDetails2',
    component: PaymentDetails2
  },{
    name:'Checkout',
    path: '/Checkout',
    component: Checkout
  },{
    name:'CheckoutLocation',
    path: '/CheckoutLocation',
    component: CheckoutLocation
  },{
    name:'CheckoutLocation2',
    path: '/CheckoutLocation2',
    component: CheckoutLocation2
  },{
    name:'Gallery',
    path: '/Gallery',
    component: Gallery
  },{
    name:'GalleryViewOrder',
    path: '/GalleryViewOrder',
    component: GalleryViewOrder
  },{
    name:'Prints',
    path: '/Prints',
    component: Prints
  },{
    name:'PrintsGallery',
    path: '/PrintsGallery',
    component: PrintsGallery
  },{
    name:'userInfo',
    path:'/userInfo',
    component: userInfo
  },{
    name: 'Pintura',
    path:'/Pintura',
    component: Pintura
  },
  {
    name:'Draggable',
    path:'/Draggable',
    component: Draggable
  },
  {
    name:'Album',
    path:'/Album',
    component: Album
  },
  {
    name:'AlbumMain',
    path:'/AlbumMain',
    component: AlbumMain
  }
];

const router = new VueRouter({mode: 'history', routes});

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
