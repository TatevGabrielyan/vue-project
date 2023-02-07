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
                     <label>
                        <input type="radio" value="shipToStudio" v-model="checkoutWay" @change="onChange($event)">
                        Ship to studio
                     </label>
                        <label>
                        <input type="radio" value="pickUpAtLocation" v-model="checkoutWay" @change="onChange($event)">
                       Pick up at Location
                     </label>
                     <label>
                        <input type="radio" value="ShipToNewAddress" v-model="checkoutWay" @change="onChange($event)">
                        Ship to New Address</label>
                      </div>
               </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12">
               <h5 class="text-uppercase text-center checkout-header">Checkout</h5>
               <h6 class="text-uppercase text-center billing-details mt-4">Shipping address</h6>
               <div class="container mt-3">
                  <validation-observer ref="observer" v-slot="{ handleSubmit }">
                     <b-form @submit.stop.prevent="handleSubmit(add)">
                        <div class="row">
                           <div class="col-lg-10 col-md-8 col-sm-12 m-auto">
                              <div class="d-flex flex-wrap flex-steps">
                                 <div class="pre-btn"></div>
                                 <p class="steps">Step 1 of 5</p>
                                  
                  
                                 <button class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
                              </div>
                              <label class="d-block text-capitalize">Select from existing contacts</label>
                              <v-select class="mb-3 select-contact selected-options" v-model="form.selectedContacts" :options="optionsContact" label="text">
                                 <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                       <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                 </template>
                              </v-select>
                              <div class="row">
                                 <div class="col-lg-6 col-md-12 col-12 email-field p-0">
                                    <Firstname :getUserFirstname="getFirstname" class="firstname-sm"/>
                                 </div>
                                 <div class="col-lg-6 col-md-12 col-12 p-0">
                                    <Lastname :getUserLastname="getLastname" class="lastname-sm"/>
                                 </div>
                              </div>
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
                                 <div class="col-lg-4 col-md-12 col-sm-12 zip-ship">
                                    <Zip :getZip="getZipCode"/>
                                 </div>
                              </div>
                              <div class="row mt-0">
                                 <div class="col-lg-6 col-md-12 col-12 email-field">
                                    <label class="d-block email-label-checkout ">Email</label>
                                    <Email :getEmail="getUserEmail" class="email-inp"/>
                                 </div>
                                 <div class="col-lg-6 col-md-12 col-12">
                                    <Phone :getPhone="getPhoneNumber" class="text-nowrap"/>
                                 </div>
                              </div>
                              <div class="row shipping-btns mb-2 mt-2 ">
                                  <div class="d-flex flex-wrap flex-steps">
                                 <div class="pre-btn"></div>
                                 <p class="steps">Step 1 of 5</p>
                                 <button class="text-uppercase size-btn-2nd next-btn-ship"> Next </button>
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
             selectedContacts:['contact 1'],
           },
           checkoutWay:'',
           shippingCheckout: [],
           loading: false,
           updateSubmit: false,
           
        optionsContact:[
          { value: 'a', text: 'contact 1' },
          { value: 'b', text: 'contact 2' },
        ],
       }
     },
     mounted(){
  fetch("http://localhost:3000/shipToStudio")
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
     			url: 'http://localhost:3000/shippingCheckout/'
     		})
     		.then(res => {
     			this.shippingCheckout = res.data 
     		})
     		.catch ((err) => {
     			this.alertError()
     		})
       },
       add(){
       	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/shippingCheckout/',
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
           this.$router.push('/OrderDetails')
         //   this.alertSuccess()
         })
       },
    
       update(form){
       	axios({
     		  method: 'put',
     		  url: 'http://localhost:3000/shippingCheckout/' + form.id,
     		  data: {id: form.id, firstname: this.form.firstname,lastname: this.form.lastname, address1: this.form.address1, address2: this.form.address2, appNumber:this.form.appNumber, city: this.form.city, state:this.form.state, zip:this.form.zip, phone: this.form.phone,
               email:this.form.email }
   		  })
         .then(res => {
           this.load()
           this.form.id = ''
           this.form.firstname = ''
           this.form.lastname = ''
           this.form.address1 = ''
           this.form.address2 = ''
           this.form.appNumber = ''
           this.form.city =''
           this.form.state =''
           this.form.zip = ''
           this.form.phone =''
           this.form.checked =''
           this.form.email=''
           this.updateSubmit = false
           this.alertSuccess()
         })
       },
      
     
       
       toggleIndeterminate() {
        this.indeterminate = !this.indeterminate
      },
           onChange(event) {

              var optionText = event.target.value;

             if(optionText === 'shipToStudio'){
                 axios({
     		  method: 'get',
           type: 'get',
     		  url: 'http://localhost:3000/shippingCheckout',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             } ,
              
   		  }) .then(res => {
           this.form.firstname = res.data[1].firstname;
           
        

         
         })
         .catch(message => {
          
            console.log(message)
   })



             }else if(optionText === 'pickUpAtLocation'){
               console.log('pickUpAtLocation')
             }else if(optionText === 'ShipToNewAddress'){
               console.log('ShipToNewAddress')
             }
               
             

          }
   
     }
}
</script>
<style>
    .pre-btn{
        width:150px
    }
    .select-contact{
        width: 100%!important;
    }
  .custom-control-input:checked~.custom-control-label::before{
    border-color: transparent;
    background-color: #fff;
  }
  .firstname-sm{
   width:100%
  }
  
    @media only screen and (max-width:992px){
      .lastname-sm{
        
    margin-left: 10px;
    width: 99%;

  }
   }
  
    @media only screen and (max-width:769px){
      .lastname-sm{
           margin-left: 10px;
  }
   }
   @media only screen and (max-width:575px){
      .lastname-sm{
              width: 100%;
    margin-left: 10px
  }
   }
   @media only screen and (max-width:426px){
      .firstname-sm{
   width:96%
  }
   .lastname-sm{
              width: 93%;
  }
   }
      @media only screen and (max-width:375px){
   .lastname-sm{
                     width: 90%;
  }
   }

</style>