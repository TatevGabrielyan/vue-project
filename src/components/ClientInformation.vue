<template>
   <div id="clientInformation">
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
                     <h1 class="text-uppercase page-name mt-3">Client information</h1>
                  </div>
                  <div class="container mt-5">
                     <validation-observer ref="observer" v-slot="{ handleSubmit }">
                        <b-form @submit.stop.prevent="handleSubmit(add)">
                           <div class="row">
                              <div class="col-lg-8 col-md-8 col-12 m-auto clientInfoField">
                                 <v-select class="select-v-type select-client" v-model="form.selectedClient" :options="optionsClient" label="text">
                                    <template #selected-option="{ text }" class="w-100">
                                       <div style="" class="w-100">
                                          <strong class="select-strong w-100 strong-client" >{{ text }}</strong>
                                       </div>
                                    </template>
                                 </v-select>
                                 <UserValidation :getUser="getUserName" :getPassword="getUserPassword" :getConfirmPassword="getUserConfirmPassword" class="validation-component mt-3" />
                                 <b-form-group id="example-input-group-2" label="Email" label-for="example-input-2"   class="shipping-label container form-labels email-label pl-2 text-start">
                                    <div class="row" >
                                       <div class="col-lg-11 col-md-11 col-11 pr-0 pt-0">
                                          <Email :getEmail="getUserEmail"/>
                                       </div>
                                       <div class="col-lg-1 col-md-1 col-1 p-0 add-btn-div">
                                          <button class=" mt-1 add-email" @click="addRow()">
                                          <img src="../assets/icons/plus.png" alt="plus">
                                          </button>
                                       </div>
                                    </div>
                                 </b-form-group>
                                 <b-form-group id="example-input-group-2" label="" label-for=""   class="container form-labels email-label pl-2 text-start">
                                    <div v-for="(mail, index) in form.emails" :key="index" class="row">
                                       <div class="col-lg-11 col-md-11 col-11 pr-0 pt-0">
                                          <Email v-model="mail.title"  :getEmail="getUserEmail"/>
                                       </div>
                                       <div class="col-lg-1 col-md-1 col-1 p-0 add-btn-div">
                                          <button class="mt-1 delete-email pe-auto" v-on:click="removeElement(index);" >
                                          <img src="../assets/icons/minus.png" alt="minus">
                                          </button>
                                       </div>
                                    </div>
                                 </b-form-group>
                              </div>
                           </div>
                           <Button type="submit" variant="primary" class="text-uppercase create-btn next mb-5 clientNextBtn">
                           Next
                           </Button>
                        </b-form>
                     </validation-observer>
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
   import Email from './reusable/Validation/Email.vue';
   import UserValidation from './reusable/Validation/UserValidation.vue';


