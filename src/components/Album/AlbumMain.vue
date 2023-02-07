<template>
    <div class="row">
    <div class="col-lg-9 col-md-6 col-12">
        <div class="row">
            <div class="wrapper light-olive" id="wrapper">
            <div class="content" id="content">
                <div class="d-none text-end" id="close-spreads">
                    <button type="button" class="btn spreadClose">X</button> 
                    <hr>
                </div>
                <div class="item" id="cover">  
                    <div class="row">
                        <div class="col-5 cover-left p-0">
                            <img id="top-cover-left" class="w-100" src="https://cdn.dragdrop.design/album/assets/cover/premium_leather_black-tile.jpg" alt="">
                        </div>
                        <div class="col-1 p-0 alb-top-center" id="album-center">
                            <img class="w-100 top-cv-center" id="top-cv-center" src="https://cdn.dragdrop.design/album/assets/cover/premium_leather_black-tile.jpg" alt="">
                        </div>
                        <div class="col-5 pr-0 cover-right p-0 top-cover-right">
                            <img id="top-cover-right" class="w-100 " src="https://cdn.dragdrop.design/album/assets/cover/premium_leather_black-tile.jpg" alt="">
                        </div>
                    </div>
                    <div class="mt-4 cover-txt">Cover</div>
                </div>
                <div class="item endleaf-item" id="endleaf">  
                    <div class="row" >
                        <div class="col-5 endleaf-left p-0">
                            <img id="top-endleaf-left" class="w-100" src="https://cdn.dragdrop.design/album/assets/endleaf/white_textured_endleaves.jpg" alt="">
                        </div>
                        <div class="col-1 p-0 endleaf-center">
                            <div class="endleaf-center-line"></div>
                        </div>
                        <div class="col-5 pr-0 endleaf-right p-0">
                            <img id="top-endleaf-right" class="w-100" src="https://cdn.dragdrop.design/album/assets/endleaf/white_textured_endleaves.jpg" alt="">
                        </div>
                    </div>
                    <div class="mt-4 cover-txt endleaf-txt">Endleaf</div>
                </div>
                <span id="album-content">
                    <div class="item endleaf-item3 new-spread" id="spread"> 
                        <div class="row" id="spread-images" >
                            <div class="col-5 spread-left p-0">
                                <img id="spread-left" class="w-100" src="https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg" alt="">
                            </div>
                            <!-- <div class="col-1 p-0 spread-center"></div> -->
                            <div class="col-1 p-0 spread-center-line">
                            <div class="endleaf-center-line"></div>
                        </div>
                            <div class="col-5 pr-0 spread-right p-0">
                                <img id="spread-right" class="w-100" src="https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg" alt="">
                            </div>
                            <!-- <div class="mt-4">
                                <span id="spread_number"></span>
                                
                                <button type="button" class="btn close-btn d-none close-btn" onClick="removeInput(this);">X</button> 
                            </div> -->
                        <span class="spread-drag-txt">Drag images from the gallery or select a layout from the sidebar</span>
                        </div>
                        <div class="mt-4 cover-txt endleaf-txt">1</div>
                    </div>
                </span>
                <div class="item endleaf-item" id="endleaf">  
                    <div class="row" >
                        <div class="col-12 p-0">
                          <div class="add-spread"> + </div>
                        </div>
                    </div>
                    <div class="mt-4 cover-txt endleaf-txt pr-0">Add spread</div>
                </div>
                <div class="item endleaf-item" id="endleaf">  
                    <div class="row" >
                        <div class="col-5 endleaf-left p-0">
                            <img id="top-endleaf-left" class="w-100" src="https://cdn.dragdrop.design/album/assets/endleaf/white_textured_endleaves.jpg" alt="">
                        </div>
                        <div class="col-1 p-0 endleaf-center">
                            <div class="endleaf-center-line"></div>
                        </div>
                        <div class="col-5 pr-0 endleaf-right p-0">
                            <img id="top-endleaf-right" class="w-100" src="https://cdn.dragdrop.design/album/assets/endleaf/white_textured_endleaves.jpg" alt="">
                        </div>
                    </div>
                    <div class="mt-4 cover-txt endleaf-txt">Endleaf</div>
                </div>
            </div>
        </div>
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <button type="button" class="datatable-btn text-uppercase back-btn-album">Back</button>
                    <p class="cover-sheat">Cover   <font-awesome-icon icon="fa-angle-right" class="d-inline handle fa-angle-right" /></p>
                    <span>
                        <img src="../../assets/icons/2044237_refresh_undo_backup_icon.svg" alt="undo" class="refresh-btns mr-3">
                        <img src="../../assets/2044237_refresh_undo_backup_icon.svg" alt="redo" class="refresh-btns">
                    </span>
                </div>
                <div class="album-item" id="album-item">  
                <div class="row" >
                    <div class="col-3 mt-3"></div>
                    <div class="col-3 album-left pr-0" >
                        <img id="main-album-left" class="w-100 cover-left-side" src="https://cdn.dragdrop.design/album/assets/cover/premium_leather_black-tile.jpg" alt="">
                    </div>
                    <div class="col-1 p-0 alb-center-div" id="alb-center-div">
                        <img id="alb-center-img" class="center-width cover-center" src="https://cdn.dragdrop.design/album/assets/cover/premium_leather_black-tile.jpg" alt="">
                    </div>
                    <div class="col-3 pr-0 album-right pl-0" >
                        <img id="main-album-right" class="w-100 cover-right-side"  src="https://cdn.dragdrop.design/album/assets/cover/premium_leather_black-tile.jpg" alt="">
                    </div>
                    <div class="col-2 mt-3"></div>
                </div>
               <div class="row">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-7">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="d-flex mg-spreads">
                                    <div class="spread-img">
                                        <img src="../../assets/Group 134.png" alt="">
                                    </div>
                                    <div>
                                        <p class="manage-spreads mb-0">Clear Text</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="d-flex mg-spreads">
                                    <div class="spread-img">
                                        <img src="../../assets/add text, font, type, interface, type letter, add, new text.png" alt="">
                                    </div>
                                    <div>
                                        <p class="manage-spreads mb-0">Debossing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 screen-size">
                        <img src="../../assets/7491959_ui_fullscreen_maximize_screen_display_icon.png" alt="">
                    </div>
               </div>
            </div>
            </div>
            <div class="col-12 container" >
                <div class="row">
                    <div class="col-lg-7 add-filter-photos">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="d-flex mg-spreads">
                                    <div class="spread-img">
                                        <img src="../../assets/211877_plus_round_icon.png" alt="">
                                    </div>
                                    <div>
                                        <p class="manage-spreads mb-0">Add Photos</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="d-flex mg-spreads">
                                    <div class="spread-img">
                                        <img src="../../assets/4781833_filter_filters_funnel_list_navigation_icon.png" alt="">
                                    </div>
                                    <div>
                                        <p class="manage-spreads mb-0">Filters</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 screen-size">
                        <p>155 photos</p>
                    </div>
               </div>
                <div  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" direction="horizontal"  infinite-scroll-distance="limit" class="limited-scroll">
                    <draggable
                           class="row photo-gal"
                           :list="photos"
                           :group="{ name: 'people', pull: 'clone', put: false }"
                           @change="log"
                           >
                           <div
                              class="photo-elements container d-flex"
                              v-for="element in photos"
                              :key="element.id"
                           >
                           <img
                               v-bind:src="'https://studioseye.com' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME"
                               class="w-100"
                               />
                           </div>
                        </draggable>
                </div>
                <!-- <draggable tag="div" :list="photos" class="row" handle=".handle" >
                    <div v-for="(el, idx) in photos" :key="idx" cols="3" >
                       <p>{{idx}}</p>
                    </div>
                </draggable> -->
                <!-- <div  v-infinite-scroll="loadMore" infinite-scroll-disabled="busy"  infinite-scroll-distance="limit" class="">
                    <draggable
                           class=""
                           :list="photos"
                           :group="{ name: 'people', pull: 'clone', put: false }"
                           @change="log"
                           >
                           <span
                              class=""
                              v-for="element in photos"
                              :key="element.id"
                           >
                           <img
                               v-bind:src="'https://studioseye.com' + element.IMAGE_LINK_PATH + 'THUMBNAILS/' + element.IMAGE_NAME"
                               class="w-100"
                               />
                            </span>
                        </draggable>
                </div> -->
            </div>

        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-12 album-right-side p-5">
        <div class="d-flex justify-content-between">
            <p class="alb-size">6x6 Album</p>
            <p class="alb-price">$160,99</p>
        </div>
        <div class="d-flex mg-spreads">
            <div class="spread-img">
                <img src="../../assets/icons/2876996_dashboard_grid_menu_menu icon_icon.png" alt="">
            </div>
            <div>
                <p class="manage-spreads mb-0">Manage 5 Spreads</p>
            </div>
        </div>
        <div>
            <div>
                <div class="mt-3 d-flex" v-for="material in materials" :key="material.id">
                    <div class="full-material" :style="{backgroundColor: material.color }"></div>
                    <div class="full-material-txt">{{material.material}}</div>
                </div>
                <p class="text-center view-sizes m-0 mt-3" v-on:click="isHiddenOptions = !isHiddenOptions">
                      <span>View all Options</span>
                      <font-awesome-icon icon="angle-down" class="angle-down-icon"/>
                </p>
                <div  v-if="isHiddenOptions">
                    <div class="mt-3 d-flex" v-for="material in materialsAll" :key="material.id">
                        <div class="full-material" :style="{backgroundColor: material.color }"></div>
                        <div class="full-material-txt">{{material.material}}</div>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <p class="debossing">Debossing</p>
                <div class="mt-3 d-flex" v-for="debossing in debossings" :key="debossing.id">
                    <div class="full-material" :style="{backgroundColor: debossing.color }"></div>
                    <div class="full-material-txt mt-1">
                        <div>{{debossing.txt}}</div>
                        <div class="mt-1">
                            <button class="deb-btn">+</button>
                            <span>$30.00</span>
                        </div>
                    </div>
                    
                </div>
                <p class="text-center view-sizes m-0 mt-3" v-on:click="isHiddenDebossing = !isHiddenDebossing">
                      <span>View all Options</span>
                      <font-awesome-icon icon="angle-down" class="angle-down-icon"/>
                </p>
                <div  v-if="isHiddenDebossing">
                    <div class="mt-3 d-flex" v-for="debossing in debossingsAll" :key="debossing.id">
                        <div class="full-material" :style="{backgroundColor: debossing.color }"></div>
                        <div class="full-material-txt mt-1">
                            <div>{{debossing.txt}}</div>
                            <div class="mt-1">
                            <button class="deb-btn">+</button>
                            <span>$30.00</span>
                        </div>
                        </div>
                       
                    </div>
                </div>
              <div>
                <input
                    type="checkbox"
                    class="checkbox"
                    id="paddedCover"
                >
                <label  class="remember-checkbox" for="paddedCover">Padded Cover</label>
                <p>$30.00</p>
              </div>
               <div class="text-center">
                <Button class="text-uppercase create-btn w-auto px-5 mt-3">Review</Button>
               </div>
            </div>
        </div>
    </div>
    </div>
 </template>
 <script>
