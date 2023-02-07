<template>
   <div id="login">
      <div class="">
         <div class="row">
            <div class="col-lg-4 col-md-5 d-lg-block d-md-block d-none left-sidebar">
               <p class="login-moto text-uppercase">Professional <br> Imaging <br> Center</p>
               <div class="circle-div">
                  <div class="main-circle">
                     <div class="blue-circle">
                        <img src="../assets/icons/white.png" alt="tricolor-icon-white">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-5 d-lg-none d-md-none d-block imaging-center-div">
               <p class="text-uppercase imaging-center-sm">Professional Imaging Center</p>
               <div class="circle-div-sm">
                  <div class="main-circle-sm">
                     <div class="blue-circle-sm">
                        <img src="../assets/icons/white.png" alt="tricolor-icon-white">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-8 col-md-7 col-12">
               <div class="login container text-center">
                  <div class="m-auto tricolor-logo">
                     <img class="w-100 mt-5" src="../assets/icons/TRICOLOR CENTER.png" alt="tricolor-icon">
                  </div>
                  <div class="container">
                     <validation-observer ref="observer" v-slot="{ handleSubmit }">
                        <b-form @submit.stop.prevent="handleSubmit(userLogin)" > 
                           <div class="row mt-5 ">
                                <p class="incorrect-data" id="incorrect-data" >

                                    
                                </p>
                              <div class="col-lg-6 col-md-6 col-12 right-sidebar login-form">
                                 <validation-provider
                                    name="Username"
                                    :rules="{ required: true, min: 3 }"
                                    v-slot="validationContext"
                                    >
                                    <b-form-group id="example-input-group-7" label="" label-for="example-input-7" class="login-input login-bg">
                                       <img src="../assets/icons/Group 40.png" alt="username-icon" class="login-icon">
                                       <b-form-input
                                          id="example-input-7"
                                          name="example-input-7"
                                          v-model="form.uname"
                                          :state="getValidationState(validationContext)"
                                         
                                          aria-describedby="input-7-live-feedback"
                                          class="border-0 input-username d-inline login-bg"
                                          placeholder="Username"
                                          ></b-form-input>
                                       <b-form-invalid-feedback class="feedback" id="input-7-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                       <div class="input-user pt-3"></div>
                                    </b-form-group>
                                 </validation-provider>
                                 <validation-provider rules="required" name="Password" vid="password" class="login-bg">
                                    <b-form-group 
                                       slot-scope="{ valid, errors }"
                                       label=""
                                       class="password-input login-bg" >
                                       <img src="../assets/icons/password.png" alt="password-icon"  class="login-icon">
                                       <b-form-input
                                          type="password"
                                          v-model="form.pass"
                                          :state="errors[0] ? false : (valid ? true : null)"
                                          class="border-0 input-username d-inline login-bg"
                                          placeholder="Enter password"
                                         >
                                       </b-form-input>
                                       <b-form-invalid-feedback>
                                          {{ errors[0] }}
                                       </b-form-invalid-feedback>
                                    </b-form-group>
                                 </validation-provider>
                              </div>
                           </div>
                           <div class="row col-lg-6 col-md-8 col-12 right-sidebar px-0 mt-4 mx-auto">
                              <div class="col-lg-4 col-md-12 col-12 text-start px-0 login-checkbox">
                                 <input
                                    type="checkbox"
                                    v-model="form.remember"
                                    class="checkbox"
                                    id="clickme"
                                    >
                                    <label  class="remember-checkbox" for="clickme">Remember me
                                    </label>
                              </div>
                              <div class="col-lg-8 col-md-12 col-12 px-0 forgot-password">
                                 <router-link class="text-decoration-none forgot-pass" v-b-modal.forgot-pass to='#'>Forgot your Password / Username?</router-link>
                              </div>
                              <b-modal id="forgot-pass" size="md" scrollable  centered title="Forgot your password / username ?">
                                 <div>
                                    <div class="row">
                                       <validation-observer ref="observer" v-slot="{ handleSubmit }">
                                          <b-form @submit.stop.prevent="handleSubmit(sendEmail)" > 
                                             <Email :getEmail="getUserEmail"/>
                                             <button type="submit" class="text-uppercase create-btn w-auto create-modal">Send</button>
                                          </b-form>
                                       </validation-observer>
                                       
                                    </div>
                                 </div>
                              </b-modal>
                           </div>
                           <div class="row col-lg-6 col-md-8 col-12  px-0 m-auto">
                              <div class="col-lg-6 col-md-12 col-12 pl-0 create-btn-div create-account create-btn-sm">
                                  <router-link class="text-decoration-none forgot-pass" to='/SignUp'>
                                     <Button class="text-uppercase create-btn btn-media">Create an account</Button>
                                  </router-link>
                              </div>
                              <div class="col-lg-6 col-md-12 col-12 pr-0 login-btn-div login-media">
                                   <Button type="submit" variant="primary" class="text-uppercase login-btn next mb-5 btn-media">
                                    Login 
                                   </Button>
                              </div>
                           </div>
                           <div class="copyright">
                              <span>Copyright <span class="copy">&copy;</span> 2022 Studioseye.com. All rights reserved. </span>
                           </div>
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
   import Username from './reusable/Validation/Username.vue';
   import UserInfo from './reusable/UserInfo'
   
   export default {
    components:{
    Button,
    UserName,
    Email,
    Password,
    ConfirmPassword,
    Username,
    UserInfo
},
    name:'Home',
    data(){
      return{
     form:{
         uname: '',
         pass: '', 
         remember:false,
         email: '',
     },
        users: [],
        loading: false,
        updateSubmit: false,
       err: false,
      vm: null,
      info: null,
    
       }

     },
     beforeCreate(){
    const user = new UserInfo();
   let token =  $cookies.get('token');
     if ( token != null ) {
         user.setToken(token);
         const sendRequest = async () =>{
            try{
                const respUserType = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getusertypebytoken',
                    data: {
                        'token' : user.getToken(),
                    },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
               if(respUserType.status == 200){
                if(respUserType.data.user_type != ''){
                    user.setUserType(respUserType.data.user_type);
                  if(user.getUserType() == "ADMIN"){
                     this.$router.push({name:'Admin', params:{user}})
                  }if(user.getUserType() == "LAB"){
                     this.$router.push({name:'', params:{user}})
                  }if(user.getUserType() == "STUDIO"){
                      this.$router.push({name:'User', params:{user}})
                  }if(user.getUserType() == "CLIENT"){
                     this.$router.push({name:'UserPage', params:{user}})
                  }
                }
               }
            }
            catch(err){
                console.log(err.message);
            }
        };
        sendRequest();
     }
    
 
     },

      methods: {
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
       getUserEmail(email){
            this.form.email = email;
        },
       sendEmail(){
         axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/sendEmail/',
     		  data: {email:this.form.email}
   		  })
         .then(res => {
            console.log(res)
         })
         .catch ((err) => {
     			console.log(err)
     		})
       },
    
       userLogin(){
        const sendLoginRequest = async () =>{
            try{
                const response = await  axios({
                    method: 'post',
                    type: 'post',
                    url: 'http://dev.studioseye.com/api/login',
                    data: this.form,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                  });
                if(response.status == 200 ){

               const user = new UserInfo();
               user.setToken(response.data.token);
               user.setUserID(response.data.user_id);
               user.setUsername(response.data.username);
         
               if(user.getToken() != ''){
                const isCookieEnabled = navigator.cookieEnabled;
             
               if(isCookieEnabled){
                   $cookies.set('token', user.getToken());
                  //   user.getUserTypeByToken(user.getToken());
                      const sendRequest = async () =>{
            try{
                const respUserType = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getusertypebytoken',
                    data: {
                        'token' : user.getToken(),
                    },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
               if(respUserType.status == 200){
                if(respUserType.data.user_type != ''){
                    user.setUserType(respUserType.data.user_type);
                  if(user.getUserType() == "ADMIN"){
                     this.$router.push({name:'Admin', params:{user}})
                  }if(user.getUserType() == "LAB"){
                     this.$router.push({name:'', params:{user}})
                  }if(user.getUserType() == "STUDIO"){
                      this.$router.push({name:'User', params:{user}})
                  }if(user.getUserType() == "CLIENT"){
                     this.$router.push({name:'UserPage', params:{user}})
                  }
                }
               }
            }
            catch(err){
                console.log(err.message);
            }
        };
        sendRequest();

               }else{
                  alert('Please enable your cookies')
               }
                 
               }
            }

            }
            catch(err){
                console.log(err.message);
                
           
            }
        };
        sendLoginRequest();
       
    },
     }
};
</script>
<style>
/* left-sidebar */

