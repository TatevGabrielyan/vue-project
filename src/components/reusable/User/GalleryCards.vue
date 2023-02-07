<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div  client-top" id="galleryCardsTop">
            <p class="watermark-header text-uppercase">Client Cards</p>
            <Button class="text-uppercase create-btn w-auto px-5 mt-3" v-b-modal.modal-galleryCards>Create Card</Button>
            <div class="create-folder-modal">
               <b-modal id="modal-galleryCards" size="lg" scrollable  centered title="Create Card">
                  <div>
                     <label for="select-event" class="should-select">Select Event
                     </label>   
                     <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>                           
                     <v-select class="select-v-type" id="select-event" v-model="selectedEvent" :options="optionsEvent" label="text">
                        <template #selected-option="{ text }" class="w-100">
                           <div style="" class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                     <validation-provider
                        name="card-name"
                        :rules="{ required: true, min: 5 }"
                        v-slot="validationContext"
                        >
                        <b-form-group id="card-name"  class="shipping-label  form-labels pl-2-lg text-start album-name-label mt-3">
                           <label for="select-event" class="should-select">Select Event
                           <span class="version-exists">(This Card Name Already Exists)</span>
                           </label>   
                           <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>            
                           <b-form-input
                              id="card-name"
                              name="card-name"
                              v-model="form.cardName"
                              :state="getValidationState(validationContext)"
                              aria-describedby="card-name"
                              v-on:change="getUserFirstname(form.cardName)"
                              placeholder="ex: My Card"
                              class="w-100"
                              ></b-form-input>
                           <b-form-invalid-feedback id="card-name">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                        </b-form-group>
                     </validation-provider>
                     <label for="select-event" class="should-select">Card Version
                     <span class="version-exists">(This Card Version Already Exists)</span>
                     </label>   
                     <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>                           
                     <v-select class="select-v-type" id="select-event" v-model="selectedCardVersion" :options="optionsCardVersion" label="text">
                        <template #selected-option="{ text }" class="w-100">
                           <div style="" class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                     <ValidationProvider
                        slim
                        v-slot="{ errors, classes }"
                        rules="required:1,Must select only one day of the week for playing"
                        >
                        <div :class="classes">
                           <label for="select-event" class="should-select mt-3">Select Type </label>  
                           <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span> 
                           <div class="checks">
                              <span class="pr-5">
                              <input type="checkbox" id="vertical" class="select-all" value="0"  v-model="typesSelected" >
                              <label for="vertical" class="text-capitalize mb-3 shared"><span class="ship-label type-label">Vertical</span></label>
                              </span>
                              <span>
                              <input type="checkbox" id="horizontal" class="select-all" value="1"  v-model="typesSelected" >
                              <label for="horizontal" class="text-capitalize mb-3 shared"><span class="ship-label type-label">Horizontal</span></label>
                              </span>
                           </div>
                           <span class="help-block" v-if="errors[0]"> {{ errors[0] }}</span>
                        </div>
                     </ValidationProvider>
                     <validation-provider
                        name="card-description"
                        >
                        <b-form-group id="card-name"  class=" form-labels pl-2-lg text-start album-name-label mt-3">
                           <label for="select-event" class="">Card Description  
                           </label>   
                           <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>            
                           <b-form-input
                              id="card-description"
                              name="card-description"
                              v-model="form.albumDesc"
                              aria-describedby="card-description"
                              v-on:change="getUserFirstname(form.cardDesc)"
                              placeholder="My Card"
                              class="w-100"
                              ></b-form-input>
                        </b-form-group>
                     </validation-provider>
                     <validation-provider
                        name="card-comments"
                        >
                        <b-form-group id="card-name"  class=" form-labels pl-2-lg text-start album-name-label mt-3">
                           <label for="select-event" class="">Card Comments  
                           </label>   
                           <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>            
                           <b-form-input
                              id="card-comments"
                              name="card-comments"
                              v-model="form.albumComments"
                              aria-describedby="card-comments"
                              v-on:change="getUserFirstname(form.cardComments)"
                              placeholder="My Card"
                              class="w-100"
                              ></b-form-input>
                        </b-form-group>
                     </validation-provider>
                     <div class="text-center">
                         
                        <Button class="text-uppercase create-btn w-auto px-5 mt-4" v-b-modal.modal-nextStep>Next step</Button>
                         <b-modal id="modal-nextStep" size="lg" scrollable  centered title="Create card">
                            <p class="modal-second-header">All Images Must be the Same Size</p>
                            <div>
                                <p class="select-cover">Select Cover</p>
                                <div class="browse-div">
                                    
                                 <Button class="text-uppercase create-btn browse-btn">Browse</Button>
                             
                                </div>
                            </div>
                            
                            <div>
                                <p class="select-cover mt-3">Select Spread</p>
                                <div class="browse-div">
                                    
                                 <Button class="text-uppercase create-btn browse-btn">Browse</Button>
                             
                                </div>
                            </div>
                            <div class="text-center mt-3">
                              <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal save"  @click="$bvModal.hide('modal-nextStep');$bvModal.hide('modal-galleryCards'); ">Save</button>
                            </div>
                        </b-modal>
                     </div>
                  </div>
               </b-modal>
            </div>
         </div>
         <div class="col-lg-3">
         </div>
         
         <div class="col-lg-9 text-start" id="galleryCards">
             
             <div class="d-flex justify-content-between flex-wrap galleryAlbums-header">
                 
                <p class="text-uppercase not-approved">Not approved</p>
                <p class="text-uppercase client-can-view">client can view directly</p>
                <p class="text-uppercase client-submit">Client submit</p>
                <p class="text-uppercase client-approval">Client approval</p>
             </div>
             <div class="row justify-content-center">
                <div class="col-lg-5 col-md-5 col-12 mt-3 albums-first-card">
                   <div class="row show-card albums-card">
                      <div class="card-square not-approved-square"></div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         <img src="../../../assets/icons/Mask Group 2.png" alt="card menu" class="w-100 albums-menu">
                         <p class="text-uppercase card-menus text-start mt-2 menu-version">Menu 1 ver 1</p>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         
                         <div class="row justify-content-center" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify Client
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify User
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Remove Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/close.png" alt="remove" class="remove-red-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Hide Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/hidden-grey.png" alt="hide" class="notify-icon">
                               </button>
                            </div>
                         </div>
                      </div>
                   
                   </div>
                </div>
                <div class="col-lg-5 col-md-5 col-12 mt-3">
                   <div class="row show-card albums-card">
                      <div class="card-square view-square"></div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         <img src="../../../assets/icons/Mask Group 2.png" alt="card menu" class="w-100 albums-menu">
                         <p class="text-uppercase card-menus text-start mt-2 menu-version">Menu 1 ver 1</p>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         
                         <div class="row justify-content-center" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify Client
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify User
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Remove Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/close.png" alt="remove" class="remove-red-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Hide Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/hidden-grey.png" alt="hide" class="notify-icon">
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div class="row mt-3 justify-content-center">
                <div class="col-lg-5 col-md-5 col-12 mt-3 albums-first-card">
                   <div class="row show-card albums-card">
                      <div class="card-square submit-square"></div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         <img src="../../../assets/icons/Mask Group 2.png" alt="card menu" class="w-100 albums-menu">
                         <p class="text-uppercase card-menus text-start mt-2 menu-version">Menu 1 ver 1</p>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         
                         <div class="row justify-content-center" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify Client
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify User
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Remove Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/close.png" alt="remove" class="remove-red-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Hide Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/hidden-grey.png" alt="hide" class="notify-icon">
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div class="col-lg-5 col-md-5 col-12 mt-3">
                   <div class="row show-card albums-card">
                      <div class="card-square approval-square"></div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         <img src="../../../assets/icons/Mask Group 2.png" alt="card menu" class="w-100 albums-menu">
                         <p class="text-uppercase card-menus text-start mt-2 menu-version">Menu 1 ver 1</p>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12">
                         
                         <div class="row justify-content-center" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify Client
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Notify User
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                               <img src="../../../assets/icons/211694_bell_icon.png" alt="notify" class="notify-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Remove Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/close.png" alt="remove" class="remove-red-icon">
                               </button>
                            </div>
                         </div>
                         <div class="row justify-content-center mt-4" >
                            <div class="col-lg-10 col-md-10 col-9 show-data show-gallery-cards ">
                               Hide Album
                            </div>
                            <div class="col-lg-1 col-md-2 col-2 add-btn-div p-0">
                               <button class="remove-images client-view-albums-icon">
                                  <img src="../../../assets/icons/hidden-grey.png" alt="hide" class="notify-icon">
                               </button>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
      </div>
   </div>
</template>
<script>
 import Button from '../Button.vue';
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Field is required"
});

extend("exact_length", {
  params: ["length", "message"],
  validate(val, { length, message }) {
    if (val.length !== Number(length))
      return message;

      return true;
  }
});


 export default{
      components:{
            Button,
      },
 
  data(){
      return{
           form: {
             id: '',
             cardName: '',
             cardDesc: '',
             cardComments: ''
     
           },
           users: [],
           selectedEvent:['Select'],
            optionsEvent:[
          { value: 'a', text: 'a' },
          { value: 'b', text: 'b' },
          { value: 'c', text: 'c' },
          { value: 'd', text: 'd' },

        ],
           selectedCardVersion:['Select'],
            optionsCardVersion:[
          { value: 'a', text: 'a' },
          { value: 'b', text: 'b' },
          { value: 'c', text: 'c' },
          { value: 'd', text: 'd' },

        ],
        typesSelected:[]
      }
  },
   methods: {
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },
   },
 }
</script>
<style>
    #card-name, #album-name{
    color: #FF0000 !important;
    font-size: 14px!important;

    }
</style>