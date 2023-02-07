<template>
   <div id="orderDetails">
      <Navbar2 class="mb-3"/>
      <div class="position-absolute">
         <b-button id="button-2" variant="" class="tooltip-btn p-0 d-lg-block" >
            <div class="logo user-logo">
               <img src="../../assets/icons/Group 1.png" alt="logo" class="">
            </div>
         </b-button>
      </div>
      <div class="container-fluid">
         <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(add)">
               <div class="row pl-3 checkout-page">
                  <div class="col-lg-3 col-md-12 col-12">
                     <div class="row">
                        <div class="col-8">
                           <p class="available-credit m-0">Available Credit Line</p>
                           <span class="no-transaction">(does not include this transaction)</span>
                        </div>
                        <div class="col-4"  v-for="element in list" :key="element.id">
                           <p class="price">{{element.availableCreditLine}}</p>
                        </div>
                     </div>
                     <hr class="mt-0">
                     <div class="mt-5">
                        <div>
                           <input class="select-all" type="checkbox" id="studio" v-model="shipToStudio" >
                           <label  class="text-capitalize mb-3 shared" for="studio">
                           <span class="ship-label">Ship to studio</span>
                           </label>
                        </div>
                        <div>
                           <input class="select-all" type="checkbox" id="pickLocation" v-model="pickUpLocation">
                           <label  class="text-capitalize mb-3 shared" for="pickLocation">
                           <span class="ship-label"> Pick up at Location</span>
                           </label>
                        </div>
                        <div>
                           <input class="select-all" type="checkbox"  id="shipNewAddress" v-model="shipToNewAddress">
                           <label  class="text-capitalize mb-3 shared" for="shipNewAddress">
                           <span class="ship-label"> Ship to New Address</span>
                           </label>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-6 col-md-12 col-12">
                     <h5 class="text-uppercase text-center checkout-header">Checkout</h5>
                     <h6 class="text-uppercase text-center billing-details mt-4">Billing details</h6>
                     <div class="container mt-3">
                        <div class="row">
                           <div class="col-lg-12 col-md-8 col-sm-12 m-auto">
                              <div class="d-flex flex-wrap flex-steps">
                                 <router-link  to='/ShipToStudio'>
                                    <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                 <p class="steps">Step 2 of 5</p>
                                 <router-link  to='/PaymentDetails'>
                                    <button  type="submit" class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                                 </router-link>
                              </div>
                              <div class=" m-auto total-subtotal">
                                 <div class="row m-3 pt-4 subtotal-row">
                                    <div class="col-lg-8 col-md-8 col-8">
                                       <p class="text-uppercase subtotal-price">Subtotal price</p>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-4 subtotal" v-for="element in list" :key="element.id">
                                       {{element.subtotalPrice}}
                                    </div>
                                 </div>
                                 <div class="row m-3">
                                    <div class="col-lg-8 col-md-8 col-8">
                                       <p class="text-uppercase total-price">Total price</p>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-4 total" v-for="element in list" :key="element.id">
                                       {{element.totalPrice}}
                                    </div>
                                 </div>
                              </div>
                              <div class="d-flex flex-wrap flex-steps">
                                 <router-link  to='/ShipToStudio'>
                                    <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                 <p class="steps">Step 2 of 5</p>
                                 <router-link  to='/PaymentDetails'>
                                    <button  type="submit" class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                                 </router-link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-12 checkout-items">
                     <div class="container-fluid  text-end">
                        <div class="input-group mb-3 justify-content-end">
                           <span class="items-checkout" id="basic-addon1">
                           <img src="../../assets/icons/basket-blue.png" alt="items">
                           </span>
                           <span class="divider-checkout"></span>
                           <input type="submit" class="checkout-your-items text-center" aria-describedby="basic-addon1" value="Your items">
                           <span class="square"></span>
                        </div>
                     </div>
                  </div>
               </div>
            </b-form>
         </validation-observer>
      </div>
   </div>
</template>
<script>
import Navbar2 from "../reusable/Navbar2.vue";
   import Button from '../reusable/Button.vue';
  import axios from 'axios'
export default{
    components:{
        Navbar2,
        Button,
    },   
     mounted() { 
    fetch("http://localhost:3000/orderDetails")
      .then((response) => response.json())
      .then((data) => {
        this.list = data
      });
      	
  },
    data: function () {
    return {
      list: [],
      shipToStudio:false,
      pickUpLocation:false,
      shipToNewAddress:false,
      selectedCheckbox:[]
    };
  },
   methods:{
        add (){
  	axios({
     		  method: 'post',
            type: 'post',
     		  url: 'http://localhost:3000/user',
     		  data: this.shipToStudio,
            headers: {
               'Accept': 'application/json',
             } ,
         
   		  }) .then(res => {
           console.log(res)
         })
         .catch(message => {
            console.log(message)
   })
},
   }
}
</script>
<style>
    .total-subtotal{
        border-radius: 5px;
        filter: drop-shadow(0 0 8.5px rgba(159,159,159,0.33));
        background-color: #ffffff;
    }
    .subtotal-price{
        font-size: 12px;
        color: #223d8f;
        font-weight: 500;
        border-right: 1px solid #D5D5D5;
    }
    .subtotal{
        font-size: 15px;
        color: #223d8f;
        font-weight: 500;
    }
    .subtotal-row{
        border-bottom: 1px solid #D5D5D5;
    }
    .total-price{
        font-size: 14px;
        color: #223d8f;
        font-weight: 600;
        border-right: 1px solid #D5D5D5;
    }
    .total{
        font-size: 17px;
        color: #223d8f;
        font-weight: 700;
    }
    .ship-label{
        position: relative;
        top: 4px;
    }
    @media only screen and (max-width:1346px){
      .select-payment{
         font-size: 12px;
      }
    }
</style>