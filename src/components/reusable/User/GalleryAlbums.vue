<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top" id="galleryAlbumsTop">
            <p class="watermark-header text-uppercase">Client Albums</p>
            <Button class="text-uppercase create-btn w-auto px-5 mt-3" v-b-modal.modal-galleryAlbums>Create Album</Button>
            <div class="create-folder-modal">
               <b-modal id="modal-galleryAlbums" size="lg" scrollable  centered title="Create album">
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
                        name="album-name"
                        :rules="{ required: true, min: 5 }"
                        v-slot="validationContext"
                        >
                        <b-form-group id="album-name"  class="shipping-label  form-labels pl-2-lg text-start album-name-label mt-3">
                           <label for="select-event" class="should-select">Select Event
                           <span class="version-exists">(This Album Name Already Exists)</span>
                           </label>   
                           <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>            
                           <b-form-input
                              id="album-name"
                              name="album-name"
                              v-model="form.albumName"
                              :state="getValidationState(validationContext)"
                              aria-describedby="album-name"
                              v-on:change="getUserFirstname(form.albumName)"
                              placeholder="ex: My Album"
                              class="w-100"
                              ></b-form-input>
                           <b-form-invalid-feedback id="album-name">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                        </b-form-group>
                     </validation-provider>
                     <label for="select-event" class="should-select">Album Version
                     <span class="version-exists">(This Album Version Already Exists)</span>
                     </label>   
                     <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>                           
                     <v-select class="select-v-type" id="select-event" v-model="selectedAlbumVersion" :options="optionsAlbumVersion" label="text">
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
                        name="album-description"
                        >
                        <b-form-group id="album-name"  class=" form-labels pl-2-lg text-start album-name-label mt-3">
                           <label for="select-event" class="">Album Description  
                           </label>   
                           <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>            
                           <b-form-input
                              id="album-description"
                              name="album-description"
                              v-model="form.albumDesc"
                              aria-describedby="album-description"
                              v-on:change="getUserFirstname(form.albumDesc)"
                              placeholder="My Album"
                              class="w-100"
                              ></b-form-input>
                        </b-form-group>
                     </validation-provider>
                     <validation-provider
                        name="album-comments"
                        >
                        <b-form-group id="album-name"  class=" form-labels pl-2-lg text-start album-name-label mt-3">
                           <label for="select-event" class="">Album Comments  
                           </label>   
                           <span><img src="../../../assets/icons/info.png" alt="info" class="info-img"></span>            
                           <b-form-input
                              id="album-comments"
                              name="album-comments"
                              v-model="form.albumComments"
                              aria-describedby="album-comments"
                              v-on:change="getUserFirstname(form.albumComments)"
                              placeholder="My Album"
                              class="w-100"
                              ></b-form-input>
                        </b-form-group>
                     </validation-provider>
                     <div class="text-center">
                         
                        <Button class="text-uppercase create-btn w-auto px-5 mt-4" v-b-modal.modal-nextStep>Next step</Button>
                         <b-modal id="modal-nextStep" size="lg" scrollable  centered title="Create album">
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
                                 <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal save"  @click="$bvModal.hide('modal-nextStep');$bvModal.hide('modal-galleryAlbums'); ">Save</button>
                            </div>
                        </b-modal>
                     </div>
                  </div>
               </b-modal>
            </div>
         </div>
         <div class="col-lg-3">
         </div>
         
         <div class="col-lg-9 text-start " id="galleryAlbums">
             
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
             albumName: '',
             albumDesc: '',
             albumComments: ''
     
           },
           users: [],
           selectedEvent:['Select'],
            optionsEvent:[
          { value: 'a', text: 'a' },
          { value: 'b', text: 'b' },
          { value: 'c', text: 'c' },
          { value: 'd', text: 'd' },

        ],
           selectedAlbumVersion:['Select'],
            optionsAlbumVersion:[
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
    /* main */

    .galleryAlbums-header{
        width: 97%;
    }
    .galleryAlbums-header p{
        font-weight: 600;
        font-size: 15px;
    }
    .not-approved{
        color: #FC0000;
        border-bottom: 1.5px solid #FC0000;
    }
    .client-can-view{
        color: #027F96;
        border-bottom: 1.5px solid #027F96;
    }
    .client-submit{
        color: #0092FF;
        border-bottom: 1.5px solid #0092FF;
    }
    .client-approval{
        color: #223D8F;
        border-bottom: 1.5px solid #223D8F;
    }
    .menu-version{
        text-indent:2rem
    }
    .card-square{
        width: 25px!important;
        height: 25px;
        position: absolute;
        top: -12px;
        left: -12px;
    }
    .not-approved-square{
        background: #FC0000;
    }
    .view-square{
        background: #027F96;
    }
    .submit-square{
        background: #0092FF;
    }
    .approval-square{
        background: #223D8F;
    }
    .albums-menu{
        height: 161px;
        object-fit: contain;
    }
    .albums-card{
        padding: 1rem!important;
    }
    .albums-first-card{
        margin-right: 2.5rem;
    }

    /* modals */

    .should-select{
        text-indent: 1.3rem;
        font-size: 15px;
        color: #393939;
        font-weight: 500;
    }
    .should-select::after{
        content: "*";
    color: #fc0000;
    }
    .info-img {
    padding-left: 0.5rem;
    width: 25px;
}
    .album-name-label label{
        font-size: 15px;
        color: #393939;
        font-weight: 500;
    }
    .version-exists{
        color: #ADADAD;
    }
    .type-label{
        font-weight: 500;
    }
    .modal-second-header{
        font-size: 16px;
        color: #393939;
    }
    .select-cover{
        font-size: 14px;
        color: #393939;
        font-weight: 600;
    }
    .browse-div{
        background: #ADADAD;
        min-height: 190px;
        position: relative;
        
    }
    .browse-btn{
        width: min-content!important;
        padding: 0 3.5rem;
        width: auto;
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%,-50%);
    }
    .save-next-modal{
        width: auto!important;
        padding: 0 4rem
    }
    .save{
      font-weight: bold;
    font-family: "Montserrat";
    border: 2px solid #223d8f;
    background: #223d8f;
    color: #fff;
    font-size: 13px;
    height: 50px;
    border-radius: 10px;
    }
    .save:hover{
      background: #fff;
    color: #223d8f;
    }
    /* media */

    @media only screen and (max-width:992px){
       .card-square{
        left: 0px;
    }  
    .menu-version{
        text-indent:0rem
    }
    }
    @media only screen and (max-width: 767px){
    
    .albums-first-card{
      margin-right: 0;
    }
    }
</style>