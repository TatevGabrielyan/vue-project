<template>
   <div>
      <validation-provider
         name="Lastname"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         >
         <b-form-group id="example-input-group-9" label="Last Name" label-for="example-input-9" class="shipping-label form-labels pl-sm-2 pl-md-0 pl-0 text-start">
            <b-form-input
               id="example-input-9"
               name="example-input-9"
               v-model="form.lastname"
               :state="getValidationState(validationContext)"
               aria-describedby="input-8-live-feedback"
               v-on:change="getUserLastname(form.lastname)"
               placeholder="Enter your last name"
               ></b-form-input>
            <b-form-invalid-feedback id="input-9-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
             lastname: '',
     
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
      getUserLastname:Function,
     
  }
};
</script>
