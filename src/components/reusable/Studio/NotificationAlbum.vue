<template>
   <div>
      <div class="row">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div" id="notificationAlbum">
            <form @submit.prevent="send()">
               <div class="row">
                  <div class="form-group">
                     <div>
                        <div class="text-center">
                           <p class="watermark-header text-uppercase">Album notification settings</p>
                        </div>
                        <div class="row">
                           <div class="col-lg-6">
                              <span class="album-txt">Send Complition Notifications to</span>
                              <v-select class="mb-3 selected-options albums-select" v-model="selectedComplition" :options="optionsComplition" label="text">
                                 <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                       <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                 </template>
                              </v-select>
                           </div>
                           <div class="col-lg-6">
                              <span class="album-txt">Album Acceptance and Approvals</span>
                              <v-select class="mb-3 selected-options albums-select" v-model="selectedApproval" :options="optionsApproval" label="text">
                                 <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                       <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                 </template>
                              </v-select>
                           </div>
                           <div class="text-center">
                              <Button class="text-uppercase create-btn w-auto mt-4 albums-save-btn">Save</Button>
                           </div>
                        </div>
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
 import Button from '../Button.vue'
export default {
 components:{
        Button,
      },
 data() {
      return {
        selectedComplition:['Select'],
        optionsComplition:[
          { value: 'a', text: 'Both Studio and Client' },
          { value: 'b', text: 'Studio only' },
          { value: 'c', text: 'Client only'}
        ],
       selectedApproval:['Select'],
        optionsApproval:[
          { value: 'a', text: 'Client and View Directly' },
          { value: 'b', text: 'Studio Must Accept Before Client' },
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
