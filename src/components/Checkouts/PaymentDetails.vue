<template>
   <div id="paymentDetails">
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
            <div class="col-lg-3 col-md-12 col-12">
               <div class="row">
                  <div class="col-8">
                     <p class="available-credit m-0">Available Credit Line</p>
                     <span class="no-transaction">(does not include this transaction)</span>
                  </div>
                  <div class="col-4" v-for="element in list" :key="element.id">
                     <p class="price">{{element.availableCreditLine}}</p>
                  </div>
               </div>
               <hr class="mt-0">
               <div class="mt-5">
                  <div>
                     <input class="select-all" type="checkbox" id="studio">
                     <label  class="text-capitalize mb-3 shared" for="studio">
                     <span class="ship-label">Ship to studio</span>
                     </label>
                  </div>
                  <div>
                     <input class="select-all" type="checkbox" id="pickLocation">
                     <label  class="text-capitalize mb-3 shared" for="pickLocation">
                     <span class="ship-label"> Pick up at Location</span>
                     </label>
                  </div>
                  <div>
                     <input class="select-all" type="checkbox"  id="shipNewAddress">
                     <label  class="text-capitalize mb-3 shared" for="shipNewAddress">
                     <span class="ship-label"> Ship to New Address</span>
                     </label>
                  </div>
               </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
               <h5 class="text-uppercase text-center checkout-header">Checkout</h5>
               <h6 class="text-uppercase text-center billing-details mt-4">Payment details</h6>
               <div class="container mt-3">
                  <validation-observer ref="observer" v-slot="{ handleSubmit }">
                     <b-form @submit.stop.prevent="handleSubmit(add)">
                        <div class="row">
                           <div class="col-lg-12 col-md-8 col-sm-12 m-auto p-0">
                              <div class="d-flex flex-wrap flex-steps">
                                 <router-link  to='/OrderDetails'>
                                    <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                 <p class="steps">Step 3 of 5</p>
                                 <router-link  to='/PaymentDetails2'>
                                    <button class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                                 </router-link>
                              </div>
                              <div class="row mt-2">
                                 <div class="col-lg-6 col-md-6 col-sm-12 contact-index">
                                  
                                    <v-select class="mb-3 select-contact selected-options" v-model="selectedAccounts" :options="optionsAccount" label="text">
                                       <template #selected-option="{ text }">
                                          <div style="display: flex; align-items: baseline;">
                                             <strong class=" select-payment">{{ text }}</strong>
                                          </div>
                                       </template>
                                    </v-select>
                                 </div>
                                 <div class="col-lg-6 col-md-6 col-sm-12 contact-index2nd">
                                    <v-select class="mb-3 select-contact selected-options options-nmb" v-model="selectedNums" :options="optionsNum" label="text">
                                       <template #selected-option="{ text }">
                                          <div style="display: flex; align-items: baseline;">
                                             <strong class=" select-payment">{{ text }}</strong>
                                          </div>
                                       </template>
                                    </v-select>
                                 </div>
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
                                 <div class="row m-3 subtotal-row">
                                    <div class="col-lg-8 col-md-8 col-8">
                                       <p class="text-uppercase total-price">Total price</p>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-4 total" v-for="element in list" :key="element.id">
                                       {{element.totalPrice}}
                                    </div>
                                 </div>
                                 <div class="row m-3  subtotal-row">
                                    <div class="col-lg-8 col-md-8 col-8">
                                       <p class="text-uppercase subtotal-price">Apply from available credit line</p>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-4 subtotal p-0">
                                       <v-select class="mb-3  select-line  options-line-credit" v-model="selectedLines" :options="optionsLine" label="text">
                                          <template #selected-option="{ text }">
                                             <div style="display: flex; align-items: baseline;">
                                                <strong class=" select-payment">{{ text }}</strong>
                                             </div>
                                          </template>
                                       </v-select>
                                    </div>
                                 </div>
                                 <div class="row m-3  subtotal-row">
                                    <div class="col-lg-8 col-md-8 col-8">
                                       <p class="text-uppercase subtotal-price">Applied credit</p>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-4 applied-credit" v-for="element in list" :key="element.id">
                                       {{element.appliedCredit}}
                                    </div>
                                 </div>
                                 <div class="row m-3 subtotal-row">
                                    <div class="col-lg-8 col-md-8 col-8">
                                       <p class="text-uppercase total-price">Balance</p>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-4 subtotal" v-for="element in list" :key="element.id">
                                       {{element.balance}}
                                    </div>
                                 </div>
                                 <div class="row m-3 subtotal-row">
                                    <div class="col-lg-8 col-md-8 col-8">
                                       <p class="text-uppercase total-price">Coupon code</p>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-4">
                                       <input type="text" placeholder="Enter Code" class="enter-code">
                                    </div>
                                 </div>
                              </div>
                              <div class="d-flex flex-wrap flex-steps">
                                 <router-link  to='/OrderDetails'>
                                    <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                 <p class="steps">Step 3 of 5</p>
                                 <router-link  to='/PaymentDetails2'>
                                    <button class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                                 </router-link>
                              </div>
                           </div>
                        </div>
                     </b-form>
                  </validation-observer>
               </div>
            </div>
            <div class="col-lg-3 col-md-4 col-12 checkout-items">
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
         </div>
      </div>
   </div>
