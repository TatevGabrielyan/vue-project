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
               <b-sidebar visible  id="sidebar-variant" title="" bg-variant="" text-variant="dark" shadow  >
                 
                  <div class="px-3 sidebar-padding" id="sidebar-padding">
                     <div class="row pt-2">
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
                           <b-list-group-item class="setting-item text-uppercase" @click='credit = !credit'>Payments and credit
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!credit'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 7">Client Credit</b-list-group-item>
                              <b-list-group-item class="setting-detail">Guest / Student Credit</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='discount = !discount'>Discounts
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!discount'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 20">Client Discount</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 21">Guest Discount</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='notifications = !notifications'>Notifications
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!notifications'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 8">Albums</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='permissions = !permissions'>Permissions
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!permissions'>
                              <b-list-group-item class="setting-detail"  @click="tabIndex = 4">Client packages</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 6">Client cards</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 5">Client Order</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 3">Guest order</b-list-group-item>
                              <b-list-group-item class="setting-detail"  @click="tabIndex = 1">Image</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 2">Image Options</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='gallery = !gallery'>Gallery
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!gallery'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 9">Show gallery</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 10">Albums</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex =11">Cards</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 13" >Watermark</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 26">Year Book</b-list-group-item>
                              <b-list-group-item class="setting-detail">Background</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='other = !other'>Other
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!other'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 12">Default Price List</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 22">Client Code</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 14">Default Product</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 15">Guest Login Page</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 16">Images Downloaded Price</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 17">Shipping</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 18">Client Coupon</b-list-group-item>
                           </b-list-group>
                        </b-list-group>
                        <div class="pl-3 pt-3">
                           <img src="../assets/icons/info.png" alt="info">
                           <span class="settings-text text-uppercase">Client Information</span>
                        </div>
                        <hr>
                        <b-list-group class="settings-list">
                           <b-list-group-item class="setting-item text-uppercase" @click='client_info = !client_info'>Client info
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!client_info'>
                              <b-list-group-item class="setting-detail"  @click="tabIndex = 19">Change password</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='contacts = !contacts'>Contacts
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!contacts'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 23" v-b-modal.modal-addContact>Add Contact</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 24">Contacts</b-list-group-item>
                              <b-list-group-item class="setting-detail" >Guest / Student List</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 27" v-b-modal.modal-createGuest>Create Guest</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='events = !events'>Events
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!events'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 28" v-b-modal.modal-createEvent>Create Events</b-list-group-item>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 29">List</b-list-group-item>
                           </b-list-group>
                           <b-list-group-item class="setting-item text-uppercase" @click='qr = !qr'>Qr
                              <font-awesome-icon icon="angle-down" class="d-inline handle" />
                           </b-list-group-item>
                           <b-list-group class="settings-list settings-detail-list" v-show='!qr'>
                              <b-list-group-item class="setting-detail" @click="tabIndex = 30">List</b-list-group-item>
                              <b-list-group-item class="setting-detail"  @click="tabIndex = 25">Student Excel</b-list-group-item>
                           </b-list-group>
                        </b-list-group>
                     </div>
                 </div>
               </b-sidebar>
            </div>
         </div>
         <div class="col-lg-9 col-md-8 p-0">
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
      <div class="client-tabs">
      <b-tabs id="myTabs" v-model="tabIndex" nav-wrapper-class="d-none" class="text-center">
            <b-tab>
               <ClientView/>
            </b-tab>
            <b-tab>
               <PermissionsImage/>
            </b-tab>
            <b-tab>
               <ImageOptions/>
            </b-tab>
            <b-tab>
               <GuestOrder/>
            </b-tab>
            <b-tab>
               <ClientPackages/>
            </b-tab>
            <b-tab>
               <ClientOrder/>
            </b-tab>
            <b-tab>
               <ClientCards/>
            </b-tab>
            <b-tab>
               <ClientCredit/>
            </b-tab>
            <b-tab>
               <Albums/>
            </b-tab>
            <b-tab>
               <ShowGallery/>
            </b-tab>
            <b-tab>
               <GalleryAlbums/>
            </b-tab>
            <b-tab>
               <GalleryCards/>
            </b-tab>
            <b-tab>
               <PriceList/>
            </b-tab>
            <b-tab>
               <Watermark/>
            </b-tab>
            <b-tab>
               <DefaultProduct/>
            </b-tab>
            <b-tab>
               <GuestLoginPage/>
            </b-tab>
            <b-tab>
               <ImagesDownloadPrice/>
            </b-tab>
             <b-tab>
               <Shipping/>
            </b-tab>
             <b-tab>
               <ClientCoupon/>
            </b-tab>
            <b-tab>
               <ChangePass/>
            </b-tab>
              <b-tab>
               <ClientDiscount/>
            </b-tab>
             <b-tab>
               <GuestDiscount/>
            </b-tab>
            <b-tab>
               <ClientCode/>
            </b-tab>
             <b-tab>
               <AddContact/>
            </b-tab>
            <b-tab>
               <Contacts/>
            </b-tab>
             <b-tab>
               <StudentExcel/>
            </b-tab>
            <b-tab>
               <YearBook/>
            </b-tab>
            <b-tab>
               <CreateGuest/>
            </b-tab>
            <b-tab>
               <CreateEvent/>
            </b-tab>
           <b-tab>
            <EventList/>
           </b-tab>
           <b-tab>
            <QrList/>
           </b-tab>
         </b-tabs>
     </div>
   </div>
