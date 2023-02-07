<template>
   <div class="row pr-lg-0 pr-md-0 pr-0">
    <div class="col-lg-6 col-md-12 col-12 pr-lg-3 pr-md-0 pr-0">
          <validation-provider
         name="Firstname"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         >
         <b-form-group id="example-input-group-8" label="First Name" label-for="example-input-8" class="shipping-label form-labels pl-2-lg text-start">
            <b-form-input
               id="example-input-8"
               name="example-input-8"
               v-model="form.firstname"
               :state="getValidationState(validationContext)"
               aria-describedby="input-8-live-feedback"
               v-on:change="getUserFirstname(form.firstname)"
               placeholder="Enter your first name"
               ></b-form-input>
            <b-form-invalid-feedback id="input-8-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
    </div>
       <div class="col-lg-6 col-md-12 col-12 pr-lg-0 pr-md-0 pr-0">
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
   </div>
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             firstname: '',
             lastname: '',
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
      getUserFirstname:Function,
      getUserLastname:Function,
     
  }
};
</script>
<style>
#example-input-group-8{
   padding-left: 10px;
}
</style>