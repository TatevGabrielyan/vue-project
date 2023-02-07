<template>
   <div>
      <validation-provider
         name="Username"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         >
         <b-form-group id="example-input-group-1" label="Username" label-for="example-input-1" class="shipping-label form-labels pl-2 text-start username-label">
            <b-form-input
               id="example-input-1"
               name="example-input-1"
               v-model="form.username"
               :state="getValidationState(validationContext)"
               aria-describedby="input-1-live-feedback"
               v-on:change="getUser(form.username)"
               placeholder="Enter your username"
               ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
       <validation-provider rules="required" name="Password" vid="password"  class="form-labels ">
         <b-form-group 
            slot-scope="{ valid, errors }"
            label="Password"
            class="pl-2 text-start shipping-label">
            <b-form-input
               type="password"
               v-model="form.password"
               :state="errors[0] ? false : (valid ? true : null)"
               placeholder="Enter a password"
               v-on:change="getPassword(form.password)"
               >
            </b-form-input>
            <b-form-invalid-feedback>
               {{ errors[0] }}
            </b-form-invalid-feedback>
         </b-form-group>
      </validation-provider>
      <validation-provider rules="required|confirmed:password" name="Confirm Password" class="form-labels">
         <b-form-group 
            slot-scope="{ valid, errors }"
            label="Confirm Password"
            class="pl-2 text-start shipping-label">
            <b-form-input
               type="password"
               v-model="form.confirmPassword"
               v-on:change="getConfirmPassword(form.confirmPassword)"
               :state="errors[0] ? false : (valid ? true : null)"
               placeholder="Confirm the password"
               >
            </b-form-input>
            <b-form-invalid-feedback>
               {{ errors[0] }}
            </b-form-invalid-feedback>
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
             username: '',
             password:'',
             confirmPassword:'',
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
      getUser:Function,
      getPassword:Function,
      getConfirmPassword:Function,
  }
};
</script>
<style>
 legend:after {
      content: "*";
      color: #fc0000;
      padding-left: 0.5rem;
   }
</style>
