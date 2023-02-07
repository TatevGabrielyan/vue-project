<template>
   <div id="checkout">
      <Navbar2 class="mb-3"/>
      <div class="position-absolute">
         <b-button id="button-2" variant="" class="tooltip-btn p-0 d-lg-block" >
            <div class="logo user-logo">
               <img src="../../assets/icons/Group 1.png" alt="logo" class="">
            </div>
         </b-button>
      </div>
      <div class="container-fluid">
         <div class="input-group mb-3 justify-content-end d-flex flex-nowrap checkout-basket clear-cart-basket" >
            <div class="mr-5 ">
               <button class="text-uppercase size-btn-2nd next-btn-ship"> Clear the Cart </button>
            </div>
         <span class="items-checkout checkout-span" id="basic-addon1">
                     <img src="../../assets/icons/basket-blue.png" alt="items">
                     </span>
                     <span class="divider-checkout"></span>
                     <input type="submit" class="checkout-your-items text-center" aria-describedby="basic-addon1" value="Your items">
                     <span class="square"></span>
         </div>
         <table id="checkoutDatatable">
            <thead>
               <tr class="modal-table-header checkout-table-header">
                  <th class="text-uppercase modal-th">Image info </th>
                  <th class="text-uppercase modal-th">Size</th>
                  <th class="text-uppercase modal-th">Price</th>
                  <th class="text-uppercase modal-th">Quantity</th>
                  <th class="text-uppercase modal-th">Image options</th>
                  <th class="text-uppercase modal-th">Total</th>
                  <th class="text-uppercase modal-th">Edit</th>
                  <th class="text-uppercase modal-th">Delete</th>
               </tr>
            </thead>
            <tbody class="modal-tbody">
               <tr v-for="element in list" :key="element.id">
                  <td class="modal-td checkout-row">
                     <img :src="element.src" class="w-100"/>
                     <p class="text-start checkout-img-name">{{element.alt}}</p>
                  </td>
                  <td class="modal-td checkout-data checkout-row">{{element.size}}</td>
                  <td class="modal-td checkout-data checkout-row">{{element.price}}</td>
                  <td class="modal-td checkout-data checkout-row">
                       <v-select :options="quantity" label="name" placeholder="quantity"></v-select>
                  </td>
                  <td class="modal-td checkout-data checkout-row">{{element.imageOptions}}</td>
                  <td class="modal-td checkout-data checkout-row">{{element.total}}</td>
                  <td class="modal-td checkout-row">
                     <img src="../../assets/icons/edit.png" alt="edit" class=" edit-checkout">
                  </td>
                  <td class="modal-td checkout-row">
                     <img src="../../assets/icons/DELETE.png" alt="delete" class=" delete-checkout">
                  </td>
               </tr>
            </tbody>
         </table>
         <div class="special-instructions mt-4 p-3">
            <p class="instructions-text">Special instructions</p>
            <p class="instructions-info pb-3">Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
         </div>
         <div class="checkout-total-footer">
            <div class="row mt-3">
               <div class="col-lg-6 col-md-12 col-12">
                  <div class="row  checkout-footer">
                     <div class="col-lg-8 col-md-6 col-8">
                        <p class="text-uppercase total-price-footer">Subtotal price</p>
                     </div>
                     <div class="col-lg-4 col-md-6 col-4 total total-footer" v-for="element in list.slice(0,1)" :key="element.id">
                        {{element.subtotalPrice}}
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-md-12 col-12 text-end p-0 mt-2">
                  <router-link  to='/ShipToStudio'>
                     <button class="ordering-btn text-uppercase  previous-btn-ship prev-btn-checkout">Checkout</button>
                 </router-link>  
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
    fetch("http://localhost:3000/checkout")
      .then((response) => response.json())
      .then((data) => {
        this.list = data;
        setTimeout(() => {
               $("#checkoutDatatable").DataTable({
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
      list: [],
       selectedQuantity:['1'],
            optionsQuantity:[
          { value: 'a', text: '1' },
          { value: 'b', text: '2' },
        ],
           quantity: [{
      name: '1',
      code: '1'
    }, {
      name: '2',
      code: '2'
    }, {
      name: '3',
      code: '3'
    }, {
      name: '4',
      code: '4'
    }],
    };
  },
};
</script>
<style>
.checkout-table {
	position: relative;
	top: 0.5rem;
}

.checkout-table-header th:first-child {
	width: 140px !important;
}

#checkoutDatatable {
	width: 1471px !important;
}

#checkoutDatatable_length,
#checkoutDatatable_info,
#checkoutDatatable_paginate {
	display: none;
}

.checkout-data {
	font-size: 15px;
	color: #393939;
	font-weight: 600;
}

.checkout-img-name {
	font-size: 13px;
	color: #393939;
	font-weight: 400;
	margin: 5px;
}

.checkout-row {
	border-bottom: 1px solid #ADADAD !important;
}

.checkout-row img {
	padding-top: 0.5rem !important;

}

.checkout-select {
	width: 120px !important;
}

.special-instructions {
	width: 50%;
	border-radius: 10px;
	filter: drop-shadow(0 0 8.5px rgba(159, 159, 159, 0.33));
	background-color: #ffffff;
	margin: auto;
}

.instructions-text {
	font-size: 16px;
	color: #393939;
	font-weight: 400;
	margin: 0;
}

.instructions-info {
	font-size: 14px;
	line-height: 14px;
	color: #adadad;
	font-weight: 500;

}

.checkout-total-footer {
	margin: auto;
	width: 48%;
}

.checkout-footer {

	margin-top: 2rem;
	border-radius: 5px;
	filter: drop-shadow(0 0 8.5px rgba(159, 159, 159, 0.33));
	background-color: #ffffff;
	padding: 0.5rem;
	padding-top: 1rem;
}

.prev-btn-checkout {
	height: 50px;
}

.total-footer {
	position: relative;
	top: -2px;
}

.total-price-footer {
	font-size: 16px;
	color: #223d8f;
	font-weight: 600;
	border-right: 1px solid #D5D5D5;
}
.checkout-basket{
   margin-left: -1.5rem;
}
.checkout-span img{
   padding-top: 1px;
   padding: 0.2rem 0 0.2rem 0.2rem;
       width: 85%;
}
.checkout-v-select{
   width: 160px!important;
    margin: auto;
}
.checkout-row div ul{
       width: 100%;
}
@media only screen and (max-width:426px){
   .clear-cart-basket{
      margin-top: 2rem;
          margin-left: 0;
   }
   .clear-cart-basket div{
      margin-right: 5px!important;
   }
   .checkout-your-items{
          font-size: 13px;
   }
   .special-instructions{
      width: 100%;
   }
   .checkout-total-footer{
      width: 93%;
   }
}
</style>