<template>
   <div>
      <div>
      </div>
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
</template>

<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             state: '',
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
      getState:Function,
     
  }
};
</script>
<style>
.state-label label{
   text-indent: 1.3rem;
   margin: 0;
       padding-bottom: 8px;
}
</style>