</template>
<script>
import Navbar2 from "../reusable/Navbar2.vue";

   import Button from '../reusable/Button.vue';

export default{
    components:{
        Navbar2,
         Button,
    
    },
      mounted() { 
    fetch("http://localhost:3000/paymentDetails")
      .then((response) => response.json())
      .then((data) => {
        this.list = data
      });
      	
  },
    data(){
         return{
             list: [],
              selectedAccounts:['Open Account Credit Line'],
               optionsAccount:[
                  { value: 'a', text: 'Credit 1' },
                  { value: 'b', text: 'Credit 2' },
               ],
                  selectedNums:['xxxx xxxx xxxx 1234 11/27'],
               optionsNum:[
                  { value: 'a', text: 'xxxx xxxx xxxx 1234 11/27' },
                  { value: 'b', text: 'xxx' },
               ],
                  selectedLines:['25.98'],
               optionsLine:[
                  { value: 'a', text: '25.98' },
                  { value: 'b', text: '35.98' },
               ],
         }
    }
     
}
</script>
<style>
    .select-payment{
            color: #393939;
            font-weight: 400;
    }
    .select-line div{
        padding: 3px!important;
    font-size: 12px;
    }
    .vs__dropdown-option--highlight {
    background: transparent!important;
    color: #223d8f!important;
    }
    .vs--searchable .vs__dropdown-menu{
        /* top: 0; */
        /* top: 0.5rem; */
        top: -0.5rem;
    }
    .select-line ul{
        min-width: 10px!important
    }
    .applied-credit{
        font-size: 15px;
        line-height: 10px;
        color: #393939;
        font-weight: 500;
    }
    .enter-code{
        font-size: 11px;
        color: #adadad;
        font-weight: 400;
        border: none;
        border-bottom: 0.5px solid #D5D5D5;
        width: -webkit-fill-available;
    }
    .options-line{
       min-height: 37px;
    }
    .options-line-credit{

    }
    .options-line .vs__dropdown-menu, .options-nmb .vs__dropdown-menu{
      position: absolute;
      top: 40px;
    }
    .contact-index{
      z-index: 100;
    }

    .contact-index2nd{
      z-index: 10;
    }
    @media only screen and (min-width:991px){
        .total-subtotal {
            width: 50%!important;
        }
        .total-subtotal-2nd{
              width: 75%!important;
        }
    }
    @media only screen and (max-width:325px){
      .select-line div {
         padding: 1px!important;
      }
    }
</style>