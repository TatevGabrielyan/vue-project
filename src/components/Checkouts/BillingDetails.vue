<template>
   <div id="billingDetails">
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
            <div class="col-lg-3 col-md-12 col-12 pl-0">
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
               <h6 class="text-uppercase text-center billing-details mt-4">Billing details</h6>
               <div class="container mt-3">
                  <validation-observer ref="observer" v-slot="{ handleSubmit }">
                     <b-form @submit.stop.prevent="handleSubmit(add)">
                        <div class="row">
                           <div class="col-lg-12 col-md-8 col-sm-12 m-auto">
                              <div class="d-flex flex-wrap flex-steps">
                                 <router-link  to='/PaymentDetails2'>
                                     <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                 <p class="steps">Step 4 of 5</p>
                                 <button type="submit" class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                              </div>
                              <input class="select-all" type="checkbox"  id="billingAndShipping">
                              <label  class="shared text-capitalize mb-2 mt-2" for="billingAndShipping">
                              <span class="ship-label"> Billing and shipping is same</span>
                              </label>
                              <Address :getAddress="getAddress1" class="mt-3" />
                              <Address2 :getAddress2nd="getAddress2" class="mt-3"/>
                              <Appartment :getAppNumber="getAppartmentNumber" class="mt-3"/>
                              <div class="row">
                                 <div class="col-lg-4 col-md-12 col-sm-12">
                                    <City :getCity="getCityName"/>
                                 </div>
                                 <div class="col-lg-4 col-md-12 col-sm-12">
                                    <State :getState="getStateName"/>
                                 </div>
                                 <div class="col-lg-4 col-md-12 col-sm-12">
                                    <Zip :getZip="getZipCode"/>
                                 </div>
                              </div>
                              <div class="row">
                                 <div class="col-lg-6 col-md-12 col-12 email-field">
                                    <label class="d-block email-label-checkout ">Email</label>
                                    <Email :getEmail="getUserEmail" class="email-inp"/>
                                 </div>
                                 <div class="col-lg-6 col-md-12 col-12">
                                    <Phone :getPhone="getPhoneNumber" class="text-nowrap"/>
                                 </div>
                              </div>
                              <div class="  mb-2 mt-2 ">
                                  <div class="d-flex flex-wrap flex-steps">
                                <router-link  to='/PaymentDetails2'>
                                     <button class="ordering-btn text-uppercase  previous-btn-ship mb-2">Previous</button>
                                 </router-link>
                                
                                 <p class="steps">Step 4 of 5</p>
                                 <button type="submit" class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                              </div>
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
                     <input type="submit" class="checkout-your-items text-center " aria-describedby="basic-addon1" value="Your items">
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
   import axios from 'axios'
   import Button from '../reusable/Button.vue';
   import Address from '../reusable/Validation/Address.vue';
   import Address2 from '../reusable/Validation/Address2.vue';
   import Appartment from '../reusable/Validation/Appartment.vue';
   import City from '../reusable/Validation/City.vue';
   import State from '../reusable/Validation/State.vue';
   import Zip from '../reusable/Validation/Zip.vue';
   import Phone from '../reusable/Validation/Phone.vue';
   import Firstname from '../reusable/Validation/Firstname.vue';
   import Lastname from '../reusable/Validation/Lastname.vue';
   import Email from '../reusable/Validation/Email.vue';