import Button from '../reusable/Button.vue';
import draggable from "vuedraggable";
import axios from 'axios';
   import getToken from '../../components/reusable/token.vue';
  export default{
  components: { Button,   draggable},
   data(){
        return{
            isHiddenOptions:false,
            materials:[
                {id:1, material:'Full Material', color:'#ADADAD'},
                {id:2, material:'Combo',color:'#393939'},
            ],
            materialsAll:[
                {id:3, material:'material 2', color:'#223d8f'},
                {id:4, material:'matherial 3', color:'#575656'},
            ],
            isHiddenDebossing:false,
            debossings:[
                {id:1,  txt:'Front Text', color:'#ADADAD'},
                {id:2, txt:'Back Text',  color:'#575656'},
            ],
            debossingsAll:[
                {id:3,  txt:'Front Text', color:'#ADADAD'},
                {id:4,  txt:'Back Text',  color:'#575656'},
            ],
              photos: [],
              busy: false,
              limit: 10,
        }
    },
    methods:{
        
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
  
 }

    }
}
 </script>
 <style>
    .album-right-side{
        /* height: 100vh; */
        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
        background: #fff;
        /* overflow: scroll!important; */
    }

    /* top */

    .cover-left, .endleaf-left, .spread-left, .album-left,.cover-right, .endleaf-right, .spread-right,.album-right {
        padding: 0;
    }

    .cover-center, .album-center{
        background-color:rgb(9, 11, 10);
    }
    .top-cv-center{
        height:-webkit-fill-available;
        box-shadow: -1px 0px 8px 1px lightgrey;
    }
    .endleaf-center, .spread-center{
        width: 3px;
        background-color: #EEEEEE;
        border-top: 4px solid #101010;
        border-bottom: 4px solid #101010;
        margin: 1.5px 0 1.5px 0!important;
        z-index: 100;

    }
    .endleaf-left, .spread-left{
        border-top: 4px solid #101010;
        border-left: 4px solid #101010;
        border-bottom: 4px solid #101010;
    }
    .endleaf-right, .spread-right{
        border-bottom: 4px solid #101010;
        border-top: 4px solid #101010;
        border-right: 4px solid #101010;
    }
    .spread-left img, .spread-right img{
        height: 110px;
    }
    .add-new-item{
        text-align: center;
        position: relative!important;
        top: -0.5rem;
    }
    /* .add-btn-div{
        background-color: #EFF0F1;
        width: 50%;
        margin: auto;
    }
    .add-btn-div .btn{
        color: #6C757D;
        background: none;
        border: 0;
        font-size: 2rem;
    } */
    .cover-left img, .cover-right img{
        height: 96%;
        margin-top: 1.5px;
    }
    .cover-left img, .endleaf-left img, .endleaf-left{
        border-radius: 10px 0px 0px 10px;
    }
    .cover-right img, .endleaf-right img, .endleaf-right{
        border-radius: 0px 10px 10px 0px;
    }
    .endleaf-item .endleaf-item3{
        position: relative;
        top: 0.5rem;
    }
    .top-scrolling-div{
        background-color: #F7F7F8;
    }
    .wrapper{
        overflow-x:scroll;
        overflow-y: hidden;
    }

    .content{
    width: auto;
    white-space:nowrap; 
    }

    .item{
        display: inline-block;
        width: 300px;
        border-right: 1px solid #DCDDDF;
        position: inherit;
        margin: 0.2rem;
        padding: 0 2rem 0 1rem;
        cursor: pointer;
    }
    .spreadClose:hover{
        background-color: #EDEDEE;
    }
    .item:hover .close-btn{
        display: block!important;
    }
    .close-btn{
        margin-top:-2rem;
        margin-left: 2rem;
    }
    .add-spread{
        font-size: 14px;
    }
    .add-new-item:hover .add-spread{
        display: block!important;
    }
    .add-new-item:hover .add-btn-div .btn{
        font-size: 1rem;
    }
    .top-cover-right{
        z-index: 10;
    }
    .alb-top-center{
        z-index: 100;
    }
    .cover-txt{
        color: #223D8F;
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        font-size: 19px;
        padding-right: 28px;
    }
    .endleaf-center-line{
        height: 100%;
        border-right: 1px solid #DCDDDF;
        position: absolute;
        right: 10px;
    }
    .endleaf-txt{
        color: #393939;
    }
    .spread-center-line{
        border-top: 4px solid #101010;
        border-bottom: 4px solid #101010;
        margin: 1.5px 0 1.5px 0!important;
        z-index: 100;
    }
    .spread-drag-txt{
        font-size: 7px;
        font-weight: 700;
        color: #707070;
        margin-top: -4rem!important;
        z-index: 100;
    }
    .add-spread{
        border: 1px solid #ADADAD;
        width: 38px;
        height: 38px;
        border-radius: 10px;
        margin: auto;
        text-align: center;
        margin-bottom: 2rem;
        font-size: 24px;
        color: #ADADAD;
    }
    /* right */
    .alb-size{
        font-size: 28px;
        color: #393939;
        font-weight: 700;
    }
    .alb-price{
        color: #393939;
        font-size: 20px;
        font-weight: 700;
        margin-top: 8px;
    }
    .spread-img{
        border-right: 1px solid #ADADAD;
        padding-right: 1rem;
    }
    .manage-spreads{
        color: #393939;
        padding-left: 1rem;
        font-size: 16px;
    }
    .mg-spreads{
        box-shadow: -1px 0px 8px 1px lightgrey;
        background: white;
        padding: 1rem;
        border-radius: 10px;
        height: 56px;
    }
    .full-material{
        width: 110px;
        height: 85px;
        border-radius: 10px;
    }
    .full-material-txt{
        margin-top: 2.3rem;
        margin-left: 1rem;
        color: #393939;
        font-weight: 700;
        font-size: 19px;
    }
    .debosiing{
        color: #393939;
        font-weight: 600;
        font-size: 20px;
    }
    .deb-btn{
        color: #ADADAD;
        border: 1px solid #ADADAD;
        width: 38px;
        height: 38px;
        margin-right: 1rem;
        border-radius: 10px;
    }
    /* center */
    .cover-sheat{
        color: #393939;
        text-transform: uppercase;
        font-size: 18px;
    }
    .fa-angle-right{
        color: #ADADAD;
        cursor: pointer;
    }
    .refresh-btns{
        width: 22px;
        cursor: pointer;
    }
    .back-btn-album{
        padding: 0.5rem 2rem;
    }
    .back-btn-album:hover{
        color: #223D8F;
        background-color: #fff;
    }

    /* album */
    
.album-item{
    border-bottom: 2px solid #223D8F;
    padding-bottom: 2rem;
}
.album-left img, .album-right img {
    margin-top: 3.5px;
}
.center-width{
    width: 100%;
}
.alb-center-div{
    z-index: 10;
    height: 17.2rem;
    position: relative;
    top: 2px;
    width: 55px!important;
}
.alb-center-div img{
    box-shadow: -1px 0px 8px 1px lightgrey;
}
.visible{
    width: auto;
}
.cover-left-side{
    border-radius: 10px 0 0 10px;
    height: 17rem;
}
.cover-right-side{
    border-radius: 0 10px 10px 0;
    height:17rem
}
.cover-center{
    height: 100%;
}
.screen-size{
    text-align: end;
    margin-top: 15px;
}
.photo-elements{
    width: fit-content!important;
}
.photo-elements img{
    height: 200px;
}
.limited-scroll{
    width: 1130px;
    height: 200px;
    overflow-x: scroll;
    overflow-y: hidden;
}
.add-filter-photos{
    padding-top: 0;
    padding-bottom: 2rem;
}
.screen-size p{
    color: #ADADAD;
    margin-top: 12px;
    margin-right: 1rem;
}
.screen-size img{
    margin-right: 1rem;
}
</style>