.left-sidebar {
	min-height: 100vh;
	background-color: #223d8f;
	padding: 0 !important;
}


.login-moto {
	font-size: 1.7rem;
	color: #ffffff;
	background-color: #284292;
	padding: 2rem 2rem;
	position: absolute;
	top: 50%;
	left: 5.3em;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.login-bg{
   background: none!important;
}
.circle-div {
	position: absolute;
	top: 50%;
	left: 100%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.circle-div-sm{
    position: absolute;
    left: 2rem;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.blue-circle {
	width: 150px;
	height: 150px;
	border-radius: 85px;
	background-color: #223d8f;
	position: relative;
	right: -1.5rem;
	top: 1.5rem;
}
.blue-circle-sm{
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #223d8f;
    position: relative;
    right: -0.5rem;
    top: 0.5rem;
}
.blue-circle img, .blue-circle-sm img {
	width: 52%;
	position: absolute;
	top: 25%;
	left: 26%;
}

.main-circle {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: #ffffff;
}
.main-circle-sm{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffffff;
}
/* right-sidebar */

.right-sidebar {
	width: 80%;
	margin: auto;
}

.tricolor-logo {
	width: 30%;
   margin-top: 3rem!important;
}

.right-sidebar div {
	font-size: 15px;
	color: #393939;
	font-weight: 400;
   width: auto;
}

.remember-checkbox {
	padding-left: 0.5rem;
	position: relative;
	top: -0.5rem;
   font-size: 15px;
	line-height: 30px;
	font-weight: 400;
   cursor: pointer;
}

.login-checkbox {
	white-space: nowrap;
}

.invalid-feedback {
	text-align: start;
	color: #DC3545 !important;
   font-size: 14px!important;
   text-indent: 1.3rem;

}

.checkbox {
	width: 25px;
	height: 25px;
	border-radius: 5px;
	background-color: #ffffff;
	border: 0.5px solid #393939;
}

.login-form {
	min-width: 15rem;
	min-height: 170px;
	border-radius: 10px;
	filter: drop-shadow(0 0 11px rgba(159, 159, 159, 0.33));
	background-color: #ffffff;
}

.forgot-pass {
	font-size: 14px;
	line-height: 30px;
	color: #223d8f;
	font-weight: 400;
	position: relative;
	top: -0.2rem;
}

.user-icon {
	color: #9f9f9f;
	font-size: 24px;
}

.input-username {
	width: 95% !important;
	font-size: 19px !important;
	color: black !important;
	padding-left: 2rem !important;
	height: 40px;
	text-align: start;
   margin-right: -2rem;
}

.input-username:focus {
	box-shadow: none !important
}

.login-input {
	padding: 1rem 1rem 0 1rem;
}

.password-input {
	padding: 0 1rem;
}

.input-user {
	border-bottom: 1px solid #9F9F9F;
}

.create-btn {
	color: #223D8F !important;
	background: #fff !important;
}

.create-btn:hover {
	background: #223D8F !important;
	color: #fff !important;
}

.login-btn {
	width: -webkit-fill-available;
}

.footer-logo {
	width: 5rem;
	text-align: center;
}

.copyright {
	margin-top: 8rem;
}

.copyright span {
	font-size: 16px;
	color: #9f9f9f;
}

.copy {
	width: 17px;
	height: 17px;
}
.create-btn-sm{
   margin-top: 3rem!important;
}
.forgot-password {
	text-align: end;
}

.login-icon{
   width: 1.7rem;
}

.create-account{
   position: relative;
    top: 5px;
}
.login-media{
   margin-top:3rem!important
}
.imaging-center-div{
       background-color: #223d8f;
}
.imaging-center-sm{
   font-size: 12px;
    text-align: center;
    color: #ffffff;
    margin: 0;
    margin-right: -12px;
    height: 40px;
    padding-top: 10px;
}
.incorrect-data{
   color: #fc0000;
   font-size: 13px;
   display: none;
}
/* media */

@media only screen and (min-width:1700px){
   .right-sidebar div {
    width: inherit;
   }
}
@media only screen and (max-width:1224px){
   .btn-media{
    font-size: 12px;
    height: 50px;
    line-height: normal;
   }
   .signUp-details, .signUp-details-right {
    max-width: 296px;
    min-height: 365px;
   }
}
@media only screen and (max-width: 991px){
   .input-username{
          font-size: 14px !important;
}
   .login-icon {
    width: 1.3rem;
}
.login-media{
   margin-top: 1rem!important
}
.main-circle {
    width: 150px;
    height: 150px;
}
.blue-circle {
    width: 100px;
    height: 100px;
}

}

@media only screen and (max-width:919px) {
	.forgot-password {
		text-align: start !important;
	}

	.login-btn-div,
	.create-btn-div {
		padding: 0 !important;
	}

	.tricolor-logo {
		width: 77%;
      margin-top: 2rem!important;
	}
   .login-moto {
    font-size: 1.3rem;
   }
    .copyright {
    margin-top: 0rem;
   }
   .create-btn-sm{
      margin-top: 1rem!important;
   }
}

@media only screen and (max-width:767px) {
	.circle-div {
		top: 100% !important;
		left: 50% !important;
	}
   .main-circle-sm{
      margin-top:1rem
   }
}
@media only screen and (max-width:425px) {
	.input-username {
		padding-left: 0.5rem !important;
	}
   .copyright span {
    font-size: 12px;
   }
}
</style>