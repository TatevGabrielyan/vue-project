<template>
   <div>
      <Navbar2 class="mb-3"/>
      <div class="row">
         <div class="col-lg-3 col-md-4 ">
            <div>
               <b-button id="button-2" variant="" class="tooltip-btn p-0 d-lg-block d-none" >
                  <div class="logo user-logo">
                     <img src="../assets/icons/Group 1.png" alt="logo" class="">
                  </div>
               </b-button>
               <b-button v-b-toggle.sidebar-variant class="open-sidebar-txt text-start" @click="sidebarCollapse()" id="open-sidebar">
                  <img src="../assets/icons/Path_118.svg" alt="open" id="sidebarIcon" class="sidebar-icon">
                </b-button>
               <b-sidebar visible  id="sidebar-variant" title="" bg-variant="" text-variant="dark" shadow>
                  <div class="px-3 py-5">
                     <div class="row">
                        <div class="col-4 p-0">
                           <span class="user-img-sidebar">
                           <img src="../assets/home-offers.png" alt="user-image" class="mx-3">
                           </span>
                        </div>
                        <div class="col-8 p-0">
                           <b-dropdown id="dropdown-1" text="NAME NAME" class="m-md-2 user-dropdown">
                              <b-dropdown-item class="active-dropdown">My Profile</b-dropdown-item>
                              <b-dropdown-item>My Balance</b-dropdown-item>
                              <b-dropdown-item>Inbox</b-dropdown-item>
                              <hr>
                              <b-dropdown-item>Account Settings</b-dropdown-item>
                              <hr>
                              <b-dropdown-item>Logout</b-dropdown-item>
                           </b-dropdown>
                        </div>
                     </div>
                     <div class="settings mt-5">
                        <div class="pl-3">
                           <img src="../assets/icons/settings.png" alt="settings">
                           <span class="settings-text text-uppercase">Settings</span>
                        </div>
                        <hr>
                        <b-list-group class="settings-list" >
                           <b-list-group-item class="setting-item text-uppercase" @click='credit = !credit'>
                              Payments and credit 
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           
                           <b-list-group class="settings-list settings-detail-list" v-show='!credit'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 6">Credit Cards</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 7">Open Account Credit Cards</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 8">Open Account A / R</b-list-group-item>
                           </b-list-group>
                            <b-list-group-item class="setting-item text-uppercase" @click='reports = !reports'>
                              Reports
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                            <b-list-group class="settings-list settings-detail-list" v-show='!reports'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 9">Email login</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 18">Order</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='notifications = !notifications'>
                              Notifications
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!notifications'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 20">Email Template</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 0">Album</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='permissions = !permissions'>
                              Permissions
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!permissions'>
                              <b-list-group-item class="setting-detail"  @click="tabIndex = 1">Image</b-list-group-item>
                           </b-list-group>
                            <b-list-group-item class="setting-item text-uppercase" @click='packages = !packages'>
                              Packages
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!packages'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 17">Add</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 19">List</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='cards = !cards'>
                              Cards
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!cards'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 10">Add</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 11">List</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='gallery = !gallery'>
                              Gallery
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!gallery'>
                              <b-list-group-item class="setting-detail"  @click="tabIndex = 16">Watermark</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='other = !other'>
                              Other
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!other'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 2">Default Price List</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 23">Login Page</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 3">Tax Id</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 21">Guest Login Page</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 4">Images Downloaded Price</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 5">Shipping</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 12">Coupons</b-list-group-item>
                           </b-list-group>
                        </b-list-group>
                        <div class="pl-3">
                           <img src="../assets/icons/info.png" alt="info">
                           <span class="settings-text text-uppercase">Studio Information</span>
                        </div>
                        <hr>
                        <b-list-group class="settings-list">
                           <b-list-group-item class="setting-item text-uppercase" @click='contacts = !contacts'>
                              Contacts
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!contacts'>
                              <b-list-group-item class="setting-detail" v-b-modal.modal-addContactStudio>Add Contact</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 14">Contacts</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='photographer = !photographer'>
                              Photographers
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!photographer'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 22" v-b-modal.modal-addPhotographer>Add Photographer</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 15">Photographers List</b-list-group-item>
                           </b-list-group>
                        </b-list-group>
                     </div>
                  </div>
               </b-sidebar>
            </div>
         </div>
         <div class="col-lg-9 col-md-8 p-0" id="studio">
            <div class="container-fluid text-end pr-lg-5 pr-md-5  pr-3">
               <div class="input-group mb-3 justify-content-end" > 
                  <span class="input-icon" id="basic-addon1">
                  <img src="../assets/icons/basket.png" alt="">
                  </span>
                  <span class="divider"></span>
                  <input type="submit" class="your-items text-center" aria-describedby="basic-addon1" value="Your items">
               </div>
            </div>
         </div>
      </div>
      <div>
         <b-tabs id="myTabs" v-model="tabIndex" nav-wrapper-class="d-none" class="text-center">
            <b-tab>
               <NotificationAlbum/>
            </b-tab>
             <b-tab>
               <PermissionsImage/>
            </b-tab>
              <b-tab>
               <DefaultPriceList/>
            </b-tab>
              <b-tab>
               <TaxID/>
            </b-tab>
            <b-tab>
               <ImagesDownloadPrice/>
            </b-tab>
            <b-tab>
               <ShippingPrice/>
            </b-tab>
            <b-tab>
               <CreditCards/>
            </b-tab>
             <b-tab>
               <OpenAccountCreditCards/>
            </b-tab>
            <b-tab>
               <OpenAccount/>
            </b-tab>
             <b-tab>
               <EmailLogin/>
            </b-tab>
            <b-tab>
               <AddCards/>
            </b-tab>
             <b-tab>
               <ListCards/>
            </b-tab>
             <b-tab>
               <Coupons/>
            </b-tab>
             <b-tab>
               <AddContact/>
            </b-tab>
             <b-tab>
               <AddContactsList/>
            </b-tab>
             <b-tab>
               <PhotographerList/>
            </b-tab>
              <b-tab>
               <Watermark/>
            </b-tab>
            <b-tab>
               <AddPackage/>
            </b-tab>
            <b-tab>
               <OrderReports/>
            </b-tab>
            <b-tab>
               <ListPackages/>
            </b-tab>
            <b-tab>
               <EmailTemplate/>
            </b-tab>
            <b-tab>
               <GuestLoginPage/>
            </b-tab>
            <b-tab>
               <AddPhotographer/>
            </b-tab>
            <b-tab>
               <LoginPage/>
            </b-tab>
         </b-tabs>
      </div>
   </div>
