<template>
   <div>
      <div>
      </div>
      <validation-provider
         name="Home phone"
         :rules="{ required: true, min: 7 }"
         v-slot="validationContext"
         style="text-align: start;"
         >
         <b-form-group id="homePhone" label="Home Phone" label-for="homePhone"  >
            <b-form-input
               id="homePhone"
               type="number"
               name="homePhone"
               v-model="form.homePhone"
               aria-describedby="input-17-live-feedback"
               class="border-0 d-inline"
               :state="getValidationState(validationContext)"
               placeholder="Home Phone"
               style="width: 100%!important;"
               v-on:change="getHomePhone(form.homePhone)"
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
             homePhone: '',
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
      getHomePhone:Function,
     
  }
};
</script>
