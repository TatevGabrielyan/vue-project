<template>
   <div>
      <div>
         <div class="row mt-lg-0 mt-5">
            <div class="col-lg-5 col-md-3 col-12"></div>
            <div class="col-lg-4 col-md-6 col-12 mt-2 mytabs-div client-top" id="imagePermissionsTop">
               <form @submit.prevent="send()">
                  <div class="row">
                     <div class="form-group">
                        <div>
                           <div class="text-center">
                              <p class="watermark-header text-uppercase">Image Permissions settings</p>
                              <span class="choose-watermark">Permission for Download</span>
                           </div>
                           <v-select class="mb-3 selected-options permission-sel" v-model="selectedOptions" :options="optionsSelect" label="text">
                              <template #selected-option="{ text }">
                                 <div style="display: flex; align-items: baseline;">
                                    <strong class="select-strong">{{ text }}</strong>
                                 </div>
                              </template>
                           </v-select>
                        </div>
                     </div>
                  </div>
                  <div class="form-group">
                     <Button class="text-uppercase create-btn mt-3 save-permissions-btn">Save</Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
 import axios from 'axios'
 import Button from "../Button.vue";
export default {
  components:{
    Button
},
 data() {
      return {
            selectedOptions:['Original Files'],
        optionsSelect:[
          { value: 'a', text: 'Original Files' },
          { value: 'b', text: 'Mid / Low Raw Images' },
          { value: 'c', text: 'Original and Mid / Low Res Images' },
          { value: 'd', text: 'Disabled Download' },

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
<style>
.save-permissions-btn{
    width: 10rem!important;
}
.permission-sel ul{
   top: 0.5rem!important;
}
</style>

