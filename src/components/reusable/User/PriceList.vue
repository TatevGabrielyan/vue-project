<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top">
            <form @submit.prevent="send()">
               <div class="row">
                  <div class="form-group">
                     <div>
                        <div class="text-center">
                           <p class="watermark-header text-uppercase">Choose your print price list</p>
                        </div>
                        <label for="select-event" class="text-start should-select watermark-select">Select Event </label>   
                        <v-select class="mb-3 watermark-select selected-options" v-model="selectedOptions" :options="optionsSelect" label="text">
                           <template #selected-option="{ text }">
                              <div style="display: flex; align-items: baseline;">
                                 <strong class="select-strong">{{ text }}</strong>
                              </div>
                           </template>
                        </v-select>
                        
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
 import axios from 'axios'
export default {

 data() {
      return {
            selectedOptions:['None'],
        optionsSelect:[
          { value: 'a', text: 'None' },
          { value: 'b', text: 'Logo' },
        ],
      
      }
 },
   methods: {
    send() {
      let obj3 ={
          check_items3: this.selectedOptions
      }
       console.log(obj3)
      	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
          obj3
              
   		  })
         .then(res => {
           console.log(res.data)
         })
    }
  }
 }
</script>
