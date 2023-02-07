<template>
   <div id="Prints">
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
                  <img src="../assets/icons/Group 1.png" alt="logo">
               </div>
            </b-button>
         </div>
         <div class="main-header  items-col">
            <div class="d-flex justify-content-end flex-wrap">
               <button class="ordering-btn mr-lg-5 mr-md-5 mr-0 mt-2 mb-2">Ordering</button>
               <button class="back-to-btn mr-lg-5 mr-md-5 mr-0 mt-2 mb-2">Back to Galleries</button>
               <div class="items-prints text-end mr-lg-0 mr-md-0 mr-0">
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
                  <div class="col-lg-6 col-md-6 col-12">
                     <v-select class="mb-4 prints-select" v-model="selectedName" :options="optionsName" label="text">
                        <template #selected-option="{ text }">
                           <div style="display: flex; align-items: baseline;">
                              <strong class="select-strong select-header ">{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                     <v-select class="mb-4" v-model="selectedPhotos" :options="optionsPhotos" label="text">
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
                        <b-form-checkbox  type="checkbox"  class="shared text-capitalize text-nowrap" id="selectAllImages"  @change="selectAllImages($event)" >
                           Select All photos
                        </b-form-checkbox>
                     </div>
                     <div class="left-sidebar-div mt-4 "  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
                        <draggable
                           class="dragArea list-group row left-sidebar-flex"
                           :list="photos"
                           :group="{ name: 'people', pull: 'clone', put: false }"
                           @change="log"
                           @start="onStart"

                           >
                           <div
                              class="list-group-item mb-2 col-6 left-sidebar-images"
                              v-for="element in photos"
                              :key="element.id"
                           >
                           <img
                               v-bind:src="'https://studioseye.com' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME"
                               class="w-100 unchecked-img"
                               @click="selectImage($event)" ref="selectedImgLeft"
                               />
                           </div>
                        </draggable>

                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mx-auto center-div">
               <div class="col-lg-6 col-md-6 col-12 p-0 m-auto mt-5 main-cropper-div">

<div class="grey-bg" id="grey-bg">

   <div class="cropper text-center" id="cropperBG">
      <img  v-bind:src='this.cropperBg' alt="" class="img png-img center-cropped-img" id="cropper-mainBG">

     
     <div class="draggable-parent">
      <div v-for="(n, key) in dragPhotos" :key="key">
      <draggable  
      style="width: 100px;height: 100px; position: absolute;top:10px;left: 10px;"
      class="dragArea list-group cropper-dragarea"
      :list="layer_1[key]"
      group="people"
      @change="log($event, key), dragstart($event)"
      ref="someName"
      > 
      <div
         class="list-group-item cropper-list droppable-list"
         v-for="element in layer_1[key]"
         :key="element.id">
         <img v-if="element.IMAGE_LINK_PATH"
                  v-bind:src="'https://studioseye.com' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME"
                  class="dragged-img w-100"
                  :id='"Layer" + (key+ + +1)'
                  ref="imageLinkPath"
         />
            
      </div>
   
      </draggable>
      <div
        class="adjust-div"  
        :id='"modal" + (key+ + +1)'
      >
         <div         
         @click="adjustCrop($event, key )"
         v-on:click="$bvModal.show('modal' + (key+ + +1)), handleButtonClick($event)" 
      >
         <img
            src="../assets/icons/8666657_crop_icon.png"
            alt="cropper"
            class="adjust-img"
         >
         <span class="text-uppercase adjust-txt">Crop</span>
      </div>
      </div>
     
   </div>
     </div>
   </div>

   <div class="cropped-div text-center" id="cropped-div">
   <span>
      <span class="cropper-modal">
         <b-modal hide-footer  
         v-for="(n, key) in dragPhotos" :key="key"  :id="'modal' + (key+ + +1)"
         ref="modalCrop">
         <template #modal-title  >
            Cropper 
            <!-- {{ `https://studioseye.com${layer_1[key][0].IMAGE_LINK_PATH}THUMBNAILS/${layer_1[key][0].IMAGE_NAME}` }} -->
         </template>
         <div class="d-block text-center" style="height: 600px">
               <!-- :imageCrop="imageCrop"
                  :imageRotation="imageRotation" -->

                  <!-- {{layer.src}} -->
            <PinturaEditor
                  v-bind="editorDefaults"
                  :src='layer_1[key] ? `https://studioseye.com${layer_1[key][0].IMAGE_LINK_PATH}THUMBNAILS/${layer_1[key][0].IMAGE_NAME}` : ""'
                  :imageCropAspectRatio="imageCropAspectRatio"
                  :frameStyles="frameStyles"
                  v-on:pintura:process="handleEditorProcess($event, key)"
                  v-on:pintura:update="handleEditorUpdate($event, key)"
                  v-on:pintura:load="handleEditorLoad($event)"
                  :willRenderCanvas="willRenderCanvas"
                  :imageColorMatrix="imageColorMatrix"
                  :imageCrop="imageCrop"
                  ref="cropperModal"
            ></PinturaEditor>         
         </div>
         </b-modal>
      </span>
   </span>
</div>
</div>



</div>

<div class="row crop-imgs justify-content-center d-flex">
   <div class="col-lg-3 col-6">
      <img src="../assets/icons/Frame_mockup_3.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
      <img  v-if="src" class="imgInFrame" v-bind:src="src" alt="cropped Image">
   </div>
   <div class="col-lg-2 col-6">
      <img src="../assets/icons/PSDMarchArt53.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
      <img  v-if="src" class="imgInFrame2" v-bind:src="src"  alt="cropped image">
   </div>
   <div class="col-lg-2 col-6">
      <img src="../assets/icons/PSDMarchIce9988.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
      <img  v-if="src" class="imgInFrame4" v-bind:src="src"  alt="">
      <img  v-if="src" class="imgInFrame5" v-bind:src="src"  alt="">
      <img  v-if="src" class="imgInFrame6" v-bind:src="src"  alt="">
      <img  v-if="src" class="imgInFrame7" v-bind:src="src"  alt="">
   </div>
   <div class="col-lg-2 col-6">
      <img src="../assets/icons/PSDMarchIce81.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
      <img  v-if="src" class="imgInFrame3" v-bind:src="src"  alt="">
   </div>

</div>
<div class=" mt-3 mb-2 d-flex justify-content-between main-footer">
   <button class="choose-files">Choose Files</button>
   <b-form-checkbox  type="checkbox"  class="shared text-capitalize text-nowrap"
      v-model="holdImage"
      >
      Hold the Image
   </b-form-checkbox>
</div>
            </div>
            <div class="col-lg-3 col-md-6 col-12 print-sidebar">
               <p class="print-name">Print Lustre</p>
               <p class="print-amount">$6,99</p>

              <div class="editor" id="editor">
               <!-- <img v-bind:src="src" alt="img" id="cropped-img" class="center-cropped-img"> -->
              </div>
               <div>
                  <span class="size">Size</span>
                  <span class="selected-size">(4x6)</span>
               </div>
               <div>
                  <div>
                     <div class="row mb-3 mt-2" >
                        <div class="col-6" v-for="size in cropSelectPresetOptions1" :key="size.id">
                        <button v-if="size.length" v-on:click.prevent="changeCroperSize(size[0], size)" class="size-btn-2nd text-nowrap">
                        {{size[1]}}
                        </button>
                     </div>
                     </div>
                  </div>
                  <p class="text-center view-sizes m-0" v-on:click="isHidden = !isHidden">
                     <span>View all Sizes</span>
                     <font-awesome-icon icon="angle-down" class="angle-down-icon"/>
                  </p>
                  <div v-if="!isHidden">
                     <div class="row mb-3 mt-2" >
                        <div class="col-6" v-for="size in cropSelectPresetOptions2" :key="size.id" >
                        <button v-if="size.length" v-on:click.prevent="changeCroperSize(size[0], size)" class="size-btn-2nd text-nowrap">
                        {{size[1]}}
                        </button>
                     </div>
                     </div>
                  </div>
               </div>
               <div>
                  <span class="quantity">Quantity</span>
                  <div class="row mt-2">
                     <div class="col-lg-6 col-md-6 col-8 d-flex justify-content-between">
                        <button class="quantity-plus" @click="plus">+</button>
                        <div class="quantity-div">
                           <span class="exact-quantity" id="quantity">1</span>
                        </div>
                        <button class="quantity-minus" @click="minus">-</button>
                        <!-- <v-select class="mb-2 selected-options" v-model="selectedQuantity" :options="optionsQuantity" label="text">
                           <template #selected-option="{ text }">
                              <div style="display: flex; align-items: baseline;">
                                 <strong class="select-strong select-header">{{ text }}</strong>
                              </div>
                           </template>
                        </v-select> -->
                     </div>
                  </div>
                  <div class="mt-2">
                     <span class="size">Type</span>
                     <span class="selected-size">(Lustre)</span>
                  </div>
                  <div>
                     <div class="row">
                        <div class="col-6">
                           <button class="size-btn text-nowrap">
                           Lustre
                           </button>
                        </div>
                        <div class="col-6">
                           <button class="size-btn-2nd ">
                           Glossy
                           </button>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-6">
                           <button class="size-btn-2nd">
                           Metallic
                           </button>
                        </div>
                        <div class="col-6">
                           <button class="size-btn-2nd ">
                           Deep Matte
                           </button>
                        </div>
                     </div>
                  </div>
                  <div class="mt-3">
                     <span class="size">Notes</span>
                  </div>
                  <b-form-textarea
                     id="textarea"
                     class="prints-textarea mt-2"
                     placeholder="Lorem ipsum is simply dummy text of the printing and typesetting industry"
                     rows="2"
                     max-rows="6"
                     ></b-form-textarea>
               </div>
               <div class="mt-2 text-center">
                  <button  class="text-uppercase add-to-cart">Add to cart</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import axios from 'axios';
   import getToken from '../components/reusable/token.vue';
   import {processImage,  getEditorDefaults , appendDefaultEditor  } from '@pqina/pintura';
   import { PinturaEditor, PinturaEditorModal } from '@pqina/vue-pintura/vue-2';
   import node from '!raw-loader!../assets/node.txt';
   import draggable from "vuedraggable";

   export default{
   components: {
            PinturaEditor,
            draggable
        },

    data(){

    return{
      name: "two-lists",
      display: "Clone",
      order: 2,
      // list1: [
      //   { name: "John", id: 1 },
      //   { name: "Joao", id: 2 },
      //   { name: "Jean", id: 3 },
      //   { name: "Gerard", id: 4 }
      // ],
      // list2: [],
      editorDefaults: getEditorDefaults({
                imageWriter: {
                    preprocessImageState: (imageState) => {
                   
                        return imageState;
                    },
                },
            }),
      // imageRotation: 0.7853981623974483,

      imageCrop: {
         height: 100,
         width: 204,
         x: 20,
         y: 50,
            },
      src:'',
      imageColorMatrix: {
            filter: [
                    0.75, 0.25, 0.25, 0, 0,
                    0.25, 0.75, 0.25, 0, 0,
                    0.25, 0.25, 0.75, 0, 0,
                    0,    0,    0,    1, 0
                ],
        },
      imageCropAspectRatio:1,
      sizeIsSelected:false,
      frameStyles: {
                solidSharp: {
                    shape: {
                        frameStyle: 'solid',
                        frameSize: '2.5%',
                    },
                    thumb: '<rect stroke-width="5" x="0" y="0" width="100%" height="100%"/>',
                },
                solidRound: {
                    shape: {
                        frameStyle: 'solid',
                        frameSize: '2.5%',
                        frameRound: true,
                    },
                    thumb: '<rect stroke-width="5" x="0" y="0" width="100%" height="100%" rx="12%"/>',
                },
                lineSingle: {
                    shape: {
                        frameStyle: 'line',
                        frameInset: '2.5%',
                        frameSize: '.3125%',
                        frameRadius: 0,
                    },
                    thumb: '<div style="top:.5em;left:.5em;right:.5em;bottom:.5em;box-shadow:inset 0 0 0 1px currentColor"></div>',
                },
                lineMultiple: {
                    shape: {
                        frameStyle: 'zebra',
                        frameInset: '2.5%',
                        frameSize: '.3125%',
                        frameRadius: 0,
                        frameColor: [15, 15, 15],
                    },
                    thumb: '<div style="top:.5em;left:.5em;right:.5em;bottom:.5em;box-shadow:inset 0 0 0 1px currentColor"></div>',


                },
                hook: {
                    shape: {
                        frameStyle: 'hook',
                        frameSize: '.3125%',
                        frameColor: [15, 15, 15],
                    },

                  thumb: '<div style="top:.5em;left:.5em;right:.5em;bottom:.5em;box-shadow:inset 0 0 0 1px currentColor"; width="0.75em" height="0.75em"> </div>',
                },
                polaroid: {
                    shape: {
                        frameStyle: 'polaroid',
                        frameSize: '5%',
                        frameColor: [15, 15, 15],

                    },
                    thumb: '<rect stroke-width: 20%;   x: -5%; y="-5%" width="110%" height="96%"/>',
                },
            },
      cropSelectPresetOptions1:[
          [[3.5 / 3.5], '3.5 x 3.5'],
          [[4 / 4], '4 x 4'],
          [[4 / 6], '4 x 6'],
          [[5 / 5], '5 x 5'],
 

      ],
      cropSelectPresetOptions2:[
          [[10 / 10], '10 x 10'],
          [[11 / 14], '11 x 14'],
          [[12 / 12], '12 x 12'],
          [[16 / 16], '16 x 16'],
          [[16 / 20], '16 x 20'],
          [[16 / 24], '16 x 24'],
          [[18 / 18], '18 x 18'],
          [[20 / 20], '20 x 20'],
          [[20 / 30], '20 x 30'],
          [[24 / 24], '24 x 24'],
          [[24 / 30], '24 x 30'],
          [[24 / 36], '24 x 36'],
      ],

      willRenderCanvas: (shapes, state) => {
                const {
                    utilVisibility,
                    selectionRect,
                    lineColor,
                    backgroundColor,
                } = state;

                // Exit if crop utils is not visible
                if (utilVisibility.crop <= 0) return shapes;

                // Get variable shortcuts to the crop selection rect
                const { x, y, width, height } = selectionRect;

                return {
                    // Copy all props from current shapes
                    ...shapes,
                };
            },
      photos: [],
      layer_1:[],
      dragPhotos: [],
      busy: false,
      limit: 10,
      search: '',
      galleryImages:[],
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
      selectedImages:[],
      selectedImage:[],
       checked: false,
       holdImage:false,
        isHidden: true,
        cropperImg:[],
        cropperBg:[],
        changable:[],
        cropperMainBg:[],
        drag:[],
        mainLocWidth:[],
       mainLocHeight:[],
       x:[],
       imgHeight:[],
       cropperPr:[],
       childArr:[],
       areas:[],
       dragNode:[],
       createdNode:[],
       dragAreaFirst:[],
       child:[],
       croppedImgDraggable:[],
       newCrop:[],
       cropEvent:{},
       newStr:[],
       croppedNodeImg:[],
       newSrc:[],
       nodeID:[],
       nodeImg:[],
       n:[],
       cropperLayers:[],
       nodeKeys:[],
       dragEventAdded:{},
       layerKey:[],
       adjustBtnKey:'',
       imgsForLayers:[],
       imgSrcLayer:'',
       imgSrcLayer2nd:'',
       hasRotated: true,
       finalResultImg:'',
       secondImgSrc:'',
       newSrcForLayers:'',
       layer:[],
       firstImgofNode:[],
       originalImg:''
    }
},

methods:{
    getMeta: function(url, callback) {
    const img = new Image();
    img.src = url;
    img.onload = function() { callback(this.width, this.height); }
},







   handleButtonClick: function () {
      // console.log( this.$refs.modalCrop,' this.$refs.cropperModal');
//      for(let pinturas in this.$refs.modalCrop){
//         // _data._props.$parent.areas.layer.currentSrc
//         console.log(this.$refs.modalCrop[pinturas]._props)
//      }
//            // this.$refs.edirow.editor
//            //     .loadImage('my-image.jpeg')
//            //     .then((imageReaderResult) => {
//            //         // Logs loaded image data
//            //         console.log(imageReaderResult);
//            //     });
        },


    getNodeItemByNumber(n){
        window[n] = [];
      //   console.log(window[n]);
        return window[n];
    },

  
   handleEditorProcess: function (imageState, key) {
      
    const preview = new Image();
    preview.src = URL.createObjectURL(imageState.dest);

    this.layer_1[key][1].croppedImgX = imageState.imageState.crop.x;
    this.layer_1[key][1].croppedImgY =  imageState.imageState.crop.y;
    this.layer_1[key][1].croppedImgWidth = imageState.imageState.crop.width;
    this.layer_1[key][1].croppedImgHeight = imageState.imageState.crop.height;
    this.layer_1[key][1].croppedImgRotation = imageState.imageState.rotation

   //  console.log(this.layer_1[key][1], 'this_layer_1')


    this.src = preview.src;
      for(let i in this.photos){
         this.newStr = this.photos[i].IMAGE_NAME;
         let newImageState = imageState.src.name;
         newImageState = newImageState.split('%20').join(' ');
           if(this.newStr == newImageState){
            newImageState = newImageState.split(' ').join('%20');
            this.croppedNodeImg = newImageState;
            // console.log(newImageState);
         }

         // console.log(newImageState, 'newImageState');
         // console.log(imageState.src, 'imageState.src')
       
      }
   this.editorResult = 'https://studioseye.com' + this.photos[0].IMAGE_LINK_PATH + 'THUMBNAILS/';
   // console.log(this.editorResult);
    let adjustBtn = document.querySelectorAll('.adjust-div');
    let modal = document.querySelectorAll('.modal');
      
    for(let i in adjustBtn){
      if(adjustBtn[i].tagName == 'DIV'){
        if(adjustBtn[i].id == modal[0].id){
         adjustBtn[i].parentElement.firstChild.childNodes[0].childNodes[0].src = preview.src;
         let w = adjustBtn[i].parentElement.firstChild.childNodes[0].childNodes[0].width + 'px';
         let h = adjustBtn[i].parentElement.firstChild.childNodes[0].childNodes[0].height + 'px'

         axios({
               method: 'post',
               url: 'http://localhost:3000/nodeData/',
               data: imageState
             })
         .then(res => {
            
         })
         .catch ((err) => {
                 console.log(err)
             })
         
        }
      }
      
    }
   },

    adjustCrop(e, key){
     
    
    
       if(this.layer_1[key][1].croppedImgX){
         this.imageCrop.x = this.layer_1[key][1].croppedImgX;
         this.imageCrop.y = this.layer_1[key][1].croppedImgY;
         this.imageCrop.width = this.layer_1[key][1].croppedImgWidth;
         this.imageCrop.height = this.layer_1[key][1].croppedImgHeight;


       }
       console.log();
        this.layer = {};
        let newKey = 'Layer' + (++key);
        let counter = 0;
        let currentImage = [];
      //   console.log(this.$refs.imageLinkPath);
        this.$refs.imageLinkPath = this.$refs.imageLinkPath.filter(function (el) {
            return el != null;
        });

        for(let lay in this.$refs.imageLinkPath){
            if(this.$refs.imageLinkPath[lay].id == newKey){
                if(counter == 0){
                    counter = 1;
                    currentImage = this.$refs.imageLinkPath[lay];
                }else{
                    delete this.$refs.imageLinkPath[lay];

                }

            }
        };
        
      //   this.originalImg = currentImage;
      //   console.log(this.originalImg, 'originalDone');

      //   console.log(this.$refs.imageLinkPath, 'imageLinkPath');
        counter = 0;
        this.adjustBtnKey = e;
        this.layer = currentImage;

       




      //  let draggedImg = document.querySelectorAll('.dragged-img');

      //   // for(let i in this.dragEventAdded){
      //      let draggedImgKey = draggedImg[i].parentElement.parentElement;
      //      this.layerKey = draggedImgKey.getAttribute('key');

        //    if(this.adjustBtnKey == this.layerKey){
        //       this.imgsForLayers  = {
        //          src: '',
        //          key: this.adjustBtnKey
        //    };

        //    console.log(this.imgsForLayers);


        //   let prevSrc = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.src;
        //    let nextSrc = prevSrc.split('THUMBNAILS/')[1];
        //    if(typeof nextSrc !== 'undefined'){
        //       let newImgSrc = nextSrc.split('%20').join(' ');
        //       for(let i in this.dragEventAdded){
        //             if(this.dragEventAdded[i].added.element.IMAGE_NAME == newImgSrc){
        //                this.secondImgSrc = this.dragEventAdded[i].added.element.IMAGE_NAME;
        //             }else{}
        //          }
        //    }
        //    this.imgSrcLayer = `https://studioseye.com${this.dragEventAdded[i].added.element.IMAGE_LINK_PATH}THUMBNAILS/${nextSrc}`;
        //       if(this.imgSrcLayer.includes('jpg')){
        //          this.finalResultImg = this.imgSrcLayer;
        //       }else{
        //             this.imgSrcLayer2nd = `https://studioseye.com${this.dragEventAdded[i].added.element.IMAGE_LINK_PATH}THUMBNAILS/${this.secondImgSrc}`;
        //             this.finalResultImg = this.imgSrcLayer2nd;
        //       }


        //    }else{
        //    }
        // }
    },
        handleEditorUpdate: function (imageState, key) {
         const preview = new Image();
         if(imageState.dest){
            preview.src = URL.createObjectURL(imageState.dest);
         }
         if(imageState.rotation == 0){
            if(typeof imageState.crop !='undefined'){
               // console.log(imageState.crop)
               //  imageState.crop.x = this.layer_1[key][1].croppedImgX;
               // imageState.crop.y = this.layer_1[key][1].croppedImgY;
               // imageState.crop.x = 0;
               // imageState.crop.y = 0;
      
            }
         }else{
            // console.log(this.layer_1[key][1]);
          
            // imageState.crop.x = this.layer_1[key][1].croppedImgX;
            //    imageState.crop.y = this.layer_1[key][1].croppedImgY;
            // imageState.crop.x = 204;
            // imageState.crop.y = 184;
         }
        },
        handleEditorLoad: function (imageReaderResult, imageState) {
         // console.log(imageState);
        },
   changeCroperSize(size, s){
      var croppedImg = document.getElementById('cropped-img');
      this.sizeIsSelected = true;
      let height = s[1].split(' ')[0];
      let width = s[1].split(' ').pop();
      if(height == width){
         croppedImg.style.width = 400 + 'px';
         croppedImg.style.objectFit = 'cover';
      }else{
          croppedImg.style.objectFit = 'cover';
          if(width > '0px' && width < '20px'){
            croppedImg.style.width = width * 50 + 'px';
         }else{
            croppedImg.style.width = width * 15 + 'px';
         }
      };
       return this.imageCropAspectRatio = size;
   },
   async loadMore() {
   let event_id = $cookies.get('event_id');
    let client_id = $cookies.get('client_id');
   this.busy = true;
            const getGalleryImages = await axios({
                 method: 'post',
                 type:'post',
                 url: 'http://dev.studioseye.com/api/geteventimages',
                  data: {
                     'client_id': client_id,
                     'event_id': event_id
                  },
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                 },
             });
             if(getGalleryImages.status == 200){
               const append = getGalleryImages.data.slice(this.photos.length, this.photos.length + this.limit );
               this.photos = this.photos.concat(append);
               this.busy = false;
            };
 },
    selectImage(e){         // selecting gallery images
        let selectedImage = e.currentTarget.parentElement;
      //   console.log({ node });
        this.src = selectedImage.getElementsByTagName('img')[0].src;
      //   console.log(this.src);
        let img = e.currentTarget;
        if(img.classList.contains('selected-image')){
           img.classList.remove('selected-image');
            img.classList.add('unchecked-img')
        }else{
           img.classList.add('selected-image');
             this.selectedImages.push(e.target.currentSrc);
              img.classList.remove('unchecked-img')
        }
        if(!img.classList.contains('selected-image')){
         this.selectedImages =  this.selectedImages.filter(item => item !== e.target.currentSrc);

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
    plus(){
      let quantity = document.getElementById('quantity');
      if(quantity.innerHTML >= 1){
         quantity.innerHTML++;
      }else{
         quantity.innerHTML = 1
      }

    },
    minus(){
      let quantity = document.getElementById('quantity');

      if(quantity.innerHTML > 1){
         quantity.innerHTML--;
      }else{
         quantity.innerHTML = 1
      }
    },


    add: function() {
      // console.log('add' + this.list)
    },
    replace: function() {
      // console.log('edit' + this.list)
    },
    clone: function(el) {
   //   console.log(el)
   },
   dragstart(event)
       {
        
       },
       onStart(){
      //    if (document.querySelector('.sortable-ghost') !== null) {
      //       if($( ".droppable-list")){
      //          for(let i  in $( ".droppable-list")){
      //             if ($( ".droppable-list")[i].tagName === 'DIV') {
      //                $( ".droppable-list")[i].style.display = 'none'
      //             }
                
      //          // $( ".droppable-list")[i].style.display = 'none'
      //       }
            
      //       }
          
      // }else{
      //    console.log('no')
      // }
       },
    log: function(evt, key) {


      
    
         // console.log(evt.added.element, 'evt');
              // let newImgPathWithoutBlob = [];
      //   if( this.layer.src.indexOf('blob') != 0){
      //    newImgPathWithoutBlob.push(this.layer.src);
      //   };

 
      //   if(typeof this.layer_1[key].imgPath === 'undefined' || this.layer.src.indexOf('blob') != 0 ){
      //       console.log('needs to be changed');
      //       this.layer_1[key].imgPath = newImgPathWithoutBlob;
      //       console.log(this.layer_1[key].imgPath, 'this.layer_1[key].imgPath');
      //    }else{
      //       console.log('set imgPath')
      //       this.layer_1[key].imgPath = this.layer.src;
      //    };













         let imgWidth = '';
         let imgHeight = '';


      // Use like:
 

      let nodeKey = `Layer${key}`;


        if(evt.added == null){
        }else{

         if(this.layer_1[key] && this.layer_1[key].length > 2){
        delete this.layer_1[key][1];

        this.layer_1[key] = this.layer_1[key].filter(function (el) {
         
            return el != null;
        });
        this.getMeta (`https://studioseye.com${evt.added.element.IMAGE_LINK_PATH}/THUMBNAILS/${evt.added.element.IMAGE_NAME}`,
        function imgData(w, h){
         imgWidth = w + 'px ' 
         imgHeight = h + 'px';

      
         }
         );
         setTimeout(() =>  this.layer_1[key][1].imgWidth = imgWidth, 50);
      setTimeout(() =>  this.layer_1[key][1].imgHeight = imgHeight, 100);
     console.log( this.layer_1[key][1])
      }else{
                      
      console.log(this.layer_1);   
      
        
 
    this.getMeta (`https://studioseye.com${evt.added.element.IMAGE_LINK_PATH}/THUMBNAILS/${evt.added.element.IMAGE_NAME}`,
    function imgData(w, h) { 
      imgWidth = w + 'px',
      imgHeight = h +'px'
   }

   
      );
      

      };
      setTimeout(() =>  this.layer_1[key][1].imgWidth = imgWidth, 50);
      setTimeout(() =>  this.layer_1[key][1].imgHeight = imgHeight, 100);
     console.log( this.layer_1[key][1])
   //   let timer = window.setTimeout(function() {
   //    if(this.layer_1[key][1]){
   //       this.layer_1[key][1].imgWidth = imgWidth;
   //       this.layer_1[key][1].imgHeight = imgHeight;
   //       console.log(this.layer_1[key][1], 'this.layer_1[key][1]')
   //    }
   //    }, 100);


     

            this.dragEventAdded = evt;






            // added image data this.dragEventAdded


            // let draggedImg = document.querySelectorAll('.dragged-img');

            // for(let i in this.draggedImg){
            //    var draggedImgKey = draggedImg[i].parentElement.parentElement;
            //    this.layerKey = draggedImgKey.getAttribute('key');
            // }
            // console.log(draggedImg);
              
            this.firstImgofNode.push([
               {
                  imgName:`https://studioseye.com ${evt.added.element.IMAGE_LINK_PATH} THUMBNAILS/ ${evt.added.element.IMAGE_NAME}`,
                  imgkey: nodeKey
               }
            ]); 
           




            let cropperDragArea = this.$el.querySelectorAll(".cropper-dragarea")
            cropperDragArea.forEach((e,i) => {
                $('.cropper-dragarea > div:nth-of-type(2)').remove();
                e.addEventListener("mouseleave", function (event) {
                    isMouseHover = false;
                    event.target.parentNode.children[1].addEventListener("mouseleave", function (event){
                        event.target.parentNode.children[1].style.display='none'
                    }, false);
                }, false);
                e.addEventListener("mouseover", function (event) {
                    isMouseHover = true;
                    if(event.target.offsetParent.offsetParent.nextElementSibling){
                        event.target.offsetParent.offsetParent.nextElementSibling.style.display='block';
                        event.target.offsetParent.offsetParent.nextElementSibling.addEventListener("mouseleave", function (event){
                        }, false );
                    }
                }, false);
                let isMouseHover = false;

            });

        }
    },
},
mounted(){
const token = getToken.getToken();
 if(!token){
    return false
 }else{
    const getGalleryEvent = async ()  => {
      try{
           this.loadMore();
        }
        catch(err){
            console.log(err.message);
            this.busy = false;
        }
  };
  getGalleryEvent();
  const getCropperBg = async ()  => {
      try{
         const getPrintsCropper = await axios({
                    method: 'get',
                    type:'get',
                    url: 'http://localhost:3000/cropper/',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if(getPrintsCropper.status == 200){
                  this.cropperImg = getPrintsCropper.data;
                  this.dragPhotos =  getPrintsCropper.data[0].layers;
                  this.cropperBg = this.cropperImg[0].mainBg[0].Ifile;
                  this.cropperMainBg = this.cropperImg[0].main[0].mainIlocation;
                  var mainBg = document.getElementById('cropper-mainBG');
                  this.mainLocWidth  =(this.cropperMainBg.split(' ')[2]) * 60;
                  this.mainLocHeight  = (this.cropperMainBg.split(' ')[3]) * 60;
                  mainBg.style.height =this. mainLocHeight + 'px';
                  mainBg.style.width = this.mainLocWidth + 'px';
                     let iLocationX = [];
                     let iLocationY = [];
                     let iLocationWidth = [];
                     let iLocationHeight = [];
                  this.$nextTick(() => {
                   let cropperDragArea = this.$el.querySelectorAll(".cropper-dragarea");
                   let adjust = document.querySelectorAll('.adjust-div');
                   this.layer_1 = this.dragPhotos.map(function (item) {
                     iLocationX.push(item.Ilocation.split(' ')[1]);
                     iLocationY.push(item.Ilocation.split(' ')[0]);
                     iLocationWidth.push(item.Ilocation.split(' ')[2]);
                     iLocationHeight.push(item.Ilocation.split(' ')[3]);
                     
                  return [item];
                  });
                  cropperDragArea.forEach((e,i) => {
                     e.style.width = (iLocationWidth[i] * 60) + 'px';
                     e.style.height = (iLocationHeight[i] * 60) + 'px';
                     e.style.left = (iLocationY[i] * 60) + 'px';
                     e.style.top = (iLocationX[i] * 60) + 'px'
                     e.style.zIndex = '1000';
                     e.style.overflow = 'hidden';
                     e.setAttribute('key', this.dragPhotos[i].nodename)
                  });
                  this.cropperLayers = cropperDragArea;
                  adjust.forEach((e,i) =>{
                     e.style.left = (iLocationY[i] * 60) + 'px';
                     e.style.top = (iLocationX[i] * 60) + 'px';
                     e.style.position = 'absolute'
                  })
             
                     });

               }else{}
        }
        catch(err){
            console.log(err.message);
            this.busy = false;
        }
  };
   getCropperBg();
 };

},

}
</script>
<style>
   @import '../../node_modules/@pqina/pintura/pintura.css';
   @import '../../local_modules/pintura/pintura.css';
   .items-col{
      /* margin-top: -0.3rem!important; */
   }
   .items-prints {
      margin-right: 2.3rem;
   }
   .vs__clear, .vs__search{
      display: none;
   }
   .select-header{
      white-space: nowrap;
      font-size: 14px;
   }
   .left-sidebar-div{
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   width: 95%;
   justify-content: space-between;
   }
   .left-sidebar-images{
   display: flex;
   flex-direction: column;
   flex-basis: 100%;
   flex: 0 0 49%;
   }
   .left-sidebar-flex{
      display: flex!important;
    flex-flow: wrap!important;
   }
   .selected-image{

   background-color: #ffffff;
   border: 2px solid #223d8f!important;
   padding: 0.2rem;
   }
   .left-sidebar-gallery{
      overflow-y: scroll;
      height: 545px;
   }
   .unchecked-img{
      opacity: 0.5;
   }
   /* center */
   .main-div{
      background-color: #f5f5f5;
      text-align: center;
      height: 370px;
      position: relative;
      width: 83%;
      margin: auto;
   }
   .main-cropper-img{

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
   .main-cropper-img img{
      max-height: 350px
   }
   .cropper-icons{
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background-color: #ffffff;
      border: 1px solid #223d8f;
      padding: 7px;
      cursor: pointer;
   }
   .cropper-icons-div{
      /* width: 65%;
      margin: auto; */
   }
   .cropped-img{
      height: 80px;
      object-fit: fill;
   }
   .crop-imgs{
      width: 86%;
      margin: auto!important;
   }
   .main-footer{

      width: 83%;
      margin: auto;
   }



   /* right-sidebar */


   .choose-files{
      font-size: 13px;
      line-height: 10px;
      color: #223d8f;
      font-weight: 600;
      border-radius: 10px;
      background-color: #ffffff;
      border: none;
      padding: 0.7rem;
      border: 2px solid #223d8f;
      width: 150px;
      text-align: center;
   }
   .choose-files:hover, .size-btn-2nd:hover{
      color:#ffffff;
      background-color:#223d8f;
   }
   .size-btn{
      font-size: 13px;
      line-height: 10px;
      font-weight: 600;
      border-radius: 10px;
      border: none;
      border: 2px solid #223d8f;
      padding: 0.7rem;
      color:#ffffff;
      background-color:#223d8f;
      width: -webkit-fill-available;
      text-align: center;
   }
   .size-btn-2nd{
         font-size: 13px;
      line-height: 10px;
      color: #223d8f;
      font-weight: 600;
      border-radius: 10px;
      background-color: #ffffff;
      border: none;
      padding: 0.7rem;
      border: 2px solid #223d8f;
      white-space: nowrap;
      width: -webkit-fill-available;
      text-align: center;
   }
   .size-btn:hover{
      color:#223d8f;
      background-color: #ffffff;
   }
   .print-name{
      font-size: 18px;
      color: #393939;
      font-weight: 500;
      margin-bottom: 0;
   }
   .print-amount{
      font-size: 15px;
      color: #393939;
      font-weight: 600;
   }
   .size, .quantity{
         font-size: 15px;
      color: #393939;
      font-weight: 600;
   }
   .selected-size{
      color: #ADADAD;
      font-size: 15px;
      font-weight: 600;
      padding-left: 1rem;
   }
   .view-sizes{
      font-size: 13px;
      line-height: 17px;
      color: #393939;
      font-weight: 600;
   }
   .angle-down-icon{
      position: relative;
      top: 2px;
      left: 6px;
   }

   .selecting-data{
         border-radius: 10px;
   }
   .selecting-data div{
         padding-top: 2px!important;
         padding-bottom: 2px!important;
         padding-left: 3px!important;
   }
   .selecting-data ul{
         top: 25px;
   }
   .print-sidebar{
      /* position: relative;
      left: -2rem; */

   }
   .prints-textarea{
      font-size: 12px!important;
      padding: 13px!important;
      overflow-y: hidden!important;
      height: auto!important;
      width: 100%!important;
   }
   .add-to-cart{
         border-radius: 10px;
      background-color: #ffffff;
      border: 2px solid #223d8f;
      padding: 15px 30px;
      font-size: 13px;
      line-height: 10px;
      color: #223d8f;
      font-weight: 600;
      text-align: center;
   }

   .custom-control-label{
      text-indent: 10px;
   }
   .cropedInFrame{
      position: relative;
   }
   .imgInFrame{
      position: absolute;
      /* right: 53px;
      width: 50px; */
      right: 67px;
      width: 65px;
      height: 61px;
      top: 21px;
      object-fit: cover;
   }
   .imgInFrame2{
      position: absolute;
    /* right: 29px;
    width: 34px; */
    right: 35px;
    width: 47px;
    height: 39px;
    top: 33px;
    object-fit: cover;
   }
   .imgInFrame3{
      position: absolute;
    /* right: 50px;
    width: 34px; */
    right: 63px;
    width: 46px;
    height: 33px;
    top: 19px;
    object-fit: cover;
   }
   .imgInFrame4{
      position: absolute;
    /* right: 64px;
    width: 17px; */
    right: 84px;
    width: 22px;
    height: 18px;
    top: 18px;
    object-fit: cover;
   }
   .imgInFrame5{
      position: absolute;
      /* right: 44px;
      width: 17px; */
      right: 56px;
      width: 21px;
      height: 18px;
      top: 18px;
      object-fit: cover;
   }
   .imgInFrame6{
      position: absolute;
      /* right: 64px;
      width: 17px; */
      right: 85px;
      width: 21px;
      height: 18px;
      top: 38px;
      object-fit: cover;
   }
   .imgInFrame7{
      position: absolute;
      /* right: 44px;
      width: 17px; */
      right: 56px;
      width: 21px;
      height: 18px;
      top: 38px;
      object-fit: cover;
   }
   /* .imgInFrame8{
      position: absolute;
      right: 57px;
      width: 41px;
      object-fit: cover;
      height: 17px;
      top: 24px;
   }
   .imgInFrame9{
      position: absolute;
      right: 57px;
      width: 41px;
      object-fit: cover;
      height: 17px;
      top: 44px;
   }
   .imgInFrame10{
      position: absolute;
      right: 57px;
      width: 41px;
      object-fit: cover;
      height: 17px;
      top: 64px;
   } */
   .grey-bg{
      /* background: #EEEEEE; */
      /* width: 95%; */
      min-height: 500px;
      display: table;
   }
   #cropped-div{
      display: table-cell;
      text-align: center;
      vertical-align: middle;
     
   }
   
   div:has(.modal) {
   
   z-index: 1000000!important;
}
   .adjust-cropper{
      background: #EEEEEE;
      height: fit-content;
      margin-top: 25px!important;
   }
   .adjust-img{
      width: 20px;
   }
   .adjust-txt{
      font-size: 13px;
      white-space: nowrap;
      padding-left: 7px;
   }
   .center-cropped-img{
      height: 400px;
   }
   .quantity-div{
      border: 2px solid #223d8f;
      width: 60px;
      padding: 0.2rem;
      text-align: center;
      border-radius: 5px;
   }
   .quantity-plus, .quantity-minus{
      border: 1px solid #223d8f;
      width: 35px;
      border-radius: 5px;
      background-color: #fff;
      color: #223d8f;
   }
   .quantity-plus:hover, .quantity-minus:hover{
      background-color: #223d8f;
      color: #fff;
   }
   .cropper-bg{
      position: relative;
   }
   #cropped-img{
    /* position: absolute;
    top: 25px;
    left: 57px;
    width: 172px;
    height: 150px;
    object-fit: cover;
    background: red; */
    /* height: -webkit-fill-available;
    -o-object-fit: cover;
    object-fit: cover; */
   }
   .adjust-div{
   /* position: absolute; */
    /* top: 85px; */
    background: white;
    z-index: 10000;
    /* left: 25%; */
    /* z-index:10000000000000000; */
    padding: 5px 10px;
    display: none;
    cursor: pointer;
   }
   .cropper:hover>.adjust-div{
      /* display: block!important; */
   }


   .box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: Silver;
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
}

.box--expected {
}

.box--unexpected {
  height: 100%;
  width: 100%;
}

.outline {
  display: inline-block;
  border: 2px dashed black;
  margin: 40px 0 0 40px;
  width: 10rem;
  height: 10rem;
  position: relative;
}
.png-img{
   position: relative;
    z-index: 10;
    width: 394px;
    height: 435px;
    /* top: 30px; */
}
.modified-img{
    /* position: absolute;
    left: 27px;
    margin-top: 46px; */

    position: absolute;
    right: 28.3%;
    top: 59px;
    width: 363px;
    height: 385px;
    object-fit: cover;
}
.modified-img2-parent{
   position: absolute;
   top: 0;
}
.modified-img2{
    /* position: absolute; */
    /* right: 45%;
    top: 51px;
    width: 132px;
    height: 214px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1; */
    /* position: absolute;
    top: 50px;
    width: 130px;
    height: 214px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;
    left: 168px; */
    /* position: absolute;
    top: 50px;
    width: 130px;
    height: 215px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;
    left: 270px; */


    position: absolute;
    top: 44px;
    width: 129px;
    height: 215px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;
    left: 272px;
    background: green;
}
.modified-img3{
   /* position: absolute;
    right: 59%;
    top: 193px;
    width: 146px;
    height: 240px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0; */
    top: 170px;
    width: 141px;
    height: 240px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0;
    position: absolute;
    left: 156px;
}
.modified-img4{
   position: absolute;
    right: 193px;
    top: 146px;
    width: 166px;
    height: 262px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0;
}


.draggable-list-group{
    position: absolute;
    left: 10px;
    right: 10px;
    top: 5px;
    bottom: 5px;
    z-index: 999;
}
.list-group {
   --bs-list-group-border-color: transparent!important;
    --bs-list-group-bg: transparent!important;
}

.cropper-list{
    padding: 0!important;
    margin: 0;
    height: -webkit-fill-available;
}
/* #bv-modal-example___BV_modal_outer_{
   z-index: 100000000!important;
} */
.dragged-img{
   height: 100%;
    object-fit: cover;
}

.sortable-ghost {
    opacity: 0;
}



   @media only screen and (max-width:1840px){
      .imgInFrame{
         right: 61px;
      }
      .imgInFrame2{
         right: 32px;
      }
      .imgInFrame4{
         right: 80px;
      }
      .imgInFrame5{
         right: 53px;
      }
      .imgInFrame6{
         right: 80px;
      }
      .imgInFrame7{
         right: 53px;
      }
      .imgInFrame3{
         right: 58px;
      }
   }
   @media only screen and (max-width:1700px){
      .imgInFrame{
         right: 51px;
      }
      .imgInFrame2{
         right: 25px;
      }
      .imgInFrame4{
         right: 70px;
      }
      .imgInFrame5{
         right: 47px;
      }
      .imgInFrame6{
         right: 71px;
      }
      .imgInFrame7{
         right: 47px;
      }
      .imgInFrame3{
         right: 49px;
      }
   }
   @media only screen and (max-width:1590px){
      .imgInFrame{
         width: 57px;
      }
      .imgInFrame2{
         width: 41px;
      }
      .imgInFrame4{
         width: 17px;
         right: 68px;
      }
      .imgInFrame5{
         width: 18px;
         right: 45px;
      }
      .imgInFrame6{
         width: 17px;
         right: 68px;
      }
      .imgInFrame7{
         width: 17px;
         right: 46px;
      }
      .imgInFrame3{
         width: 39px;
      }
   }
   @media only screen and (max-width:1540px){
      .imgInFrame {
         right: 44px;
      }
      .imgInFrame4{
         right: 63px;
      }
      .imgInFrame5{
         right: 41px;
      }
      .imgInFrame6{
         right: 63px;
      }
      .imgInFrame7{
         right: 42px;
      }
      .imgInFrame3{
         width: 36px;
         right: 48px;
      }
      .imgInFrame2{
         width: 34px;
         right: 30px;
      }
   }
   @media only screen and (max-width:1400px){
      .imgInFrame {
         right: 34px;
      }
      .imgInFrame4{
         width: 14px;
         right: 59px;
      }
      .imgInFrame5{
         right: 40px;
         width: 14px;
      }
      .imgInFrame6{
         right: 59px;
         width: 14px;
      }
      .imgInFrame7{
         right: 40px;
         width: 14px;
      }
      .imgInFrame3{
         width: 30px;
        right: 45px;
      }
      .imgInFrame2{
         width: 31px;
         right: 26px;
      }
   }
   @media only screen and (max-width:1024px){
      .imgInFrame {
    width: 31px;
   }
   .imgInFrame2 {
      width: 20px;
      right: 21px;
   }
   .imgInFrame5 {
    right: 29px;
    width: 9px;
   }
   .imgInFrame7 {
    right: 29px;
    width: 9px;
   }
   .imgInFrame4 {
    width: 9px;
    right: 41px;
   }
   .imgInFrame6 {
    right: 41px;
    width: 9px;
   }
   .imgInFrame3 {
    width: 18px;
    right: 33px;
   }




   }
   @media only screen and (max-width:992px){
   .print-sidebar{
         left: 0!important;
      }
      .imgInFrame{
         width: 65px;
         right: 66px;
      }
      .imgInFrame2 {
         width: 73px;
         right: 50px;
      }
      .imgInFrame4 {
         width: 35px;
         right: 127px;
      }
      .imgInFrame5 {
         right: 81px;
         width: 36px;
      }
      .imgInFrame6 {
         right: 128px;
         width: 34px;
      }
      .imgInFrame7 {
         right: 82px;
         width: 34px;
      }
      .imgInFrame3 {
      width: 72px;
      right: 94px;
   }
   }
   @media only screen and (max-width:769px){
      .imgInFrame {
         width: 45px;
         right: 51px;
      }
      .imgInFrame2 {
         width: 51px;
         right: 41px;
      }
      .imgInFrame5 {
         right: 60px;
         width: 27px;
      }
      .imgInFrame7 {
         right: 62px;
         width: 25px;
      }
      .imgInFrame4 {
         width: 25px;
         right: 96px;
      }
      .imgInFrame6 {
         right: 96px;
         width: 25px;
      }
      .imgInFrame3 {
         width: 53px;
         right: 71px;
      }
   }
   @media only screen and (max-width:446px){
      .imgInFrame {
         width: 49px;
         right: 56px;
      }
      .imgInFrame2 {
         width: 57px;
         right: 42px;
      }
      .imgInFrame4 {
         width: 29px;
         right: 104px;
      }
      .imgInFrame5 {
         right: 67px;
         width: 28px;
      }
      .imgInFrame6 {
         right: 104px;
         width: 28px;
      }
      .imgInFrame7 {
         right: 67px;
         width: 30px;
      }
      .imgInFrame3 {
         width: 59px;
         right: 77px;
      }
   }
   @media only screen and (max-width:376px){
      .imgInFrame {
         width: 41px;
         right: 49px;
      }
      .imgInFrame2 {
         width: 47px;
         right: 39px;
      }
      .imgInFrame3 {
         width: 49px;
         right: 67px;
      }
      .imgInFrame5 {
         right: 59px;
         width: 23px;
      }
      .imgInFrame7 {
         right: 59px;
         width: 23px;
      }
      .imgInFrame4 {
         width: 23px;
         right: 89px;
      }
      .imgInFrame6 {
         right: 89px;
         width: 23px;
      }
   }
   @media only screen and (max-width:321px){
      .imgInFrame {
         width: 34px;
         right: 41px;
      }
      .imgInFrame2 {
         width: 37px;
         right: 34px;
      }
      .imgInFrame5 {
         right: 49px;
         width: 19px;
      }
      .imgInFrame7 {
         right: 49px;
         width: 18px;
      }
      .imgInFrame4 {
         width: 18px;
         right: 73px;
      }
      .imgInFrame6 {
         right: 73px;
         width: 19px;
      }
      .imgInFrame3 {
         width: 39px;
         right: 55px;
      }
   }
</style>