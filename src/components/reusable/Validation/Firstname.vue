<template>
   <div>
      <div>
      </div>
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
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             firstname: '',
     
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
      getUserFirstname:Function,
     
  }
};
</script>
<style>
#example-input-group-8{
   padding-left: 10px;
}
</style>