</template>

<script>


import Navbar2 from "./reusable/Navbar2.vue";
import Watermark from "./reusable/User/Watermark.vue";
import PermissionsImage from "./reusable/User/PermissionsImage.vue";
import ImageOptions from "./reusable/User/ImageOptions.vue";
import GuestOrder from "./reusable/User/GuestOrder.vue";
import ClientPackages from "./reusable/User/ClientPackages.vue";
import ClientOrder from "./reusable/User/ClientOrder.vue";
import ClientCards from "./reusable/User/ClientCards.vue";
import ClientCredit from "./reusable/User/ClientCredit.vue";
import Albums from "./reusable/User/Albums.vue"
import ShowGallery from "./reusable/User/ShowGallery.vue";
import GalleryAlbums from './reusable/User/GalleryAlbums.vue'
import GalleryCards from "./reusable/User/GalleryCards.vue";
import PriceList from "./reusable/User/PriceList.vue";
import ClientView from "./reusable/User/ClientView.vue";
import DefaultProduct from "./reusable/User/DefaultProduct.vue";
import GuestLoginPage from "./reusable/User/GuestLoginPage.vue";
import ImagesDownloadPrice from "./reusable/User/ImagesDownloadPrice.vue";
import Shipping from "./reusable/User/Shipping.vue";
import ClientCoupon from "./reusable/User/ClientCoupon.vue";
import ChangePass from "./reusable/User/ChangePass.vue";
import ClientDiscount from "./reusable/User/ClientDiscount.vue";
import GuestDiscount from "./reusable/User/GuestDiscount.vue";
import ClientCode from "./reusable/User/ClientCode.vue";
import AddContact from "./reusable/User/AddContact.vue";
import Contacts from "./reusable/User/Contacts.vue";
import StudentExcel from "./reusable/User/StudentExcel.vue";
import YearBook from "./reusable/User/YearBook.vue";
import CreateGuest from "./reusable/User/CreateGuest.vue";
import CreateEvent from "./reusable/User/CreateEvent.vue";
import EventList from "./reusable/User/EventList.vue";
import QrList from "./reusable/User/QrList.vue";


