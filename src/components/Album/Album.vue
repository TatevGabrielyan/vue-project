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
                   <img src="../../assets/icons/Group 1.png" alt="logo">
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
                         <img src="../../assets/icons/basket.png" alt="">
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
                         <b-form-checkbox  type="checkbox"  class="shared text-capitalize " id="selectAllImages"  @change="selectAllImages($event)" >
                            Select All photos
                         </b-form-checkbox>
                      </div>
                      <div class="left-sidebar-div mt-4 "  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
                         <draggable
                            class="dragArea list-group row left-sidebar-flex"
                            :list="photos"
                            :group="{ name: 'people', pull: 'clone', put: false }"
                            @change="log"
 
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
       @change="log"
       ref="someName"
       > 
       <div
          class="list-group-item cropper-list"
          v-for="element in layer_1[key]"
          :key="element.id">
       <img v-if="element.IMAGE_LINK_PATH"
                v-bind:src="'https://studioseye.com' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME"
                class="dragged-img w-100"
                id="cropped-img"
             />
             
       </div>
    
       </draggable>
       <div
         class="adjust-div"  
         :id="key"
       >
          <div         
          @click="adjustCrop($event)"
         v-on:click="$bvModal.show(key.toString())" 
        
       >
          <img
             src="../../assets/icons/8666657_crop_icon.png"
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
       <!-- <img src="../assets/black-photo-frame-collage-template_23-2147869079.jpg" alt="" class="cropper-bg">
       <div id="cropped-img">
          <span>111</span>
       </div> -->
       <!-- <img v-bind:src="this.src" alt="img" id="cropped-img" class="center-cropped-img"> -->
    <span>
       <span class="cropper-modal">
       <!-- v-if="this.sizeIsSelected" -->
       <!-- id="bv-modal-example" -->
<b-modal hide-footer  
v-for="(n, key) in dragPhotos" :key="key"  :id="key.toString()">
<template #modal-title  >
Cropper
</template>
<div class="d-block text-center" style="height: 600px">
<PinturaEditor
       v-bind="editorDefaults"
       :src="src"
       :imageCropAspectRatio="imageCropAspectRatio"
       :imageCrop="imageCrop"
       :imageRotation="imageRotation"
       :frameStyles="frameStyles"
       v-on:pintura:process="handleEditorProcess($event)"
       v-on:pintura:update="handleEditorUpdate($event)"
       v-on:pintura:load="handleEditorLoad($event)"
       :willRenderCanvas="willRenderCanvas"
       :imageColorMatrix="imageColorMatrix"
></PinturaEditor>         
 </div>
</b-modal>


       </span>
    </span>
 </div>
 </div>



</div>

