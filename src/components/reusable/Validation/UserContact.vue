<template>
   <div>
    <div class="validation-line">
        <validation-provider
         name="Address1"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         style="  text-align: start; "
         >
         <b-form-group id="example-input-group-12" label="Address 1" label-for="example-input-12"
            class="shipping-label "  >
            <b-form-input
               id="example-input-12"
               name="example-input-12"
               v-model="form.address1"
               :state="getValidationState(validationContext)"
               aria-describedby="input-12-live-feedback"
               class="border-0  d-inline "
               placeholder="Enter your address"
               style="width: 100%!important;"
               v-on:change="getAddress(form.address1)"
               ></b-form-input>
            <b-form-invalid-feedback id="input-12-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
    </div>
    <div class="validation-line">
       <validation-provider
         name="Address2"
         style="  text-align: start"
         >
         <b-form-group id="example-input-group-13" label="Address 2" label-for="example-input-13" class="shipping-label address2" >
            <b-form-input
               id="example-input-13"
               name="example-input-13"
               v-model="form.address2"
               aria-describedby="input-13-live-feedback"
               class="border-0 d-inline"
               placeholder="Address 2"
               style="width: 100%!important;"
               v-on:change="getAddress2nd(form.address2)"
               ></b-form-input>
         </b-form-group>
      </validation-provider>
    </div>
    <div class="validation-line">
         <validation-provider
         name="Appartment number"
         class="text-start"
         >
         <b-form-group id="example-input-group-13" label="Appartment number" label-for="example-input-13" class="shipping-label address2 appartment-label" >
            <b-form-input
               id="example-input-13"
               name="example-input-13"
               type="number"
               v-model="form.appNumber"
               aria-describedby="input-14-live-feedback"
               class="border-0 d-inline"
               placeholder="Appartment number"
               style="width: 100%!important;"
               v-on:change="getAppNumber(form.appNumber)"
               ></b-form-input>
         </b-form-group>
      </validation-provider>
    </div>
    <div class="row">
         <div class="col-lg-6 col-md-12 col-sm-12">
          <validation-provider
         name="City"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         style="  text-align: start"
         >
         <b-form-group id="example-input-group-15" label="City" label-for="example-input-15" class="shipping-label" >
            <b-form-input
               id="example-input-15"
               name="example-input-15"
               v-model="form.city"
               aria-describedby="input-15-live-feedback"
               class="border-0 d-inline"
               :state="getValidationState(validationContext)"
               placeholder="City"
               style="width: 100%!important;"
               v-on:change="getCity(form.city)"
               ></b-form-input>
            <b-form-invalid-feedback id="input-15-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
     </div>
     <div class="col-lg-6 col-md-12 col-sm-12">
          <validation-provider
         name="State"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         style="text-align: start;"
         >
         <b-form-group id="example-input-group-16" label="State" class="shipping-label state-label" label-for="example-input-16" >
            <b-form-input
               id="example-input-16"
               name="example-input-16"
               v-model="form.state"
               aria-describedby="input-16-live-feedback"
               class="border-0 d-inline"
               :state="getValidationState(validationContext)"
               placeholder="State"
               style="width: 100%!important;"
               v-on:change="getState(form.state)"
               ></b-form-input>
            <b-form-invalid-feedback id="input-16-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
     </div>
    </div>
      <div class="row">
        <div  class="col-lg-6 col-md-12 col-sm-12">
       <validation-provider
         name="Zip code"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         style="  text-align: start"
         >
         <b-form-group id="example-input-group-25" label="Zip code" class="shipping-label state-label text-nowrap" label-for="example-input-25" >
            <b-form-input
               type="number"
               id="example-input-25"
               name="example-input-25"
               v-model="form.zip"
               aria-describedby="input-25-live-feedback"
               class="border-0  d-inline"
               :state="getValidationState(validationContext)"
               placeholder="Zip code"
               style="width: 100%!important;"
               v-on:change="getZip(form.zip)"
               ></b-form-input>
            <b-form-invalid-feedback id="input-25-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
        </div>
        <div  class="col-lg-6 col-md-12 col-sm-12">
              <validation-provider
         name="Phone number"
         :rules="{ required: true, min: 7 }"
         v-slot="validationContext"
         style="text-align: start;"
         >
         <b-form-group id="example-input-group-17" label="Phone number" label-for="example-input-17" class="shipping-label"  >
            <b-form-input
               id="example-input-17"
               type="number"
               name="example-input-17"
               v-model="form.phone"
               aria-describedby="input-17-live-feedback"
               class="border-0 d-inline"
               :state="getValidationState(validationContext)"
               placeholder="Phone number"
               style="width: 100%!important;"
               v-on:change="getPhone(form.phone)"
               ></b-form-input>
            <b-form-invalid-feedback id="input-17-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
        </div>
      </div>
      
   </div>
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             address1: '',
             address2: '',
             appNumber: '',
             city: '',
             state: '',
             zip: '',
             phone: '',
           },
           users: [],
           loading: false,
           updateSubmit: false,
      }
  },
     methods: {
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
     },
  props:{
      getAddress:Function,
      getAddress2nd:Function,
      getAppNumber:Function,
      getCity:Function,
      getState:Function,
      getZip:Function,
      getPhone:Function,
  }
};
</script>
<style>
.shipping-label{
    margin-bottom: 0.5rem;
}
.shipping-label label{
      text-indent: 1.3rem;
      line-height: 30px;
}
.shipping-label label:after {
    content: "*";
    color: #fc0000;
}
 .appartment-label label{
      white-space: nowrap;
   }
   .state-label label{
   text-indent: 1.3rem;
   margin: 0;
       padding-bottom: 8px;
}
.validation-line{
   margin-top: 25px;
}
</style>