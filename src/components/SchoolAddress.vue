<template>
   <div id="shippingAddress2">
      <div class="">
         <div class="row">
            <div class="col-lg-2 col-md-3 d-lg-block d-md-block d-none left-sidebar">
               <div class="circle-div">
                  <div class="main-circle">
                     <div class="blue-circle">
                        <img src="../assets/icons/white.png" alt="tricolor-logo">
                     </div>
                  </div>
               </div>
            </div>
             <div class="d-lg-none d-md-none d-block imaging-center-div">
                <p class="text-uppercase imaging-center-sm imaging-signup">Professional Imaging Center</p>
               <div class="circle-div-sm">
                  <div class="main-circle-sm">
                     <div class="blue-circle-sm">
                        <img src="../assets/icons/white.png" alt="tricolor-icon-white">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-10 col-md-9 col-sm-12">
               <div class="login container text-center">
                  <div class="m-auto tricolor-logo">
                     <img class="w-100 mt-5" src="../assets/icons/TRICOLOR CENTER.png" alt="tricolor-logo">
                     <h1 class="text-uppercase page-name mt-3">Address</h1>
                  </div>
                 <div class="col-lg-10 col-md-10 col-sm-12 m-auto">
                     <div class="container mt-5">
                     <validation-observer ref="observer" v-slot="{ handleSubmit }">
                        <b-form @submit.stop.prevent="handleSubmit(add)">
                           <div class="row">
                              <div class="col-lg-10 col-md-8 col-sm-12 m-auto">
                                 <div class="row shipping-btns1">
                                   <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                                       <router-link class="text-decoration-none forgot-pass" to='/ClientInformation'>
                                     <Button  class="text-uppercase login-btn next previous-btn shipping-address-btn shipping-btn-sm">Previous</Button>
                                  </router-link>  
                                    </div>
                                     <div class="col-lg-6 col-md-12 col-12 mb-2 text-lg-end text-md-center text-sm-start">
                                      <router-link class="text-decoration-none forgot-pass" to='#'>
                                      <Button  class="text-uppercase create-btn next shipping-address-btn shipping-btn-sm">Finish</Button>
                                  </router-link>
                                    </div>
                                 </div>
                                 <div class="row mt-3">
                                    <div class="col-lg-12 col-md-12 col-12">
                                       <school-name :getUserSchoolname="getSchoolname" class="shipping-firstname validation-component"/>
                                    </div>
                                 
                                 </div>
                                 <Address :getAddress="getAddress1" class="validation-component"/>
                                 <Address2 :getAddress2nd="getAddress2" class="validation-component"/>
                                 <Appartment :getAppNumber="getAppartmentNumber" class="validation-component"/>
                                 <div class="row">
                                     <div class="col-lg-4 col-md-6 col-sm-12">
                                             <City :getCity="getCityName" class="validation-component"/>
                                     </div>
                                       <div class="col-lg-4 col-md-6 col-sm-12">
                                              <State :getState="getStateName" class="validation-component"/>
                                     </div>
                                       <div class="col-lg-4 col-md-6 col-sm-12">
                                           <Zip :getZip="getZipCode" class="validation-component"/>
                                     </div>
                                 </div>
                                   <div class="row">
                                     <div class="col-lg-8 col-md-8 col-12">
                                         <Phone :getPhone="getPhoneNumber" class="text-nowrap validation-component"/>
                                     </div>
                                     <div class="col-lg-4 col-md-4 col-12 mb-3">  
                                         <validation-provider
                                             name="QR"                                    
                                             class="text-start p-0 m-0"
                                          >
                                    <b-form-group id="example-input-group-26" label="QR" label-for="example-input-26" class="checkbox-label">
                                       <b-form-checkbox  class="checkbox-toggle qr-checkbox-toggle mt-1" v-model="form.checked" @click="toggleIndeterminate"></b-form-checkbox>
                                    </b-form-group>
                                 </validation-provider>
                                     </div>
                                 </div>
                                  <div class="row shipping-btns1 mt-3">
                                   <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                                       <router-link class="text-decoration-none forgot-pass" to='/ClientInformation'>
                                     <Button  class="text-uppercase login-btn next previous-btn shipping-address-btn shipping-btn-sm">Previous</Button>
                                  </router-link>  
                                    </div>
                                     <div class="col-lg-6 col-md-12 col-12 mb-2 text-lg-end text-md-center text-sm-start">
                                      <router-link class="text-decoration-none forgot-pass" to='#'>
                                      <Button  class="text-uppercase create-btn next shipping-address-btn shipping-btn-sm">Finish</Button>
                                  </router-link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </b-form>
                     </validation-observer>
                  </div>
                 </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import axios from 'axios'
   import Button from './reusable/Button.vue';
   import Address from './reusable/Validation/Address.vue';
   import Address2 from './reusable/Validation/Address2.vue';
   import Appartment from './reusable/Validation/Appartment.vue';
   import City from './reusable/Validation/City.vue';
   import State from './reusable/Validation/State.vue';
   import Zip from './reusable/Validation/Zip.vue';
   import Phone from './reusable/Validation/Phone.vue';
