<template>
   <div>
      <div>
      </div>
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
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             city: '',
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
      getCity:Function,
     
  }
};
</script>