<div class="row mt-4 crop-imgs justify-content-center">
    <div class="col-lg-3 col-6">
       <img src="../../assets/icons/Frame_mockup_3.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
       <img v-if="src" class="imgInFrame" v-bind:src="src" alt="cropped Image">
    </div>
    <div class="col-lg-2 col-6">
       <img src="../../assets/icons/PSDMarchArt53.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
       <img  v-if="src" class="imgInFrame2" v-bind:src="src"  alt="cropped image">
    </div>
    <div class="col-lg-2 col-6">
       <img src="../../assets/icons/PSDMarchIce9988.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
       <img  v-if="src" class="imgInFrame4" v-bind:src="src"  alt="">
       <img  v-if="src" class="imgInFrame5" v-bind:src="src"  alt="">
       <img v-if="src"  class="imgInFrame6" v-bind:src="src"  alt="">
       <img v-if="src"  class="imgInFrame7" v-bind:src="src"  alt="">
    </div>
    <div class="col-lg-2 col-6">
       <img src="../../assets/icons/PSDMarchIce81.png" alt="cropped-img" class="w-100 cropped-img cropedInFrame">
       <img v-if="src"  class="imgInFrame3" v-bind:src="src"  alt="">
    </div>

 </div>
 <div class=" mt-3 mb-2 d-flex justify-content-between main-footer">
    <button class="choose-files">Choose Files</button>
    <b-form-checkbox  type="checkbox"  class="shared text-capitalize "
       v-model="holdImage"
       >
       Hold the Image
    </b-form-checkbox>
 </div>
             </div>
             <div class="col-lg-3 col-md-6 col-12 print-sidebar">
                <p class="print-name">Premium Leather</p>
                <p class="print-amount">From $160,99</p>
 
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
                   <div class="mt-3">
                     <span class="size">Premiere Leather</span>
                     <span class="selected-size">(Black)</span>
                   </div>
                   <!-- @click="selectImage($event)" -->
                   <div class="d-flex justify-content-between mt-3"  >
                     <div
                               class="mb-2 prem-leather"
                               v-for="element in premiereLeather"
                               :key="element.id"
                               :style="{backgroundColor: element.color }"
                               @click="selectColor($event)"
                            >
                     </div>
                   </div>
                   <p class="text-center view-sizes m-0 mt-3" v-on:click="isPremiereLeather = !isPremiereLeather">
                      <span>View all Colors</span>
                      <font-awesome-icon icon="angle-down" class="angle-down-icon"/>
                   </p>
                   <div v-if="!isPremiereLeather" class="d-flex justify-content-between mt-3">
                     <div
                               class="mb-2 prem-leather"
                               v-for="element in premiereLeatherMore"
                               :key="element.id"
                               :style="{backgroundColor: element.color }"
                            >
                     </div>
                   </div>
                   <div class="mt-3">
                     <span class="size">Distressed Leather</span>
                     <span class="selected-size">(Black)</span>
                   </div>
                   <div class="d-flex justify-content-between mt-3">
                     <div
                               class="mb-2 prem-leather"
                               v-for="element in distressedLeather"
                               :key="element.id"
                               :style="{backgroundColor: element.color }"
                            >
                     </div>
                   </div>
                   <p class="text-center view-sizes m-0 mt-3" v-on:click="isDistressedLeather = !isDistressedLeather">
                      <span>View all Colors</span>
                      <font-awesome-icon icon="angle-down" class="angle-down-icon"/>
                   </p>
                   <div v-if="!isDistressedLeather" class="d-flex justify-content-between mt-3">
                     <div
                               class="mb-2 prem-leather"
                               v-for="element in distressedLeatherMore"
                               :key="element.id"
                               :style="{backgroundColor: element.color }"
                            >
                     </div>
                   </div>
                </div>
                <div>
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
                <div class="mt-3 text-center">
                   <button  class="text-uppercase add-to-cart">Design the Album</button>
                </div>
 
 
             </div>
          </div>
       </div>
    </div>
 </template>
 <script>
    import axios from 'axios';
    import getToken from '../../components/reusable/token.vue';
    import {processImage,  getEditorDefaults , appendDefaultEditor  } from '@pqina/pintura';
    import { PinturaEditor } from '@pqina/vue-pintura/vue-2';
    import node from '!raw-loader!../../assets/node.txt';
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
       list1: [
         { name: "John", id: 1 },
         { name: "Joao", id: 2 },
         { name: "Jean", id: 3 },
         { name: "Gerard", id: 4 }
       ],
       list2: [],
       isPremiereLeather: true,
       isDistressedLeather: true,
       editorDefaults: getEditorDefaults({
                 imageWriter: {
                     preprocessImageState: (imageState) => {
                      
                         return imageState;
                     },
                 },
             }),
       imageRotation: 0.7853981623974483,
 
       imageCrop: {
          height: 87,
          width: 36,
          x: 204,
          y: 184,
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
 
                     // Now we add an inverted ellipse shape to the interface shapes array
                     interfaceShapes: [
                         {
                             x: x + width * 0.5,
                             y: y + height * 0.5,
                             rx: width * 0.5,
                             ry: height * 0.5,
                             opacity: utilVisibility.crop,
                             inverted: true,
                            //  backgroundColor: [...backgroundColor, 0.5],
                             backgroundColor: [15, 15, 15, 0],
                            //  backgroundColor: [0, 0, 0, 0],
                             strokeWidth: 1,
                             strokeColor: [...lineColor],
                         },
                         // Spread all existing interface shapes onto the array
                         ...shapes.interfaceShapes,
                     ],
                 };
             },
       photos: [],
       premiereLeather:[
         { id: 1, color: '#000000'},
         { id: 2, color: '#575656'},
         { id: 3, color: '#ADADAD'},
         { id: 4, color: '#E0E0E0'},
         { id: 5, color: '#637BC4'},
         { id: 6, color: '#223D8F'},
         { id: 7, color: '#082271'},
       ],
       distressedLeather:[
       { id: 1, color: '#000000'},
         { id: 2, color: '#575656'},
         { id: 3, color: '#ADADAD'},
         { id: 4, color: '#E0E0E0'},
         { id: 5, color: '#637BC4'},
         { id: 6, color: '#223D8F'},
         { id: 7, color: '#082271'},
       ],
       premiereLeatherMore:[
         { id: 8, color: '#F5B400'},
         { id: 9, color: '#1F0E20'},
         { id: 10, color: '#C0C8CF'},
         { id: 11, color: '#1E1F0A'},
         { id: 12, color: '#909291'},
         { id: 13, color: '#717C49'},
       ],
       distressedLeatherMore:[
         { id: 8, color: '#F5B400'},
         { id: 9, color: '#1F0E20'},
         { id: 10, color: '#C0C8CF'},
         { id: 11, color: '#1E1F0A'},
         { id: 12, color: '#909291'},
         { id: 13, color: '#717C49'},
       ],
       layer_2:{
           0:[],
           1:[],
           2:[],
           3:[],
           4:[],
       },
       layer_1:[],
       Layer1: [],
       Layer2: [],
       Layer3: [],
       Layer4: [],
       Layer5: [],
       dragPhotos: [],
       results: [],
       busy: false,
       limit: 10,
       search: '',
       eventData:[],
       clientData:[],
       photographers:[],
       galleryFolders:[],
       galleryImages:[],
          selectedName:['Albums'],
         optionsName:[
           { value: 'a', text: 'Album 1' },
           { value: 'b', text: 'Album 2' },
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
       //  iLocationY:[],
       //  iLocationWidth:[],
       //  iLocationHeight:[],
        cropperPr:[],
        childArr:[],
        areas:[],
        dragNode:[],
        createdNode:[],
        dragAreaFirst:[],
        child:[],
        croppedImgDraggable:[],
        newCrop:[]
 
     }
 },
 
 methods:{
 
     getNodeItemByNumber(n){
         window[n] = [];
         console.log(window[n]);
         return window[n];
     },
 
   
    handleEditorProcess: function (imageState) {
 
      const preview = new Image();
     preview.src = URL.createObjectURL(imageState.dest);
 
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
             console.log('node' + adjustBtn[i].id, imageState, preview.src, w, h)
          
          })
          .catch ((err) => {
                  console.log(err)
              })
          
         }
       }
       
     }
    },
    adjustCrop(e){
       this.src =  e.path[3].childNodes[0].childNodes[0].childNodes[0].src;
       
    },
         handleEditorUpdate: function (imageState) {
          const preview = new Image();
          if(imageState.dest){
             preview.src = URL.createObjectURL(imageState.dest);
       
             this.editorResult = URL.createObjectURL(imageState.dest);
             console.log('update', imageState);
          }
          if(imageState.rotation == 0){
             if(typeof imageState.crop !='undefined'){
                imageState.crop.x = 0;
                imageState.crop.y = 0;
             }
          }else{
             imageState.crop.x = 204;
             imageState.crop.y = 184;
          }
         },
         handleEditorLoad: function (imageReaderResult, imageState) {
 
             // console.log('load',imageReaderResult, imageState);
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
         console.log({ node });
         this.src = selectedImage.getElementsByTagName('img')[0].src;
         console.log(this.src);
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
     selectColor(e){         // selecting gallery images
         let selectedColor = e.currentTarget.parentElement;
         // console.log({ node });
         // this.src = selectedImage.getElementsByTagName('img')[0].src;
         // console.log(this.src);
         let color = e.currentTarget;
         console.log(color)
         if(color.classList.contains('selected-color')){
            color.classList.remove('selected-color');
            // img.classList.add('unchecked-img')
         }else{
            color.classList.add('selected-color');
            //   this.selectedImages.push(e.target.currentSrc);
               // img.classList.remove('unchecked-img')
         }
         if(!color.classList.contains('selected-color')){
         //  this.selectedImages =  this.selectedImages.filter(item => item !== e.target.currentSrc);
 
         }
         //   let selectAll = this.$refs.galleryItemId;
         //  for(let a in selectAll){
         //        if(!selectAll[a].classList.contains('selected-image')){
         //          let inpt=  document.getElementById('selectAllImages');
         //          inpt.checked = false
         //        }
         //    }
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
       console.log('add' + this.list)
     },
     replace: function() {
       console.log('edit' + this.list)
     },
     clone: function(el) {
       return {
         name: el.name + " cloned"
       };
    },
 
 
 log: function(evt) {
 
    if(evt.added == null){
 
    }else{
 
       let cropperDragArea = this.$el.querySelectorAll(".cropper-dragarea")
       
       cropperDragArea.forEach((e,i) => {
                   
                      $('.cropper-dragarea > div:nth-of-type(n+2)').remove();
                   e.addEventListener("mouseleave", function (event) {
                   isMouseHover = false;
                   // event.target.parentNode.children[1].style.display='none'
                   event.target.parentNode.children[1].addEventListener("mouseleave", function (event){
                      event.target.parentNode.children[1].style.display='none'
                   }, false);
                   }, false);
                   e.addEventListener("mouseover", function (event) {
                   isMouseHover = true;
                   if(event.target.offsetParent.offsetParent.nextElementSibling){
                      event.target.offsetParent.offsetParent.nextElementSibling.style.display='block';
                      event.target.offsetParent.offsetParent.nextElementSibling.addEventListener("mouseleave", function (event){
                         // if(event.target.offsetParent.offsetParent.nextElementSibling){
                         //    event.target.offsetParent.offsetParent.nextElementSibling.style.display='block';
                         // }
                        
                      }, false );
                   }
                   }, false);
                let isMouseHover = false
                   });
 }
    },
     }
 ,
 
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
                   this.mainLocWidth  =(this.cropperMainBg.split(' ')[2]) * 55;
                   this.mainLocHeight  = (this.cropperMainBg.split(' ')[3]) * 55;
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
                      
                      e.style.width = (iLocationWidth[i] * 55) + 'px';
                      e.style.height = (iLocationHeight[i] * 55) + 'px';
                      e.style.left = (iLocationY[i] * 55) + 'px';
                      e.style.top = (iLocationX[i] * 55) + 'px'
                      e.style.zIndex = '1000';
                      e.style.overflow = 'hidden';
                     
                
                   });
               
                  
                   adjust.forEach((e,i) =>{
                      e.style.left = (iLocationY[i] * 55) + 'px';
                      e.style.top = (iLocationX[i] * 55) + 'px';
                      e.style.position = 'absolute'
                   })
              
                
                      });
                   
                  
 
 
 
 
                }else{
                   console.log(getPrintsCropper)
                }
         }
         catch(err){
             console.log(err.message);
             this.busy = false;
         }
   };
    getCropperBg();
  };
 
 },
 computed: {
    hasImage() {
      return !!this.image;
    }
  },
 }
 </script>
 <style>
.main-cropper-div{
    width: min-content;
}
.center-div{
    background: #F5F5F5;
    height: fit-content;
}
.list-group-item:first-child{
    border-radius: 0!important;
}
.prints-select .vs__dropdown-menu{
   top: 0.5rem;
}
.prem-leather{
    width: 40px;
    height: 40px;
    border-radius: 5px!important;
}
.selected-color{
   background-color: #ffffff;
   border: 4px solid #223d8f!important;
   padding: 1rem;
}
</style>