import SchoolName from './reusable/Validation/SchoolName.vue';


export default {
    components:{
    Button,
    Address,
    Address2,
    Appartment,
    City,
    State,
    Zip,
    Phone,
        SchoolName,

},
    name:'Home',
    data(){
       return{
           form: {
             id: '',
             address1:'',
             address2:'',
             appNumber:'',
             city:'',
             state:'',
             zip:'',
             phone:'',
             schoolname:'',
             checked:false
           },
           schooladdress: [],
           loading: false,
           updateSubmit: false
       }
     },
     mounted(){
       this.load();
     },
      methods: {
 
            getSchoolname(schoolname){
               this.form.schoolname = schoolname
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
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
  
       onSubmit() {
         
         alert("Form submitted!");
       },
       load(){
     		axios({
     			method: 'get',
     			url: 'http://localhost:3000/schooladdress/'
     		})
     		.then(res => {
     			this.schooladdress = res.data 
     		})
     		.catch ((err) => {
     			this.alertError()
     		})
       },
       add(){
       	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/schooladdress/',
     		  data: this.form
   		  })
         .then(res => {
           this.load()
           this.form.schoolname ='',
           this.form.address1 = '',
           this.form.address2 = '',
           this.form.appNumber ='',
           this.form.city ='',
           this.form.state ='',
           this.form.zip ='',
           this.form.phone= ''
           this.alertSuccess()
         })
       },
       edit(user){ 
         this.updateSubmit = true
         this.form.id = user.id,
         this.form.schoolname = user.schoolname,
         this.form.address1 = user.address1,
         this.form.address2 = user.address2,
         this.form.appNumber = user.appNumber,
         this.form.city = user.city,
         this.form.state = user.state,
         this.form.zip = user.zip,
         this.form.phone = user.phone
        
       },
       update(form){
       	axios({
     		  method: 'put',
     		  url: 'http://localhost:3000/schooladdress/' + form.id,
     		  data: {id: form.id, schoolname:this.form.schoolname, address1: this.form.address1, address2: this.form.address2, appNumber:this.form.appNumber, city: this.form.city, state:this.form.state, zip:this.form.zip, phone: this.form.phone }
   		  })
         .then(res => {
           this.load()
           this.form.id = ''
           this.form.schoolname =''
           this.form.address1 = ''
           this.form.address2 = ''
           this.form.appNumber = ''
           this.form.city =''
           this.form.state =''
           this.form.zip = ''
           this.form.phone =''
           this.updateSubmit = false
           this.alertSuccess()
         })
       },
       del(user){
          if (confirm('Are you sure you want to delete the user?')) {
             axios({
                           method: 'delete',
                           url: 'http://localhost:3000/schooladdress/' + user.id,	
                        })
                        .then(res =>{
                           this.load()
                           this.form.id = ''
                           this.form.schoolname =''
                           this.form.address1 = ''
                           this.form.address2 = ''
                           this.form.appNumber =''
                           this.form.city =''
                           this.form.state =''
                           this.form.zip = ''
                           this.form.phone =''
                           this.updateSubmit = false
                           let index = this.schooladdress.indexOf(this.form.id)
                           this.schooladdress.splice(index,1)
                           this.alertSuccess()
                        });

                  };
              
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
        toggleIndeterminate() {
        this.indeterminate = !this.indeterminate
      }
          
   
     }
};
</script>

