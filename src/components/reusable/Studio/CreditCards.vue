<template>
   <div>
      <div class="row">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div" id="creditCards">
            <p class="watermark-header text-uppercase">Credit Cards</p>
            <Button class="text-uppercase create-btn w-auto px-5 mt-3" v-b-modal.modal-CreditCards>Add payment method</Button>
            <div class="create-folder-modal">
               <b-modal id="modal-CreditCards" size="lg" scrollable  centered title="Add payment method">
                  <div>
                    <div class="row">
                        <div class="col-6">
                             <validation-provider
                                             name="Credit Card Number"
                                             :rules="{ required: true, min: 16 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="example-input-group-28" label="Credit Card Number" label-for="example-input-28" class="shipping-label" >
                                                <b-form-input
                                                   id="example-input-28"
                                                   name="example-input-28"
                                                   v-model="form.cardNumber"
                                                   :state="getValidationState(validationContext)"
                                                   aria-describedby="input-28-live-feedback"
                                                   placeholder="ex: 1111-1111-1111-1111"
                                                   class="w-100"
                                                   ></b-form-input>
                                                <b-form-invalid-feedback class="feedback" id="input-28-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                                          </validation-provider>
                        </div>
                        <div class="col-6">
                            <div class="row">
                              
                                <div class="">
                                    <validation-provider
                                             name="CVV"
                                             :rules="{ required: true, min: 3 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="example-input-group-30" label="Expiration Date and CVV Number" label-for="example-input-30" class="shipping-label cvv-lbl" >
                                                <div class="row">
                                                   <div class="col-1 p-0"></div>
                                                   <div class="col-4 p-0"></div>

                                                   <div class="col-4 p-0">
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
                                                   </div>
                                                </div>
                                               
                                                
                                             </b-form-group>
                                          </validation-provider>
                                </div>
                            </div>
                        </div>
                    </div>
                     <p class="billing-info mt-3">Billing Information</p>
                     <div class="row">
                        <div class="col-6">
                               <validation-provider
                                             name="name on the card"
                                             :rules="{ required: true, min: 3 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="nameOnTheCard" label="Name on The Card" label-for="nameOnTheCard" class="shipping-label" >
                                             <b-form-input
                                                         id="nameOnTheCard"
                                                         name="nameOnTheCard"
                                                         v-model="form.cardName"
                                                         :state="getValidationState(validationContext)"
                                                         aria-describedby="nameOnTheCard-feedback"
                                                         placeholder="ex: Card Name"
                                                         class="w-100"
                                                        ></b-form-input>
                                                        <b-form-invalid-feedback class="feedback" id="nameOnTheCard-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                              </validation-provider>
                        </div>
                        <div class="col-6">
                             <label for="select-event" class="should-select fw-bold">Country</label>   
                           <v-select class="select-v-type" id="select-event" v-model="selectedCountry" :options="optionsCountry" label="text">
                        <template #selected-option="{ text }" class="w-100">
                           <div style="" class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                        </div>

                     </div>

                     <div class="row">
                        <div class="col-6">
                           <validation-provider
                                             name="billing address 1"
                                             :rules="{ required: true, min: 3 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="billingADdress1" label="Billing Address 1" label-for="billingADdress1" class="shipping-label" >
                                             <b-form-input
                                                         id="billingADdress1"
                                                         name="billingADdress1"
                                                         v-model="form.billingAddress1"
                                                         :state="getValidationState(validationContext)"
                                                         aria-describedby="billingADdress1-feedback"
                                                         placeholder="Billing Address 1"
                                                         class="w-100"
                                                        ></b-form-input>
                                                        <b-form-invalid-feedback class="feedback" id="billingADdress1-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                              </validation-provider>
                        </div>
                        <div class="col-6">
                            <City :getCity="getCityName" class="validation-component"/>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-6">
                           <validation-provider
                                             name="billing address 2"
                                             :rules="{ required: true, min: 3 }"
                                             v-slot="validationContext"
                                             >
                                             <b-form-group id="billingADdress2" label="Billing Address 2" label-for="billingADdress2"  >
                                             <b-form-input
                                                         id="billingADdress2"
                                                         name="billingADdress2"
                                                         v-model="form.billingAddress2"
                                                         :state="getValidationState(validationContext)"
                                                         aria-describedby="billingADdress2-feedback"
                                                         placeholder="Billing Address 2"
                                                         class="w-100"
                                                        ></b-form-input>
                                                        <b-form-invalid-feedback class="feedback" id="billingADdress2-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                                             </b-form-group>
                              </validation-provider>
                        </div>
                        <div class="col-6">
                           <div class="row">
                              <div class="col-6 pt-0">
                                  <State :getState="getStateName" class="validation-component"/>
                              </div>
                              <div class="col-6 pt-0">
                                   <Zip :getZip="getZipCode" class="validation-component"/>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-6"></div>
                        <div class="col-6">
                            <Phone :getPhone="getPhoneNumber" class="text-nowrap validation-component"/>
                        </div>
                     </div>
                   
                     <div class="text-center">
                        <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal finish px-5 mt-4" @click="$bvModal.hide('modal-CreditCards')">Save payment method</button>
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
import City from '../Validation/City.vue';
import State from '../Validation/State.vue';
import Zip from '../Validation/Zip.vue';
import Phone from '../Validation/Phone.vue';


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
    City,
    City,
    State,
    Zip,
    Phone
},
 
  data(){
      return{
           form: {
             id: '',
             cardNumber: '',
             city:'',
             state:'',
             zip:'',
             phone:'',
     
           },
           users: [],
           selectedCountry:['Select'],
            optionsCountry:[
          { value: 'a', text: 'Armenia' },
          { value: 'b', text: 'Georgia' },
          { value: 'c', text: 'Russia' },



        ],
        typesSelected:[]
      }
  },
   methods: {
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
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
   },
 }
</script>
<style>
   .billing-info{
      font-size: 17px;
      color: #393939;
      font-weight: 900;
   }
   .cvv-lbl label{
    font-size: 14px;
   }
   #modal-CreditCards___BV_modal_body_{
      overflow-x: hidden;
   }
</style>