export default{
    components:{
         Navbar2,
         Button,
         Address,
         Address2,
         Appartment,
         City,
         State,
         Zip,
         Phone,
         Firstname,
         Lastname,
         Email,
    },
     
    data(){
       return{
         list:[],
           form: {
             id: '',
             firstname:'',
             lastname:'',
             address1:'',
             address2:'',
             appNumber:'',
             city:'',
             state:'',
             zip:'',
             phone:'',
             checked:true,
             email:'',
           },
           billingCheckout: [],
           loading: false,
           updateSubmit: false
       }
     },
     mounted(){
       fetch("http://localhost:3000/billingDetails")
      .then((response) => response.json())
      .then((data) => {
        this.list = data
      });
       this.load();
     },
      methods: {
           getFirstname(firstname){
            this.form.firstname = firstname;
        },
         getLastname(lastname){
            this.form.lastname = lastname;
        },
          getAddress1(address1){
            this.form.address1 = address1;
        },
         getAddress2(address2){
            this.form.address2 = address2;
        },
         getAppartmentNumber(appNumber){
            this.form.appNumber = appNumber;
        },
         getCityName(city){
            this.form.city = city;
        },
         getStateName(state){
            this.form.state = state;
        },
         getZipCode(zip){
            this.form.zip = zip;
        },
        getPhoneNumber(phone){
            this.form.phone = phone;
        },
        getUserEmail(email){
            this.form.email = email;
        },
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
  
       onSubmit() {
         
         alert("Form submitted!");
       },
       load(){
     		axios({
     			method: 'get',
     			url: 'http://localhost:3000/billingCheckout/'
     		})
     		.then(res => {
     			this.billingCheckout = res.data 
     		})
     		.catch ((err) => {
     			this.alertError()
     		})
       },
       add(){
       	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/billingCheckout/',
     		  data: this.form
   		  })
         .then(res => {
           this.load()
           this.form.address1 = '',
           this.form.address2 = '',
           this.form.appNumber ='',
           this.form.city ='',
           this.form.state ='',
           this.form.zip ='',
           this.form.phone= '',
           this.form.checked= '',
           this.form.email='',
           this.$router.push('/CheckoutLocation')
         })
       },
       toggleIndeterminate() {
        this.indeterminate = !this.indeterminate
      }
         
   
     }
}
</script>
<style>
/* leftside */
.checkout-page{
    margin-top: 2rem!important;
}
    .available-credit{
        font-size: 15px;
        color: #393939;
        font-weight: 600
    }
    .no-transaction{
        font-size: 13px;
        line-height: 10px;
        color: #adadad;
        font-weight: 500;
    }
    .price{
        font-size: 18px;
        line-height: 10px;
        color: #223d8f;
        font-weight: 600;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 36%;
        left: 46%;
    }
    /* center */
    .checkout-header, .billing-details{
        font-size: 17px;
        color: #393939;
        font-weight: 600;
    }
    .next-btn-ship{
            width: 150px;
            height: 40px;
    }
    .previous-btn-ship{
         height: 40px;
    }
    .steps{
        font-size: 17px;
        color: #adadad;
        font-weight: 600;
        margin: 0.5rem 0 0 0;

    }
    .email-label-checkout{
        text-indent: 1.3rem;
    }
    .email-label-checkout:after{
         content: "*";
    color: #fc0000;

    }
    .email-inp{
            margin-top: -0.4rem;

    }
    /* right sidebar */
    .items-checkout{
        border-radius: 10px 0px 0px 10px!important;
        background-color: #ffffff;
        border: 2px solid #223D8F;
        border-right: 0;
    }
    .items-checkout img{
        padding: 0.2rem;
        width: 85%;
    }
    .checkout-your-items{
            border-radius: 0px 10px 10px 0px!important;
    background-color: #ffffff;
    color: #223D8F;
    border: 2px solid #223D8F;
    border-left: 0;
    font-size: 13px;
    padding: 0 4px;
    }
    .checkout-your-items::placeholder{
         color: #223D8F;
    font-size: 18px;
    line-height: 17px;
    font-weight: 500;
    opacity: 1;
    }
    .divider-checkout{
        display: inline-block;
    width: 0;
    height: 19px;
    border-left: 1px solid #223D8F;
    border-right: 1px solid #223D8F;
    margin-top: 10px;
    }
    .square{
            width: 15px;
    height: 15px;
    background: #223D8F;
    position: absolute;
    top: -6px;
    right: -6px;
    border-radius: 4px;
}   
 .flex-steps{
      justify-content: space-between!important;
   }
@media only screen and (max-width:992px){
   .checkout-items{
          position: absolute;
         right: 0;
         padding: 0!important;
         top: 2.8rem;
   }
}
@media only screen and (max-width:390px){
   .shared{
      padding-left: 10px;
      font-size: 11px;
   }
  
}
@media only screen and (max-width:350px){
   .available-credit{
      padding-top: 11px;
   }
   .price {
    left: 30%;
   }
   .flex-steps{
      justify-content: center!important;
   }
   .steps{
      padding-bottom: 10px;
   }
}
</style>
