<template>
   <div id="shippingAddress">
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
                     <img class="w-100 mt-5" src="../assets/icons/TRICOLOR CENTER.png" alt="logo">
                     <h1 class="text-uppercase page-name mt-3">Address</h1>
                  </div>
                 <div class="col-lg-10 col-md-10 col-sm-12 m-auto">
                     <div class="container mt-5">
                     <validation-observer ref="observer" v-slot="{ handleSubmit }">
                        <b-form @submit.stop.prevent="handleSubmit(add)">
                           <div class="row">
                              <div class="col-lg-10 col-md-10 col-sm-12 m-auto">
                                 <div class="row shipping-btns1">
                                   <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                                       <router-link class="text-decoration-none forgot-pass" to='/BusinessInformation'>
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
                                    <BusinessName :getBusinessName="getBusiness"  class="validation-component pl-0"/>
                                    <User :getUserFirstname="getFirstname" :getUserLastname="getLastname" class="shipping-firstname validation-component"/>
                                 </div>
                                 <UserContact :getAddress="getAddress1" :getAddress2nd="getAddress2" :getAppNumber="getAppartmentNumber" :getCity="getCityName" :getState="getStateName" :getZip="getZipCode" :getPhone="getPhoneNumber" class="validation-component" />
                                  <div class="row shipping-btns1 mt-3">
                                  <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                                       <router-link class="text-decoration-none forgot-pass" to='/BusinessInformation'>
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
   import BusinessName from './reusable/Validation/BusinessName.vue';
   import UserContact from './reusable/Validation/UserContact.vue';

export default {
    components:{
    Button,
    User,
    BusinessName,
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
             businessName:'',
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
           getBusiness(businessName){
            this.form.businessName = businessName;
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
           this.form.phone= '',
           this.form.businessName=''
           this.alertSuccess()
         })
         .catch(err => {
            console.log(err)
         })
       },
     }
};
</script>

<style>
.page-name {
	font-size: 1.5em;
	color: #223d8f;
	font-weight: 700;
	font-family: "Montserrat";
}

.col-form-label {
	padding-left: 1.3rem;
	font-size: 16px !important;
   line-height: 30px;
}

.next {
	font-family: "Montserrat";
	width: 13rem;
	border: 3px solid #223d8f;
   font-size: 16px;
}

.previous-next-btns {
	display: flex;
	justify-content: space-between;
	padding: 0rem 1rem;
}

#example-input-group-13__BV_label_:after,
.example-input-group-14__BV_label_:after {
	content: "/";
	color: transparent;
}

label,
legend {
	font-size: 16px;
	line-height: 30px;
	color: #393939;
	font-weight: 600;

}

label {
	text-indent: 1rem;
}

.shipping-label {
	font-size: 20px;
	line-height: 30px;
	color: #393939;
	font-weight: 500;
	font-family: "Montserrat";
}

.shipping-firstname input,
.shipping-lastname input {
	width: 100% !important;
}
.shipping-address-btn{
   height: 49px!important;
}

.state-shipping {
	/* margin-left: -0.5rem; */
}
.shipping-firstname #example-input-group-8{
   padding: 0;
}
.validation-component{
   padding-bottom: 10px;
}
.shipping-btn-sm{
   width: 50%!important;
}
@media only screen and (max-width:991px){
  .page-name{
    font-size: 1em;
  }
}
@media only screen and (max-width:768px){
  .shipping-btn-sm{
    width: 100%!important;
  }
}
</style>