const book = {
  title: "None",
}
export default {
  components:{
    Navbar2,
    Watermark,
    PermissionsImage,
    ImageOptions,
    GuestOrder,
    ClientPackages,
    ClientOrder,
    ClientCards,
    ClientCredit,
    Albums,
    ShowGallery,
    GalleryAlbums,
    GalleryCards,
    PriceList,
    ClientView,
    DefaultProduct,
    GuestLoginPage,
    ImagesDownloadPrice,
    Shipping,
    ClientCoupon,
    ChangePass,
    ClientDiscount,
    GuestDiscount,
    ClientCode,
    AddContact,
    Contacts,
    StudentExcel,
    YearBook,
    CreateGuest,
    CreateEvent,
    EventList,
    QrList
},
 data() {
       return {
     credit: true,
     discount: true,
     notifications: true,
     permissions: true,
     gallery: true,
     other:true,
     client_info: true,
     contacts: true,
     events: true,
     qr: true,
     tabIndex: 0
      }
    },
created () {
    window.addEventListener('scroll', this.handleScroll);

  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);

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
      let clientView = document.getElementById('clientViewLg');
      let cleintCredit = document.getElementById('clientsCredit');
      let clientTop = document.getElementById('clientTop');
      let clientDiscount = document.getElementById('clientDiscount');
      let discountTop = document.getElementById('discountTop');
      let guestDiscountTop = document.getElementById('guestDiscountTop');
      let guestDiscount = document.getElementById('guestDiscount');
      let clientAlbumTop = document.getElementById('clientAlbumTop')
      let clientPackagesTop= document.getElementById('clientPackagesTop');
      let clientCardsTop = document.getElementById('clientCardsTop');
      let clientOrderTop = document.getElementById('clientOrderTop');
      let guestOrderPermissionsTop = document.getElementById('guestOrderPermissionsTop');
      let imagePermissionsTop = document.getElementById('imagePermissionsTop');
      let imageOptionsTop = document.getElementById('imageOptionsTop');
      let showGalleryTop = document.getElementById('showGalleryTop');
      let galleryAlbumsTop = document.getElementById('galleryAlbumsTop');
      let galleryAlbums = document.getElementById('galleryAlbums');
      let galleryCardsTop = document.getElementById('galleryCardsTop');
      let galleryCards = document.getElementById('galleryCards');
      let clientWatermark = document.getElementById('clientWatermark');
      let yearBook = document.getElementById('yearBook');
      let clientContacts = document.getElementById('clientContacts');
      let eventList = document.getElementById('eventList');
      let qrList = document.getElementById('qrList');
      let studentExcelTop = document.getElementById('studentExcelTop');
      let studentExcel = document.getElementById('studentExcel')

      if(sidebar.style.display=='none'){
         console.log('sidebar is open')
          sidebarIcon.src= require('../assets/icons/Path_118.svg');
               openSidebar.style.left='19.5rem';
               clientView.classList.add('col-lg-9');
               clientView.classList.remove('col-lg-12');
               clientView.classList.add('pl-0');
               clientView.classList.remove('pl-5');
               cleintCredit.classList.add('col-lg-9');
               cleintCredit.classList.remove('col-lg-12');
               clientTop.classList.add('col-lg-5');
               clientTop.classList.remove('col-lg-12');
               clientDiscount.classList.add('col-lg-9');
               clientDiscount.classList.remove('col-lg-12');
               discountTop.classList.add('col-lg-5');
               discountTop.classList.remove('col-lg-12');
               guestDiscount.classList.add('col-lg-9');
               guestDiscount.classList.remove('col-lg-12');
               guestDiscountTop.classList.add('col-lg-5');
               guestDiscountTop.classList.remove('col-lg-12');
               clientAlbumTop.classList.add('col-lg-5');
               clientAlbumTop.classList.remove('col-lg-12');
               clientPackagesTop.classList.add('col-lg-7');
               clientPackagesTop.classList.remove('col-lg-12');
               clientCardsTop.classList.add('col-lg-7');
               clientCardsTop.classList.remove('col-lg-12');
               clientOrderTop.classList.add('col-lg-4');
               clientOrderTop.classList.remove('col-lg-12');
               guestOrderPermissionsTop.classList.add('col-lg-4');
               guestOrderPermissionsTop.classList.remove('col-lg-12');
               imagePermissionsTop.classList.add('col-lg-4');
               imagePermissionsTop.classList.remove('col-lg-12');
               imageOptionsTop.classList.add('col-lg-8');
               imageOptionsTop.classList.remove('col-lg-12');
               showGalleryTop.classList.add('col-lg-9');
               showGalleryTop.classList.remove('col-lg-12');
               galleryAlbumsTop.classList.add('col-lg-5');
               galleryAlbumsTop.classList.remove('col-lg-12');
               galleryAlbums.classList.add('col-lg-9');
               galleryAlbums.classList.remove('col-lg-12');
               galleryCardsTop.classList.add('col-lg-5');
               galleryCardsTop.classList.remove('col-lg-12');
               galleryCards.classList.add('col-lg-9');
               galleryCards.classList.remove('col-lg-12');
               clientWatermark.classList.add('col-lg-5');
               clientWatermark.classList.remove('col-lg-12');
               yearBook.classList.add('col-lg-9');
               yearBook.classList.remove('col-lg-12');
               clientContacts.classList.add('col-lg-9');
               clientContacts.classList.remove('col-lg-12');
               eventList.classList.add('col-lg-9');
               eventList.classList.remove('col-lg-12');
               qrList.classList.add('col-lg-9');
               qrList.classList.remove('col-lg-12');
               studentExcelTop.classList.add('col-lg-5');
               studentExcelTop.classList.remove('col-lg-12');
               studentExcel.classList.add('col-lg-9');
               studentExcel.classList.remove('col-lg-12');


              
      }else{
         console.log('sidebar was closed');
       
               clientView.classList.remove('col-lg-9');
               clientView.classList.add('col-lg-12');
               cleintCredit.classList.remove('col-lg-9');
               cleintCredit.classList.add('col-lg-12');
               clientTop.classList.remove('col-lg-5');
               clientTop.classList.add('col-lg-12');
               discountTop.classList.remove('col-lg-5');
               discountTop.classList.add('col-lg-12');
               clientDiscount.classList.remove('col-lg-9');
               clientDiscount.classList.add('col-lg-12');
               guestDiscountTop.classList.remove('col-lg-5');
               guestDiscountTop.classList.add('col-lg-12');
               guestDiscount.classList.remove('col-lg-9');
               guestDiscount.classList.add('col-lg-12');
               clientAlbumTop.classList.remove('col-lg-5');
               clientAlbumTop.classList.add('col-lg-12');
               clientPackagesTop.classList.remove('col-lg-7');
               clientPackagesTop.classList.add('col-lg-12');
               clientCardsTop.classList.remove('col-lg-7');
               clientCardsTop.classList.add('col-lg-12');
               clientOrderTop.classList.remove('col-lg-4');
               clientOrderTop.classList.add('col-lg-12');
               guestOrderPermissionsTop.classList.add('col-lg-12');
               guestOrderPermissionsTop.classList.remove('col-lg-4');
               imagePermissionsTop.classList.add('col-lg-12');
               imagePermissionsTop.classList.remove('col-lg-4');
               showGalleryTop.classList.remove('col-lg-9');
               showGalleryTop.classList.add('col-lg-12');
               galleryAlbumsTop.classList.remove('col-lg-5');
               galleryAlbumsTop.classList.add('col-lg-12');
               galleryAlbums.classList.remove('col-lg-9');
               galleryAlbums.classList.add('col-lg-12');
               galleryCardsTop.classList.remove('col-lg-5');
               galleryCardsTop.classList.add('col-lg-12');
               galleryCards.classList.remove('col-lg-9');
               galleryCards.classList.add('col-lg-12');
               clientWatermark.classList.remove('col-lg-5');
               clientWatermark.classList.add('col-lg-12');
               imageOptionsTop.classList.remove('col-lg-8');
               imageOptionsTop.classList.add('col-lg-12');
               yearBook.classList.remove('col-lg-9');
               yearBook.classList.add('col-lg-12');
               openSidebar.style.left='0.5rem';
               sidebarIcon.src= require('../assets/icons/Path_119.svg');
               clientView.classList.remove('pl-0');
               clientView.classList.add('pl-5');
               clientContacts.classList.remove('col-lg-9');
               clientContacts.classList.add('col-lg-12');
               eventList.classList.remove('col-lg-9');
               eventList.classList.add('col-lg-12');
               qrList.classList.remove('col-lg-9');
               qrList.classList.add('col-lg-12');
               studentExcelTop.classList.remove('col-lg-5');
               studentExcelTop.classList.add('col-lg-12');
               studentExcel.classList.remove('col-lg-9');
               studentExcel.classList.add('col-lg-12');
      }
    }
  }
   
};
</script>
<style>
.b-sidebar-outer, .b-sidebar{
    background-color: white;
}
.user-img-sidebar img{
      width: 90px;
      height: 90px;
    border-radius: 10px;
    background-color: #adadad;
}
.name-sidebar{
    font-size: 18px;
    font-weight: 500;
}
.settings-text{
    font-size: 19px;
    line-height: 20px;
    color: #223d8f;
    font-weight: 600;
    padding-left: 1rem;
    top: 3px;
}
.cog{
    color: #223d8f;
}
.setting-item, .setting-detail{
    border: none!important;
}
.setting-item{
    font-size: 17px;
    line-height: 20px;
    color: #393939;
    font-weight: 400;
}
.setting-item:hover{
    font-weight: 600;
}
.setting-detail{
    font-size: 16px;
    line-height: 20px;
    color: #393939;
    font-weight: 400;
}
.setting-detail:hover{
    color: #223d8f;
}
.settings-detail-list{
    padding-left: 2rem!important;
}
.user-dropdown ul{
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
}
.dropdown-item {
    font-size: 16px;
    line-height: 20px;
    color: #adadad!important;
    font-weight: 400;
    background-color: transparent;
}
.dropdown-item:hover, .dropdown-item:focus {
    background-color: transparent!important;
    color: #393939!important;
}
.active-dropdown{
    color: #393939;

}
.custom-select option {
    font-size: 16px;
    color: #393939;
    font-weight: 400;
}
.client-tabs{
       margin-top: -5rem;
}
.open-sidebar-txt{
    position: fixed;
    z-index: 1000;
    left: 19.5rem;
    top: 5rem;
    /* z-index: 1000000; */
}
.open-sidebar-txt:active, .open-sidebar-txt:focus{
       background-color: transparent!important;
       border-color: transparent!important;
}
.b-sidebar-header{
   display: none!important;
}
#sidebar-padding, #gallery-sidebar-padding{
       padding-top: 5.5rem;
}
.sidebar-icon{
   width: 3%;
}
table.dataTable thead>tr>th.sorting:before, table.dataTable thead>tr>th.sorting:after, table.dataTable thead>tr>th.sorting_asc:before, table.dataTable thead>tr>th.sorting_asc:after, table.dataTable thead>tr>th.sorting_desc:before, table.dataTable thead>tr>th.sorting_desc:after, table.dataTable thead>tr>th.sorting_asc_disabled:before, table.dataTable thead>tr>th.sorting_asc_disabled:after, table.dataTable thead>tr>th.sorting_desc_disabled:before, table.dataTable thead>tr>th.sorting_desc_disabled:after, table.dataTable thead>tr>td.sorting:before, table.dataTable thead>tr>td.sorting:after, table.dataTable thead>tr>td.sorting_asc:before, table.dataTable thead>tr>td.sorting_asc:after, table.dataTable thead>tr>td.sorting_desc:before, table.dataTable thead>tr>td.sorting_desc:after, table.dataTable thead>tr>td.sorting_asc_disabled:before, table.dataTable thead>tr>td.sorting_asc_disabled:after, table.dataTable thead>tr>td.sorting_desc_disabled:before, table.dataTable thead>tr>td.sorting_desc_disabled:after{
   font-size: 1.5em!important;
}
.list-group-item, .vs__actions{
   cursor: pointer;
}
@media only screen and (max-width:991px){
    .b-sidebar-outer, .b-sidebar{
        /* top: 4rem!important; */
    }
}
@media only screen and (max-width:769px){
    .sidebar-icon{
        /* top: 4rem!important; */
   width: 7%;

    }
}
@media only screen and (max-width:426px){
    .sidebar-icon{
       
      /* width: 100%; */
      width: 25px;
    position: absolute;

    }
    #open-sidebar{
      left: 16.5rem;
    z-index: 1000000;
    }
}
@media only screen and (max-width:340px){
  
    #open-sidebar{
     left: 15.5rem!important;
    top: 3rem;
    }
    .b-sidebar{
      width:100%!important
    }
}
</style>