</template>

<script>
import Navbar2 from "./reusable/Navbar2.vue";
import NotificationAlbum from './reusable/Studio/NotificationAlbum.vue'
import PermissionsImage from './reusable/Studio/PermissionsImage.vue'
import DefaultPriceList from "./reusable/Studio/DefaultPriceList.vue";
import TaxID from "./reusable/Studio/TaxID.vue";
import ImagesDownloadPrice from "./reusable/Studio/ImagesDownloadPrice.vue";
import ShippingPrice from "./reusable/Studio/ShippingPrice.vue";
import CreditCards from "./reusable/Studio/CreditCards.vue";
import OpenAccountCreditCards from "./reusable/Studio/OpenAccountCreditCards.vue";
import OpenAccount from "./reusable/Studio/OpenAccount.vue";
import EmailLogin from "./reusable/Studio/EmailLogin.vue";
import AddCards from "./reusable/Studio/AddCards.vue";
import ListCards from "./reusable/Studio/ListCards.vue";
import Coupons from "./reusable/Studio/Coupons.vue";
import AddContact from "./reusable/Studio/AddContact.vue";
import AddContactsList from "./reusable/Studio/AddContactsList.vue";
import PhotographerList from "./reusable/Studio/PhotographerList.vue";
import Watermark from "./reusable/Studio/Watermark.vue";
import AddPackage from "./reusable/Studio/AddPackage.vue";
import OrderReports from "./reusable/Studio/OrderReports.vue";
import ListPackages from "./reusable/Studio/ListPackages.vue";
import EmailTemplate from "./reusable/Studio/EmailTemplate.vue";
import GuestLoginPage from "./reusable/Studio/GuestLoginPage.vue";
import AddPhotographer from "./reusable/Studio/AddPhotographer.vue";
import LoginPage from "./reusable/Studio/LoginPage.vue";

