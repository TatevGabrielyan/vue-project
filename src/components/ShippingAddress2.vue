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
                                      <User :getUserFirstname="getFirstname" :getUserLastname="getLastname" class="shipping-firstname validation-component"/>
                                 </div>
                                     <UserContact :getAddress="getAddress1" :getAddress2nd="getAddress2" :getAppNumber="getAppartmentNumber" :getCity="getCityName" :getState="getStateName" :getZip="getZipCode" :getPhone="getPhoneNumber" class="validation-component" />
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
   import User from './reusable/Validation/User.vue';
   import UserContact from './reusable/Validation/UserContact.vue';


export default {
    components:{
    Button,
    User,
    UserContact
},
    name:'Home',
    data(){
       return{
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
             checked:false
           },
           users: [],
           loading: false,
           updateSubmit: false
       }
     },
     mounted(){
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
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
  
       onSubmit() {
         
         alert("Form submitted!");
       },
       load(){
     		axios({
     			method: 'get',
     			url: 'http://localhost:3000/users/'
     		})
     		.then(res => {
     			this.users = res.data 
     		})
     		.catch ((err) => {
     			this.alertError()
     		})
       },
       add(){
       	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
     		  data: this.form
   		  })
         .then(res => {
           this.load()
           this.form.firstname = '',
           this.form.lastname = '',
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
         this.form.firstname = user.firstname,
         this.form.lastname = user.lastname,
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
     		  url: 'http://localhost:3000/users/' + form.id,
     		  data: {id: form.id, firstname: this.form.firstname,lastname: this.form.lastname, address1: this.form.address1, address2: this.form.address2, appNumber:this.form.appNumber, city: this.form.city, state:this.form.state, zip:this.form.zip, phone: this.form.phone }
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
           this.updateSubmit = false
           this.alertSuccess()
         })
       },
       del(user){
          if (confirm('Are you sure you want to delete the user?')) {
             axios({
                           method: 'delete',
                           url: 'http://localhost:3000/users/' + user.id,	
                        })
                        .then(res =>{
                           this.load()
                           this.form.id = ''
                           this.form.firstname = ''
                           this.form.lastname = ''
                           this.form.address1 = ''
                           this.form.address2 = ''
                           this.form.appNumber =''
                           this.form.city =''
                           this.form.state =''
                           this.form.zip = ''
                           this.form.phone =''
                           this.updateSubmit = false
                           let index = this.users.indexOf(this.form.firstname)
                           this.users.splice(index,1)
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

<style>
.checkbox-toggle label:before,
.checkbox-toggle label:after {
	width: 45px !important;
	height: 45px !important;
	border-radius: 10px !important;
	border: none !important;
	padding: 0.5rem 0.1rem;
}

.checkbox-toggle label:before {
	filter: drop-shadow(0 0 11px rgba(159, 159, 159, 0.33));
}

#example-input-group-26__BV_label_ {
	margin: 0;
}
.qr-checkbox-toggle label:after{
       padding: 0.5rem 1.1rem;
}
@media only screen and (max-width:991px){
  .page-name{
    font-size: 1em;
  }
}
</style>