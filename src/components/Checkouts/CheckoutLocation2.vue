<template>
   <div id="shipToStudio">
      <Navbar2 class="mb-3"/>
      <div class="position-absolute">
         <b-button id="button-2" variant="" class="tooltip-btn p-0 d-lg-block" >
            <div class="logo user-logo">
               <img src="../../assets/icons/Group 1.png" alt="logo" class="">
            </div>
         </b-button>
      </div>
      <div class="container-fluid">
         <div class="row pl-3 checkout-page">
            <div class="col-lg-3 col-md-3 col-12">
               <div class="row">
                  <div class="col-8">
                     <p class="available-credit m-0">Available Credit Line</p>
                     <span class="no-transaction">(does not include this transaction)</span>
                  </div>
                  <div class="col-4"  v-for="element in list.slice(0,1)" :key="element.id">
                     <p class="price">{{element.availableCreditLine}}</p>
                  </div>
               </div>
               <hr class="mt-0">
            </div>
            <div class="col-lg-6 col-md-5 col-12">
               <h5 class="text-uppercase text-center checkout-header">Checkout</h5>
            </div>
            <div class="col-lg-3 col-md-4 col-12 items-relative">
               <div class="container-fluid  text-end">
                  <div class="input-group mb-3 justify-content-end" > 
                     <span class="items-checkout" id="basic-addon1">
                     <img src="../../assets/icons/basket-blue.png" alt="items">
                     </span>
                     <span class="divider-checkout"></span>
                     <input type="submit" class="checkout-your-items text-center" aria-describedby="basic-addon1" value="Your items">
                     <span class="square"></span>
                  </div>
               </div>
            </div>
            <div class="col-lg-3 col-md-3 col-12 prev-order-btns">
               <button class="ordering-btn text-uppercase  previous-btn-ship location-btn-sm">Previous</button>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
               <h5 class="text-uppercase text-lg-center checkout-header">
                  <p class="steps location-steps ">Step 5 of 5</p>
               </h5>
            </div>
            <div class="col-lg-3 col-md-3 col-12 prev-order-btns">
               <div class="container-fluid  text-lg-end">
                  <button class="ordering-btn text-uppercase  previous-btn-ship location-btn-sm">Order</button>
               </div>
            </div>
         </div>
         <div class="row pl-3 pt-3">
            <div class="col-lg-6 col-md-12 col-12">
               <p class="text-uppercase order-header">Order Information</p>
               <table id="checkoutDatatableOrder">
                  <thead>
                     <tr class="modal-table-header checkout-order-header">
                        <th class="text-uppercase modal-th">Image info </th>
                        <th class="text-uppercase modal-th">Size</th>
                        <th class="text-uppercase modal-th">Price</th>
                        <th class="text-uppercase modal-th">Quantity</th>
                        <th class="text-uppercase modal-th">Total</th>
                     </tr>
                  </thead>
                  <tbody class="modal-tbody">
                     <tr v-for="element in list.slice(1)" :key="element.id">
                        <td class="modal-td checkout-row">
                           <img :src="element.src" class="w-100"/>
                           <p class="text-start checkout-img-name">{{element.alt}}</p>
                        </td>
                        <td class="modal-td checkout-data checkout-row">{{element.size}}</td>
                        <td class="modal-td checkout-data checkout-row">{{element.price}}</td>
                        <td class="modal-td checkout-data checkout-row">
                           <div>
                              <v-select 
                                 class="checkout-location-select selected-options"   
                                 v-model="selectedQuantity" 
                                 :options="optionsQuantity" 
                                 label="text"
                                 >
                                 <template #selected-option="{ text }">
                                    <div>
                                       <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                 </template>
                              </v-select>
                           </div>
                        </td>
                        <td class="modal-td checkout-data checkout-row">{{element.total}}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div class="col-lg-6 col-md-12 col-12 location-order-details">
               <p class="text-uppercase order-header">Order Details</p>
               <div class="row ">
                  <div class="col-lg-6 col-md-6 col-12 shipping-billing-address">
                     <p class="checkout-location-address">Shipping Address
                        <img src="../../assets/icons/edit.png" alt="edit" class="edit-checkout">
                     </p>
                  </div>
               </div>
               <div class="row mt-4">
                  <div class="col-lg-6 col-md-6 col-12 address-detail">
                     <div class="shipping-address-detail ">
                        TriColor Imaging 12 platinum Court 11763 Medford, NY info@tricolorimage.com 6312055100
                     </div>
                  </div>
               </div>
               <div class="row mt-2">
                  <div class="col-6">
                     <p class="text-uppercase order-header">Options</p>
                  </div>
                  <div class="col-6">
                     <p class="text-uppercase order-header">Price</p>
                  </div>
               </div>
               <div class="total-subtotal-2nd">
                  <div class="row m-3 pt-4 subtotal-row">
                     <div class="col-8">
                        <p class="text-uppercase subtotal-price-options">Subtotal price</p>
                     </div>
                     <div class="col-4 subtotal-options" v-for="element in list.slice(0)" :key="element.id">{{element.subtotalPrice}}</div>
                  </div>
                  <div class="row m-3 subtotal-row">
                     <div class="col-8">
                        <p class="text-uppercase subtotal-price-options">Coupon Discount</p>
                     </div>
                     <div class="col-4 subtotal-options" v-for="element in list.slice(0)" :key="element.id">{{element.couponDiscount}}</div>
                  </div>
                  <div class="row m-3">
                     <div class="col-8">
                        <p class="text-uppercase total-price-options">Total price</p>
                     </div>
                     <div class="col-4 total-options" v-for="element in list.slice(0)" :key="element.id">{{element.totalPrice}}</div>
                  </div>
                  <div class="row m-3 subtotal-row">
                     <div class="col-8">
                        <p class="text-uppercase subtotal-price-options">Applied Credit</p>
                     </div>
                     <div class="col-4 credit-amount" v-for="element in list.slice(0)" :key="element.id">{{element.appliedCredit}}</div>
                  </div>
                  <div class="row m-3">
                     <div class="col-8">
                        <p class="text-uppercase total-price-options">Balance</p>
                     </div>
                     <div class="col-4 total-options" v-for="element in list.slice(0)" :key="element.id">{{element.balance}}</div>
                  </div>
               </div>
            </div>
            <div class="col-lg-3 col-md-3 col-12 prev-order-btns">
               <button class="ordering-btn text-uppercase  previous-btn-ship location-btn-sm">Previous</button>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
               <h5 class="text-uppercase text-lg-center checkout-header">
                  <p class="steps location-steps ">Step 5 of 5</p>
               </h5>
            </div>
            <div class="col-lg-3 col-md-3 col-12 prev-order-btns">
               <div class="container-fluid  text-lg-end">
                  <button class="ordering-btn text-uppercase  previous-btn-ship location-btn-sm">Order</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Navbar2 from '../reusable/Navbar2.vue';

export default {
  components:{
    Navbar2
},
    mounted() {
      
    fetch("http://localhost:3000/checkoutLocation2")
      .then((response) => response.json())
      .then((data) => {
        this.list = data
        setTimeout(() => {
               $("#checkoutDatatableOrder").DataTable({
             fixedColumns: false,
             responsive: true,
           
            scrollX: true,
             scrollY:        380,
              scrollCollapse: true,
          });
        });
      });
  },
  data: function () {
    return {
      users: [],
       list: [
       
      ],
       selectedQuantity:['1'],
            optionsQuantity:[
          { value: 'a', text: '1' },
          { value: 'b', text: '2' },
        ],
    };
  },
};
</script>
<style>
    .credit-amount{
        font-size: 17px;
    color: #393939;
    font-weight: 600;
    }
    .checkout-location-address{
            font-size: 17px;
    line-height: 35px;
    color: #223d8f;
    font-weight: 600;
    margin: 0;
    /* padding-left: 2rem; */
    text-align: center;
    }
    .edit-checkout{
        position: relative;
        left: 14px;
    }
    .location-order-details{
        padding-left: 3rem;
    }
    @media only screen and(max-wdith:768px){
        .location-order-details{
             padding: 2rem!important;
        }
        
    }
</style>