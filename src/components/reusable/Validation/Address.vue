<template>
   <div>
      <div>
      </div>
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
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             address1: '',
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
</style>