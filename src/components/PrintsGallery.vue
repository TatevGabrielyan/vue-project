<template>
   <div class="">
      <div class="mb-3">
         <div class="row">
            <b-navbar  type="dark" class=" py-0">
               <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
               <b-collapse id="nav-collapse" is-nav class="nav-collapse-gallery">
                  <b-navbar-nav class="ml-auto">
                  </b-navbar-nav>
               </b-collapse>
            </b-navbar>
         </div>
      </div>
      <div class="row">
         <div class="position-absolute">
            <b-button id="button-2" variant="" class="tooltip-btn p-0 d-lg-block" >
               <div class="logo user-logo">
                  <img src="../assets/icons/Group 1.png" alt="logo" class="">
               </div>
            </b-button>
         </div>
         <div class="main-header  items-col">
            <div class="d-flex justify-content-end flex-wrap">
               <button class="ordering-btn mr-5 mt-2">Ordering</button>
               <button class="back-to-btn mr-5 mt-2">Back to Galleries</button>
               <div class="items-prints text-end ">
                  <button class="border-0 bg-white " >
                     <div class="input-group justify-content-lg-end justify-content-sm-center items-justify"> 
                        <span class="input-icon" id="basic-addon1">
                        <img src="../assets/icons/basket.png" alt="">
                        </span>
                        <span class="divider"></span>
                        <input type="submit" class="your-items text-center" aria-describedby="basic-addon1" value="Your items">
                     </div>
                  </button>
               </div>
            </div>
         </div>
         <div class="hr-divider mt-2"></div>
      </div>
      <div class="container-fluid">
         <div class="row mt-3">
            <div class="col-lg-3 col-md-6 col-12">
               <div class="row d-flex justify-content-between">
                  <div class="col-6">
                     <v-select class="mb-4 selected-options" v-model="selectedName" :options="optionsName" label="text">
                        <template #selected-option="{ text }">
                           <div style="display: flex; align-items: baseline;">
                              <strong class="select-strong select-header ">{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                  </div>
                  <div class="col-6">
                     <v-select class="mb-4 selected-options" v-model="selectedPhotos" :options="optionsPhotos" label="text">
                        <template #selected-option="{ text }">
                           <div style="display: flex; align-items: baseline;">
                              <strong class="select-strong select-header">{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                  </div>
               </div>
               <div class="left-sidebar-gallery">
                  <div class="">
                     <div >
                        <b-form-checkbox  type="checkbox"  class="shared text-capitalize " id="selectAllImages"  @change="selectAllImages($event)" 
                           >
                           Select All photos
                        </b-form-checkbox>
                     </div>
                     <div class="left-sidebar-div mt-4">
                        <div v-for="(element) in list"
                           :key="element.id" ref="galleryItemId"
                           class="mb-2 left-sidebar-images"
                           >
                           <img  v-bind:src="element.src" class="w-100 unchecked-img" 
                              @click="selectImage($event)" ref="selectedImgLeft">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
               <div class="main-div">
                  <div class="main-cropper-img">
                     <img src="../assets/icons/KATANA_M2_mobile.png" alt="main-img" class="w-100" ref="selectedPhotos">
                  </div>
               </div>
               <div class="row mt-4 cropper-icons-div">
                  <div class="col-3"></div>
                  <div class="col-6 d-flex justify-content-around flex-wrap">
                     <img src="../assets/icons/8666657_crop_icon.png" class="cropper-icons" alt="crop">
                     <img src="../assets/icons/Group 113.png" class="cropper-icons" alt="rotate">
                     <img src="../assets/icons/fullscreen.png" class="cropper-icons" alt="fit">
                     <img src="../assets/icons/Layer_2.png" class="cropper-icons" alt="album">                
                  </div>
                  <div class="col-1"></div>
               </div>
               <div class="mt-5 mb-2 d-flex justify-content-between main-footer">
                  <button class="choose-files">Choose Files</button>
                  <b-form-checkbox  type="checkbox"  class="shared text-capitalize "  
                     v-model="holdImage"
                     >
                     Hold the Image
                  </b-form-checkbox>
               </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 print-sidebar">
               <p class="print-name">Print Lustre</p>
               <p class="print-amount">$6,99</p>
               <div>
                  <span class="size">Size</span>
                  <span class="selected-size">(4x6)</span>
               </div>
               <div>
                  <div class="row mb-3 mt-2">
                     <div class="col-6">
                        <button class="size-btn text-nowrap">
                        4x6 / $6.99
                        </button>
                     </div>
                     <div class="col-6">
                        <button class="size-btn-2nd ">
                        5x7 / $12.99
                        </button>
                     </div>
                  </div>
                  <div class="row mb-3">
                     <div class="col-6">
                        <button class="size-btn-2nd">
                        8x10 / $19.99
                        </button>
                     </div>
                     <div class="col-6">
                        <button class="size-btn-2nd ">
                        11x14 / $35.99
                        </button>
                     </div>
                  </div>
                  <p class="text-center view-sizes m-0" v-on:click="isHidden = !isHidden">
                     <span>View all Sizes</span>
                     <font-awesome-icon icon="angle-down" class="angle-down-icon"/>
                  </p>
                  <div v-if="!isHidden">
                     <div class="row mb-3
                        ">
                        <div class="col-6">
                           <button class="size-btn-2nd ">
                           12x18 / $45.99
                           </button>
                        </div>
                        <div class="col-6">
                           <button class="size-btn-2nd ">
                           16x20 / $65.99
                           </button>
                        </div>
                     </div>
                     <div class="row mb-3
                        ">
                        <div class="col-6">
                           <button class="size-btn-2nd ">
                           12x18 / $45.99
                           </button>
                        </div>
                        <div class="col-6">
                           <button class="size-btn-2nd ">
                           16x20 / $65.99
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="mt-3">
                  <span class="quantity">Quantity</span>
                  <div class="row mt-2">
                     <div class="col-lg-6 col-md-6 col-8">
                        <v-select class="mb-2 selected-options" v-model="selectedQuantity" :options="optionsQuantity" label="text">
                           <template #selected-option="{ text }">
                              <div style="display: flex; align-items: baseline;">
                                 <strong class="select-strong select-header">{{ text }}</strong>
                              </div>
                           </template>
                        </v-select>
                     </div>
                  </div>
                  <div class="mt-3">
                     <span class="size">Notes</span>
                  </div>
                  <b-form-textarea
                     id="textarea"
                     class="prints-textarea mt-3"
                     placeholder="Lorem ipsum is simply dummy text of the printing and typesetting industry"
                     rows="2"
                     max-rows="6"
                     ></b-form-textarea>
               </div>
               <div class="mt-4 text-center">
                  <button class="text-uppercase add-to-cart">Add to cart</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default{
    data(){
    return{
         selectedName:['Print Lustre'],
        optionsName:[
          { value: 'a', text: 'Print Lustre' },
          { value: 'b', text: '2' },
        ],
        selectedPhotos:['All Photos'],
        optionsPhotos:[
          { value: 'all', text: 'All photos' },
          { value: 'new', text: 'photo 1' },
        ],
         selectedPhoto: false,
           selectedQuantity:['Select quantity'],
        optionsQuantity:[
          { value: 'a', text: '1' },
          { value: 'b', text: '2' },
          { value: 'c', text: '3' },
          { value: 'd', text: '4' },
          { value: 'e', text: '5' },
          { value: 'f', text: '6' },

        ],
           list: [
        { id: 1, alt: "Image 001.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png' },
        { id: 2, alt: "Image 002.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png' },
        { id: 3, alt: "Image 003.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png' },
        { id: 4, alt: "Image 004.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png'  },
        { id: 5, alt: "Image 005.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png'},
        { id: 6, alt: "Image 006.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png' },
        { id: 7, alt: "Image 007.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png'  },
        { id: 8, alt: "Image 008.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png'  },
        { id: 9, alt: "Image 009.jpg",  src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png'  },
        { id: 10, alt: "Image 0010.jpg", src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png'  },
        { id: 11, alt: "Image 0011.jpg", src:'http://localhost:8080/img/KATANA_M2_mobile.2359d143.png'  },
      ],
      selectedImages:[],
       checked: false,
       holdImage:false,
        isHidden: true
    }
},
methods:{
    selectImage(e){         // selecting gallery images
        let selectedImage = e.currentTarget.parentElement;
        let img = e.currentTarget;
        if(selectedImage.classList.contains('selected-image')){
            selectedImage.classList.remove('selected-image');
            img.classList.add('unchecked-img')
            
        }else{
            selectedImage.classList.add('selected-image');
             this.selectedImages.push(e.target.currentSrc);  
            
              img.classList.remove('unchecked-img')
           

        }
        if(!selectedImage.classList.contains('selected-image')){
         this.selectedImages =  this.selectedImages.filter(item => item !== e.target.currentSrc)
        }
          let selectAll = this.$refs.galleryItemId;
         for(let a in selectAll){
               if(!selectAll[a].classList.contains('selected-image')){
                 let inpt=  document.getElementById('selectAllImages');
                 inpt.checked = false
               }
           }
    },
    selectAllImages: function(e){ // on selecting all the images in gallery
      this.selectedImages = [];
        for (var key in this.list) {
          this.selectedImages.push(this.list[key]);
         
        }
           let selectAll = this.$refs.galleryItemId;
           for(let a in selectAll){
           if(e){
                 
           selectAll[a].classList.add('selected-image');
         }else{
                
           selectAll[a].classList.remove('selected-image');
         };
           };
             let imgs = this.$refs.selectedImgLeft;
              for(let img in imgs){
                  if(e){
                        imgs[img].classList.remove('unchecked-img')
                  }else{
                      imgs[img].classList.add('unchecked-img')
                  }
              }
    },
}
}
</script>