export default {
  components:{
    Navbar2,
    NotificationAlbum,
    PermissionsImage,
    DefaultPriceList,
    TaxID,
    ImagesDownloadPrice,
    ShippingPrice,
    CreditCards,
    OpenAccountCreditCards,
    OpenAccount,
    EmailLogin,
    AddCards,
    ListCards,
    Coupons,
    AddContact,
    AddContactsList,
    PhotographerList,
    Watermark,
    AddPackage,
    OrderReports,
    ListPackages,
    EmailTemplate,
    GuestLoginPage,
    AddPhotographer,
    LoginPage
},
 data() {
      return {
     credit: true,
     reports: true,
     notifications: true,
     permissions: true,
     packages: true,
     cards: true,
     gallery: true,
     other:true,
     contacts: true,
     photographer: true,
     tabIndex: 0
      }
    },
 
    methods: {
    handleScroll (event) {
     let sidebar = document.getElementById('sidebar-padding');
     if(window.scrollY == 0){
         sidebar.style.padding= '5.5rem';
     }
     else{
        sidebar.style.padding = '0px';
     }
    },
    sidebarCollapse(){
      let sidebar = document.getElementById('sidebar-variant');
      let sidebarIcon = document.getElementById('sidebarIcon');
      let openSidebar = document.getElementById('open-sidebar');
      let notificationAlbum = document.getElementById('notificationAlbum');
      let creditCards = document.getElementById('creditCards');
      let openAccCreditCardsTop= document.getElementById('openAccCreditCardsTop');
      let openAccCreditCards= document.getElementById('openAccCreditCards');
      let openAcc = document.getElementById('openAcc');
      let emailLogin = document.getElementById('emailLogin');
      let studioOrdersTop = document.getElementById("studioOrdersTop");
      let studioOrders = document.getElementById('studioOrders');
      let emailTempTop = document.getElementById('emailTempTop');
      let emailTemp = document.getElementById('emailTemp');
      let permissionsImage = document.getElementById('permissionsImage');
      let addPackageTop = document.getElementById('addPackageTop');
      let addPackage = document.getElementById('addPackage');
      let listPackageTop = document.getElementById('listPackageTop');
      let listPackage = document.getElementById('listPackage');
      let addCardsTop = document.getElementById('addCardsTop');
      let addCards = document.getElementById('addCards');
      let listCards =  document.getElementById('listCards');
      let studioWatermark = document.getElementById('studioWatermark');
      let defaultPriceList = document.getElementById('defaultPriceList');
      let loginTop = document.getElementById('loginTop');
      let login = document.getElementById('login');
      let taxId = document.getElementById('taxId');
      let guestLoginTop = document.getElementById('guestLoginTop');
      let guestLogin = document.getElementById('guestLogin');
      let imagesDownloadPrice = document.getElementById('imagesDownloadPrice');
      let shippingPrice = document.getElementById('shippingPrice');
      let studioCoupons = document.getElementById('studioCoupons');
      let studioContactList = document.getElementById('studioContactList');
      let studioAddPhotographer = document.getElementById('studioAddPhotographer');
      if(sidebar.style.display=='none'){
               sidebarIcon.src= require('../assets/icons/Path_118.svg');
               openSidebar.style.left='19.5rem';
               notificationAlbum.classList.add('col-lg-5');
               notificationAlbum.classList.remove('col-lg-12');
               creditCards.classList.add('col-lg-5');
               creditCards.classList.remove('col-lg-12');
               openAccCreditCardsTop.classList.add('col-lg-5');
               openAccCreditCardsTop.classList.remove('col-lg-12');
               openAccCreditCards.classList.add('col-lg-8');
               openAccCreditCards.classList.remove('col-lg-12');
               openAcc.classList.add('col-lg-9');
               openAcc.classList.remove('col-lg-12');
               emailLogin.classList.add('col-lg-9');
               emailLogin.classList.remove('col-lg-12');
               studioOrdersTop.classList.add('col-lg-5');
               studioOrdersTop.classList.remove('col-lg-12');
               studioOrders.classList.add('col-lg-9');
               studioOrdersTop.classList.remove('col-lg-12');
               emailTempTop.classList.add('col-lg-5');
               emailTempTop.classList.remove('col-lg-12');
               emailTemp.classList.add('col-lg-9');
               emailTemp.classList.remove('col-lg-12');
               permissionsImage.classList.add('col-lg-5');
               permissionsImage.classList.remove('col-lg-12');
               addPackageTop.classList.add('col-lg-5');
               addPackageTop.classList.remove('col-lg-12');
               addPackage.classList.add('col-lg-9');
               addPackage.classList.remove('col-lg-12');
               listPackageTop.classList.add('col-lg-5');
               listPackageTop.classList.remove('col-lg-12');
               listPackage.classList.add('col-lg-9');
               listPackage.classList.remove('col-lg-12');
               addCardsTop.classList.add('col-lg-5');
               addCardsTop.classList.remove('col-lg-12');
               addCards.classList.add('col-lg-9');
               addCards.classList.remove('col-lg-12');
               listCards.classList.add('col-lg-9');
               listCards.classList.remove('col-lg-12');
               studioWatermark.classList.add('col-xl-8');
               studioWatermark.classList.remove('col-xl-12');
               defaultPriceList.classList.add('col-lg-5');
               defaultPriceList.classList.remove('col-lg-12');
               loginTop.classList.add('col-lg-5');
               loginTop.classList.remove('col-lg-12');
               login.classList.add('col-lg-9');
               login.classList.remove('col-lg-12');
               taxId.classList.add('col-lg-5');
               taxId.classList.remove('col-lg-12');
               guestLoginTop.classList.add('col-lg-5');
               guestLoginTop.classList.remove('col-lg-12');
               guestLogin.classList.add('col-lg-9');
               guestLogin.classList.remove('col-lg-12');
               imagesDownloadPrice.classList.add('col-lg-5');
               imagesDownloadPrice.classList.remove('col-lg-12');
               shippingPrice.classList.add('col-lg-5');
               shippingPrice.classList.remove('col-lg-12');
               studioCoupons.classList.add('col-lg-9');
               studioCoupons.classList.remove('col-lg-12');
               studioContactList.classList.add('col-lg-9');
               studioContactList.classList.remove('col-lg-12');
               studioAddPhotographer.classList.add('col-lg-9');
               studioAddPhotographer.classList.remove('col-lg-12');
      }else{
               openSidebar.style.left='0.5rem';
               sidebarIcon.src= require('../assets/icons/Path_119.svg');
               notificationAlbum.classList.remove('col-lg-5');
               notificationAlbum.classList.add('col-lg-12');
               creditCards.classList.remove('col-lg-5');
               creditCards.classList.add('col-lg-12');
               openAccCreditCardsTop.classList.remove('col-lg-5');
               openAccCreditCardsTop.classList.add('col-lg-12');
               openAccCreditCards.classList.remove('col-lg-8');
               openAccCreditCards.classList.add('col-lg-12');
               openAcc.classList.remove('col-lg-9');
               openAcc.classList.add('col-lg-12');
               emailLogin.classList.remove('col-lg-9');
               emailLogin.classList.add('col-lg-12');
               studioOrdersTop.classList.remove('col-lg-5');
               studioOrdersTop.classList.add('col-lg-12');
               studioOrders.classList.remove('col-lg-9');
               studioOrdersTop.classList.add('col-lg-12');
               emailTempTop.classList.remove('col-lg-5');
               emailTempTop.classList.add('col-lg-12');
               emailTemp.classList.remove('col-lg-9');
               emailTemp.classList.add('col-lg-12');
               permissionsImage.classList.remove('col-lg-5');
               permissionsImage.classList.add('col-lg-12');
               addPackageTop.classList.remove('col-lg-5');
               addPackageTop.classList.add('col-lg-12');
               addPackage.classList.remove('col-lg-9');
               addPackage.classList.add('col-lg-12');
               listPackageTop.classList.remove('col-lg-5');
               listPackageTop.classList.add('col-lg-12');
               listPackage.classList.remove('col-lg-9');
               listPackage.classList.add('col-lg-12');
               addCardsTop.classList.remove('col-lg-5');
               addCardsTop.classList.add('col-lg-12');
               addCards.classList.remove('col-lg-9');
               addCards.classList.add('col-lg-12');
               listCards.classList.remove('col-lg-9');
               listCards.classList.add('col-lg-12');
               studioWatermark.classList.remove('col-xl-8');
               studioWatermark.classList.add('col-xl-12');
               defaultPriceList.classList.remove('col-lg-5');
               defaultPriceList.classList.add('col-lg-12');
               loginTop.classList.remove('col-lg-5');
               loginTop.classList.add('col-lg-12');
               login.classList.remove('col-lg-9');
               login.classList.add('col-lg-12');
               taxId.classList.remove('col-lg-5');
               taxId.classList.add('col-lg-12');
               guestLoginTop.classList.remove('col-lg-5');
               guestLoginTop.classList.add('col-lg-12');
               guestLogin.classList.remove('col-lg-9');
               guestLogin.classList.add('col-lg-12');
               imagesDownloadPrice.classList.remove('col-lg-5');
               imagesDownloadPrice.classList.add('col-lg-12');
               shippingPrice.classList.remove('col-lg-5');
               shippingPrice.classList.add('col-lg-12');
               studioCoupons.classList.remove('col-lg-9');
               studioCoupons.classList.add('col-lg-12');
               studioContactList.classList.remove('col-lg-9');
               studioContactList.classList.add('col-lg-12');
               studioAddPhotographer.classList.remove('col-lg-9');
               studioAddPhotographer.classList.add('col-lg-12');
      }
    }
  }
};
</script>