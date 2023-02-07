<template>
   <div id="clientInformation2">
      <div class="">
         <div class="row">
            <div class="col-lg-2 col-md-3 d-lg-block d-sm-block d-none left-sidebar">
               <div class="circle-div">
                  <div class="main-circle">
                     <div class="blue-circle">
                        <img src="../assets/icons/white.png" alt="tricolor-icon-white">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-10 col-md-9 col-sm-12">
               <div class="login container text-center">
                  <div class="m-auto mt-3 tricolor-logo">
                     <img class="w-100 mt-5" src="../assets/icons/TRICOLOR CENTER.png" alt="tricolor-logo">
                     <h1 class="text-uppercase page-name mt-3">Client information</h1>
                  </div>
                  <div class="container mt-3">
                     <validation-observer ref="observer" v-slot="{ handleSubmit }">
                        <b-form @submit.stop.prevent="handleSubmit(add)">
                           <validation-observer ref="observer" v-slot="{ handleSubmit }">
                              <b-form @submit.stop.prevent="handleSubmit(add)">
                                 <div class="row">
                                    <div class="col-lg-8 m-auto">
                                       <UserName :getUser="getUserName" class="validation-component"/>
                                       <Password :getPassword="getUserPassword" class="validation-component"/>
                                       <ConfirmPassword :getConfirmPassword="getUserConfirmPassword" class="validation-component"/>
                                         <b-form-group id="example-input-group-2" label="Email" label-for="example-input-2"   class="shipping-label container form-labels email-label pl-2 text-start">
                                          <div class="row" >
                                             <div class="col-lg-11 col-md-10 col-9 pr-0"><Email :getEmail="getUserEmail"/></div>
                                             <div class="col-lg-1 col-md-2 col-2 p-0 add-btn-div">
                                                <button class="mt-1 add-email" @click="addRow()">
                                                    <img src="../assets/icons/plus.png" alt="plus">
                                                </button>
                                             </div>
                                          </div>
                                            <div v-for="(row, index) in rows" :key="index" class="row">
                                          <div class="col-lg-11 col-md-10 col-9 pr-0">
                                             <Email v-model="row.title" class="validation-component"/>  
                                          </div>
                                          <div class="col-lg-1 col-md-2 col-2 p-0 add-btn-div">
                                                <button class="mt-1 delete-email pe-auto" v-on:click="removeElement(index)">
                                                   <img src="../assets/icons/minus.png" alt="minus">
                                                </button>
                                          </div>  
                                       </div>
                                       </b-form-group>
                                       <Firstname :getUserFirstname="getFirstname" class="validation-component"/>
                                       <Lastname :getUserLastname="getLastname" class="validation-component"/>
                                    </div>
                                 </div>
                              </b-form>
                           </validation-observer>
                           <Button type="submit" variant="primary" class="text-uppercase create-btn next mb-5">Next</Button>
                           <b-button class="btn btn-primary" type="button" v-show="updateSubmit" @click="update(form)">Delete</b-button>
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
   import UserName from './reusable/Validation/Username.vue';
   import Email from './reusable/Validation/Email.vue';
   import Password from './reusable/Validation/Password.vue';
   import ConfirmPassword from './reusable/Validation/ConfirmPassword.vue';
   import Firstname from './reusable/Validation/Firstname.vue';
   import Lastname from './reusable/Validation/Lastname.vue';


export default {
    components:{
    Button,
    UserName,
    Email,
    Password,
    ConfirmPassword,
    Firstname,
    Lastname
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
            firstname:'',
            lastname:'',   
           },
           rows: [],
           users: [],
           loading: false,
           updateSubmit: false
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
        getFirstname(firstname){
            this.form.firstname = firstname;
        },
         getLastname(lastname){
            this.form.lastname = lastname;
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
           this.form.username = ''
           this.form.email = ''
           this.form.password =''
           this.form.confirmPassword =''
           this.form.firstname =''
           this.form.lastname =''
           this.alertSuccess()
         })
       },
       edit(user){ 
         this.updateSubmit = true
         this.form.id = user.id 
         this.form.username = user.username 
         this.form.email = user.email 
         this.form.password = user.password
         this.form.confirmPassword = user.confirmPassword
         this.form.firstname = user.firstname
         this.form.lastname = user.lastname
       },
       update(form){
       	axios({
     		  method: 'put',
     		  url: 'http://localhost:3000/users/' + form.id,
     		  data: {id: form.id, username: this.form.username, email:this.form.email, password:this.form.password, confirmPassword:this.form.confirmPassword}
   		  })
         .then(res => {
           this.load()
           this.form.id = ''
           this.form.username = ''
           this.form.email = ''
           this.form.password =''
           this.form.confirmPassword = ''
           this.form.firstname = ''
           this.form.lastname = ''
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
                           this.form.username = ''
                           this.form.email = ''
                           this.form.password =''
                           this.form.confirmPassword =''
                           this.form.firstname = ''
                           this.form.lastname = ''
                           this.updateSubmit = false
                           let index = this.users.indexOf(this.form.username)
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
   addEmail(){
       	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
     		  data: this.form
   		  })
         .then(res => {
         //   this.load()
           this.form.username = ''
           this.form.email = ''
           this.form.password =''
           this.form.confirmPassword =''
         })

       },
     addRow: function() {
                    var elem = document.createElement('tr');
                    this.rows.push({
                        title: "",
                        description: "",
                        file: {
                            name: 'Choose File'
                        }
                    });
                },
                removeElement: function(index) {
                    this.rows.splice(index, 1);
                },
                setFilename: function(event, row) {
                    var file = event.target.files[0];
                    row.file = file
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

@media only screen and (max-width:991px){
  .email-label{
     padding: 0;
  }
}  
@media only screen and (max-width:375px){
   .add-email{
      width: 3.1rem;
   }
}
</style>