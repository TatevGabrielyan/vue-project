<template>
   <div>
      <div>
      </div>
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
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             phone: '',
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
      getPhone:Function,
     
  }
};
</script>
