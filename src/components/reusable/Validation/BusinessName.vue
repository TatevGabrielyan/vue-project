<template>
   <div>
      <validation-provider
         name="Business name"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         >
         <b-form-group id="example-input-group-11" label="Business name" label-for="example-input-11" class="shipping-label form-labels pl-2 text-start">
            <b-form-input
               id="example-input-11"
               name="example-input-11"
               v-model="form.businessName"
               :state="getValidationState(validationContext)"
               aria-describedby="input-11-live-feedback"
               v-on:change="getBusinessName(form.businessName)"
               placeholder="Enter your business name"
               class="w-100"
               ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
             businessName: '',
     
           },
           users: [],
           loading: false,
           updateSubmit: false,
      }
  },
   mounted(){
      //  this.load();
     },
     methods: {
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
     },
  props:{
      getBusinessName:Function,
     
  }
};
</script>
