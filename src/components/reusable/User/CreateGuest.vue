<template>
    <div>
       <div class="row">
          <div class="col-lg-5 col-md-3 col-12"></div>
          <div class="col-lg-5 col-md-6 col-12 mytabs-div  client-top">
             <p class="watermark-header text-uppercase">Create Guest</p>
             <div class="create-folder-modal">
                <b-modal id="modal-createGuest" size="lg" scrollable  centered title="Guest Information">
                   <div>
                        <validation-observer ref="observer" v-slot="{ handleSubmit }">
                         <b-form @submit.stop.prevent="handleSubmit(add)">
                          <label for="select-email" class="should-select email-contact">Email</label>   
                           <Email :getEmail="getUserEmail" class="pl-2"/>
                           <Password :getPassword="getUserPassword" class="validation-component pass-valid" />
                            <ConfirmPassword :getConfirmPassword="getUserConfirmPassword" class="validation-component pass-valid"/>
                            <div class="row">
                                <div class="col-6">
                                    <Firstname :getUserFirstname="getFirstname" class="validation-component firstname-contact"/>
                                </div>
                                <div class="col-6">
                                    <Lastname :getUserLastname="getLastname" class="validation-component lastname-contact pl-2"/>
                                </div>
                            </div>
                       
                          
                         </b-form>
                         </validation-observer>
                    
                     <div class="text-center">
                          
                         <Button class="text-uppercase create-btn w-auto px-5 mt-4" v-b-modal.modal-nextStepToClientAddress>Next step</Button>
                          <b-modal id="modal-nextStepToClientAddress" size="lg" scrollable  centered title="Client address">
                            <div class="row">
                             <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                              <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal save"  @click="$bvModal.hide('modal-nextStepToClientAddress'); ">Previous</button>
                                
                                    </div>
                                     <div class="col-lg-6 col-md-12 col-12 mb-2 text-lg-end text-md-center text-sm-start">
                                      <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal finish"  @click="$bvModal.show('modal-eventInformation');">Next</button>
                                    
                                    </div>
                           </div>
                               <Address :getAddress="getAddress1" class="validation-component"/>
                               <Address2 :getAddress2nd="getAddress2" class="validation-component"/>
                               <Appartment :getAppNumber="getAppartmentNumber" class="validation-component"/>
                               <div class="row">
                                  <div class="col-lg-4 col-md-12 col-sm-12">
                                           <City :getCity="getCityName" class="validation-component"/>
                                      </div>
                                      <div class="col-lg-4 col-md-12 col-sm-12 state-shipping">
                                           <State :getState="getStateName" class="validation-component"/>
                                      </div>
                                        <div class="col-lg-4 col-md-12 col-sm-12">
                                           <Zip :getZip="getZipCode" class="validation-component"/>
                                      </div>
                                      
                               </div>
                               <div class="row">
                                 <div class="col-lg-6 col-md-12 col-sm-12">
                                      <Phone :getPhone="getPhoneNumber" class="validation-component"/>
                                 </div>
                                 
                               </div>
                              
                               <div class="row">
                             <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                              <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal save"  @click="$bvModal.hide('modal-nextStepToClientAddress'); ">Previous</button>
                                
                                    </div>
                                     <div class="col-lg-6 col-md-12 col-12 mb-2 text-lg-end text-md-center text-sm-start">
                                      <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal finish"  @click="$bvModal.show('modal-eventInformation');">Next</button>
                                    
                                    </div>
                           </div>
                         </b-modal>
                         <b-modal id="modal-eventInformation" size="lg" scrollable  centered title="Event Information">
                            <div class="row">
                             <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                              <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal save"  @click="$bvModal.show('modal-nextStepToClientAddress');$bvModal.hide('modal-eventInformation');">Previous</button>
                                
                                    </div>
                                     <div class="col-lg-6 col-md-12 col-12 mb-2 text-lg-end text-md-center text-sm-start">
                                      <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal finish" @click="$bvModal.hide('modal-eventInformation');$bvModal.hide('modal-nextStepToClientAddress');$bvModal.hide('modal-createGuest');">Finish</button>
                                    
                                    </div>
                           </div>
                            <span class="pr-5">
                              <input type="checkbox" id="isSeperate" class="select-all" value="0"  v-model="isSeperate" >
                              <label for="isSeperate" class="text-capitalize mb-3 shared"><span class="ship-label type-label fw-bold">Seperate Shopping cart</span></label>
                              </span>
                            
                             <p  class="text-capitalize mb-3 shared shared-label" >Select Event</p>
                              <v-select class="mb-3 select-contact selected-options" v-model="selectedEvent" :options="optionsEvent" label="text">
                                       <template #selected-option="{ text }">
                                          <div style="display: flex; align-items: baseline;">
                                             <strong class=" select-payment">{{ text }}</strong>
                                          </div>
                                       </template>
                                    </v-select>
                                    <div class="row">
                             <div class="col-lg-6 col-md-12 col-12 text-lg-start text-md-center text-center mb-2">
                              <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal save"  @click="$bvModal.show('modal-nextStepToClientAddress');$bvModal.hide('modal-eventInformation');">Previous</button>
                                
                                    </div>
                                     <div class="col-lg-6 col-md-12 col-12 mb-2 text-lg-end text-md-center text-sm-start">
                                      <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal finish" @click="$bvModal.hide('modal-eventInformation');$bvModal.hide('modal-nextStepToClientAddress');$bvModal.hide('modal-createGuest');">Finish</button>
                                    
                                    </div>
                           </div>
                         </b-modal>
                      </div>
                   </div>
                </b-modal>
             </div>
          </div>
       </div>
    </div>
 </template>
 <script>
  import Button from '../Button.vue';
 import { extend } from "vee-validate";
 import { required } from "vee-validate/dist/rules";
 import Email from '../Validation/Email.vue';
 import Firstname from '../Validation/Firstname.vue';
 import Lastname from '../Validation/Lastname.vue';
 import Address from '../Validation/Address.vue';
 import Address2 from '../Validation/Address2.vue';
 import Appartment from '../Validation/Appartment.vue';
 import City from '../Validation/City.vue';
 import State from '../Validation/State.vue';
 import Zip from '../Validation/Zip.vue';
 import Phone from '../Validation/Phone.vue';
 import Password from '../Validation/Password.vue';
 import ConfirmPassword from '../Validation/ConfirmPassword.vue';
 
 extend("required", {
   ...required,
   message: "Field is required"
 });
 
 extend("exact_length", {
   params: ["length", "message"],
   validate(val, { length, message }) {
     if (val.length !== Number(length))
       return message;
 
       return true;
   }
 });
 
 
  export default{
       components:{
     Button,
     Email,
     Firstname,
     Lastname,
     Address,
     Address2,
     Appartment,
     City,
     State,
     Zip,
     Phone,
     Password,
     ConfirmPassword,
 },
  
   data(){
       return{
            form: {
              id: '',
                email: '',
                 firstname:'',
             lastname:'',   
              address1:'',
              address2:'',
              appNumber:'',
              city:'',
              state:'',
              zip:'',
              phone:'',
              password: '',
             confirmPassword: '',
            },
            isSeperate: false,
            users: [],
            selectedEvent:['Select'],
             optionsEvent:[
           { value: 'a', text: 'a' },
           { value: 'b', text: 'b' },
           { value: 'c', text: 'c' },
           { value: 'd', text: 'd' },
 
         ],
            selectedAlbumVersion:['Select'],
             optionsAlbumVersion:[
           { value: 'a', text: 'a' },
           { value: 'b', text: 'b' },
           { value: 'c', text: 'c' },
           { value: 'd', text: 'd' },
 
         ],
         typesSelected:[]
       }
   },
    methods: {
         getValidationState({ dirty, validated, valid = null }) {
          return dirty || validated ? valid : null;
        },
          getUserEmail(email){
             this.form.email = email;
         },
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
      
         getUserPassword(password){
            this.form.password = password;
        },
        getUserConfirmPassword(confirmPassword){
            this.form.confirmPassword = confirmPassword;
        },
              add(){
            axios({
                method: 'post',
              //   url: 'http://localhost:3000/clientInformation/',  should add new url
                data: this.form
              })
          .then(res => {
            this.load()
            this.form.email = '',
            this.form.firstname ='',
            this.form.lastname ='',
             this.form.address1 = '',
            this.form.address2 = '',
            this.form.appNumber ='',
            this.form.city ='',
            this.form.state ='',
            this.form.zip ='',
            this.form.phone= '',
            this.form.password =''
           this.form.confirmPassword =''
          })
              
        },
    },
  }
 </script>
<style>
    .pass-valid span fieldset div input{
        width:100%!important
    }
    #modal-eventInformation___BV_modal_content_{
        height:100vh
    }
</style>