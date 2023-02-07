<template>
   <div id="paymentDetails2">
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
                  <div class="col-4"  v-for="element in list" :key="element.id">
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
                           <div class="col-lg-12 col-md-8 col-sm-12 m-auto">
                              <div class="d-flex flex-wrap flex-steps">
                                 <router-link  to='/PaymentDetails'>
                                    <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                 <p class="steps">Step 3 of 5</p>
                                 <button class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                              </div>
                              <div class="row">
                                 <div class="col-lg-6 col-md-12 col-sm-12 contact-index">
                                    <v-select class="mb-3 select-contact selected-options" v-model="form.selectedCards" :options="optionsCard" label="text">
                                       <template #selected-option="{ text }">
                                          <div style="display: flex; align-items: baseline;">
                                             <strong class=" select-payment">{{ text }}</strong>
                                          </div>
                                       </template>
                                    </v-select>
                                 </div>
                                 <div class="col-lg-6 col-md-12 col-sm-12 contact-index2nd">
                                    <v-select class="mb-3 select-contact selected-options select-card" v-model="form.selectedCreditCards" :options="optionsCreditCard" label="text">
                                       <template #selected-option="{ text }">
                                          <div style="display: flex; align-items: baseline;">
                                             <strong class=" select-payment">{{ text }}</strong>
                                          </div>
                                       </template>
                                    </v-select>
                                 </div>
                              </div>
                              <validation-observer ref="observer" v-slot="{ handleSubmit }">
                                 <b-form @submit.stop.prevent="handleSubmit(add)" >
                                    <div class="row">
                                       <div class="col-lg-6">
                                          <validation-provider
                                             name="Card Number"
                                             :rules="{ required: true, min: 16 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="example-input-group-28" label="Card Number" label-for="example-input-28" class="shipping-label" >
                                                <b-form-input
                                                   id="example-input-28"
                                                   name="example-input-28"
                                                   v-model="form.cardNumber"
                                                   :state="getValidationState(validationContext)"
                                                   aria-describedby="input-28-live-feedback"
                                                   placeholder="xxxx xxxx xxxx xxxx"
                                                   class="w-100"
                                                   ></b-form-input>
                                                <b-form-invalid-feedback class="feedback" id="input-28-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                                          </validation-provider>
                                       </div>
                                       <div class="col-lg-3">
                                          <validation-provider
                                             name="MM / YY"
                                             :rules="{ required: true, min: 4 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="example-input-group-29" label="MM / YY" label-for="example-input-29" class="shipping-label" >
                                                <b-form-input
                                                   id="example-input-29"
                                                   name="example-input-29"
                                                   v-model="form.mmyy"
                                                   :state="getValidationState(validationContext)"
                                                   aria-describedby="input-29-live-feedback"
                                                   placeholder="MM / YY"
                                                   class="w-100"
                                                   ></b-form-input>
                                                <b-form-invalid-feedback class="feedback" id="input-29-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                                          </validation-provider>
                                       </div>
                                       <div class="col-lg-3">
                                          <validation-provider
                                             name="CVV"
                                             :rules="{ required: true, min: 3 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="example-input-group-30" label="CVV" label-for="example-input-30" class="shipping-label" >
                                                <b-form-input
                                                   id="example-input-30"
                                                   name="example-input-30"
                                                   v-model="form.cvv"
                                                   :state="getValidationState(validationContext)"
                                                   aria-describedby="input-30-live-feedback"
                                                   placeholder="CVV"
                                                   class="w-100"
                                                   ></b-form-input>
                                                <b-form-invalid-feedback class="feedback" id="input-30-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                                          </validation-provider>
                                       </div>
                                       <div class="col-lg-12">
                                          <validation-provider
                                             name="name on the card"
                                             :rules="{ required: true, min: 4 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="example-input-group-31" label="Name on the Card" label-for="example-input-31" class="shipping-label" >
                                                <b-form-input
                                                   id="example-input-31"
                                                   name="example-input-31"
                                                   v-model="form.cardName"
                                                   :state="getValidationState(validationContext)"
                                                   aria-describedby="input-31-live-feedback"
                                                   placeholder="Name on the Card"
                                                   class="w-100"
                                                   ></b-form-input>
                                                <b-form-invalid-feedback class="feedback" id="input-31-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                                          </validation-provider>
                                       </div>
                                    </div>
                                 </b-form>
                              </validation-observer>
                              <div class=" m-auto total-subtotal">
                                 <div class="row m-3 pt-4 subtotal-row">
                                    <div class="col-8">
                                       <p class="text-uppercase subtotal-price">Subtotal price</p>
                                    </div>
                                    <div class="col-4 subtotal"  v-for="element in list" :key="element.id">
                                       {{element.subtotalPrice}}
                                    </div>
                                 </div>
                                 <div class="row m-3 subtotal-row">
                                    <div class="col-8">
                                       <p class="text-uppercase total-price">Total price</p>
                                    </div>
                                    <div class="col-4 total" v-for="element in list" :key="element.id">
                                       {{element.totalPrice}}
                                    </div>
                                 </div>
                                 <div class="row m-3 subtotal-row">
                                    <div class="col-8">
                                       <p class="text-uppercase total-price">Coupon code</p>
                                    </div>
                                    <div class="col-4">
                                       <input type="text" placeholder="Enter Code" class="enter-code">
                                    </div>
                                 </div>
                              </div>
                              <div class="d-flex flex-wrap flex-steps">
                                 <router-link  to='/PaymentDetails'>
                                    <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                 <p class="steps">Step 3 of 5</p>
                                 <button class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
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
   import axios from 'axios'
export default{
    components:{
        Navbar2,
      Button,
    },
     mounted() { 
    fetch("http://localhost:3000/paymentDetails2")
      .then((response) => response.json())
      .then((data) => {
        this.list = data
      });
  },
    data(){
         return{
               list: [],
              
        optionsCard:[
          { value: 'a', text: 'Card 1' },
          { value: 'b', text: 'Card 2' },
        ],
        
        optionsCreditCard:[
          { value: 'a', text: 'Enter new Card' },
          { value: 'b', text: 'new Card' },
        ],
           form: {
             id: '',
             cardNumber: '',
             mmyy:'',
             cvv:'',
             cardName:'',
             selectedCards:['Credit Card'],
             selectedCreditCards:['Enter new Card']
           },
            details2: [],
            loading: false,
           updateSubmit: false
         }
    },
     methods: {
        
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
  
       onSubmit() {
         
         alert("Form submitted!");
       },
       load(){
     		axios({
     			method: 'get',
     			url: 'http://localhost:3000/details2/'
     		})
     		.then(res => {
     			this.details2 = res.data 
     		})
     		.catch ((err) => {
     			this.alertError()
     		})
       },
       add(){
       	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/details2/',
     		  data: this.form
   		  })
         .then(res => {
           this.load()
           this.form.cardNumber = ''
           this.form.mmyy = '',
           this.form.cvv ='',
           this.form.cardName =''
         //   this.alertSuccess()
           this.$router.push('/BillingDetails')
         })
       },
       alertSuccess(){
           this.$swal({
              type: 'success',
               title: 'Success',
               text: 'Data Saved Successfully',
           });
       },
       alertError(){
           this.$swal({
              type: 'error',
               title: 'Oops...',
               text: 'Something went wrong!',
           });
       },
     }
     
}

</script>
<style>

.select-card .vs__dropdown-menu{
    top: -0.7rem
}
</style>