export default {
    components:{
    Button,
    Email,
    UserValidation
},
    name:'Home',
    data(){
       return{
           form: {
             id: '',
             username: '',
             email: '',
             password: '',
             confirmPassword: '',  
                selectedClient:['Client'],
                emails:[],
         
           },
           
           rows: [],
           clientInformation: [],
           loading: false,
           updateSubmit: false,
            optionsClient:[
          { value: 'a', text: 'Client' },
          { value: 'b', text: 'School' },
        ],
       }
     },
     mounted(){
       this.load();
     },
      methods: {
        getUserName(username){
            this.form.username = username;
        },
        getUserEmail(email){
            this.form.email = email;
        },
        getUserPassword(password){
            this.form.password = password;
        },
        getUserConfirmPassword(confirmPassword){
            this.form.confirmPassword = confirmPassword;
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
     			url: 'http://localhost:3000/clientInformation/'
     		})
     		.then(res => {
     			this.clientInformation = res.data 
     		})
     		.catch ((err) => {
     			this.alertError()
     		})
       },
       add(){
       	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/clientInformation/',
     		  data: this.form
   		  })
         .then(res => {
           this.load()
           this.form.username = ''
           this.form.email = ''
           this.form.password =''
           this.form.confirmPassword =''
           if(this.form.selectedClient == 'Client' || this.form.selectedClient.text == 'Client'){
             this.$router.push('/ShippingAddress2')
           }else if (this.form.selectedClient.text == 'School'){
             this.$router.push('/SChoolAddress')
           }else{
            console.log('error')
           }
           
         })
             
       },
       edit(user){ 
         this.updateSubmit = true
         this.form.id = user.id 
         this.form.username = user.username 
         this.form.email = user.email 
         this.form.password = user.password
         this.form.confirmPassword = user.confirmPassword
       },
       update(form){
       	axios({
     		  method: 'put',
     		  url: 'http://localhost:3000/clientInformation/' + form.id,
     		  data: {id: form.id, username: this.form.username, email:this.form.email, password:this.form.password, confirmPassword:this.form.confirmPassword}
   		  })
         .then(res => {
           this.load()
           this.form.id = ''
           this.form.username = ''
           this.form.email = ''
           this.form.password =''
           this.form.confirmPassword = ''
           this.updateSubmit = false
           this.alertSuccess()
         })
       },
       del(user){
          if (confirm('Are you sure you want to delete the data?')) {
             axios({
                           method: 'delete',
                           url: 'http://localhost:3000/clientInformation/' + user.id,	
                        })
                        .then(res =>{
                           this.load()
                           this.form.id = ''
                           this.form.username = ''
                           this.form.email = ''
                           this.form.password =''
                           this.form.confirmPassword =''
                           this.updateSubmit = false
                           let index = this.clientInformation.indexOf(this.form.username)
                           this.clientInformation.splice(index,1)
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
      
     addRow: function() {
                    var elem = document.createElement('tr');
                    this.form.emails.push(this.form.email)
                },
                removeElement: function(index) {
                    this.form.emails.splice(index, 1);
                },
                setFilename: function(event, mail) {
                    var file = event.target.files[0];
                    mail.file = file
                }
                  
      
   
     }
};
</script>

<style scoped>
   .page-name{
      font-size: 1.5em;
      color: #223d8f;
      font-weight: 700;
      font-family: "Montserrat";
   }
   .col-form-label {
      padding-left: 1.3rem;
      line-height: 30px;
   }
   
.add-email,
.delete-email {
	z-index: 2;
	cursor: pointer;
	color: white;
	background-color: #1e90ff;
	-webkit-transform: translateX(2px);
	width: 3.5rem;
	height: 49px;
	border-radius: 10px !important;
	background-color: #ffffff !important;
	border: 1px solid #223d8f !important;
	/* font-size: 2rem !important; */
	color: #223d8f !important;
	position: relative;
	top: 0.5rem;
	margin: 0 !important;
}
.add-email img{
   width: 20px;
}
   .add-email span, .delete-email span{
      font-size: 2.5rem;
    position: relative;
    top: -0.7rem;
   }
   .add-btn-div{
          margin-left: -0.8rem;
   }

   .delete-email{
      color: #FC0101!important;
          margin: 1rem;
   }
   .next{
    font-family: "Montserrat";
    width: 13rem;
    border: 3px solid #223d8f;
    font-size: 16px;
}
.validation-component{
   padding-bottom: 10px;
}
.select-client{
    width: 95%!important;
    margin-left: 8px;
}


.strong-client{
    position: relative;
    top: -5px;
}
.btn-next{
       color: #223d8f;
    text-decoration: none;
}
.create-btn:hover .btn-next{
color: #fff!important;
}
@media only screen and (max-width:991px){
  .email-label{
     padding: 0;
  }
  .page-name{
    font-size: 1em;
  }
  .add-btn-div {
    margin-left: -3rem;
  }
  .email-client{
   width: 96% !important;
  }

}
@media only screen and (max-width:375px){
   .add-email{
      width: 3.1rem;
   }
}
@media only screen and (max-width:325px){
   .clientInfoField{
          padding: 0;
   }
   .clientNextBtn{
       margin-top: 10px;
   }
}

</style>