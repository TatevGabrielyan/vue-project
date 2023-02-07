<template>
   <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
         integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <div class="row">
            <div class="col-lg-1 col-12"></div>
            <div class="col-xl-8 col-12 mytabs-div mt-5" id="studioWatermark" style="margin: 0 auto;">
                <div class="col-xl-8 col-md-12 mt-3">
                <div class="wat_image">
                    <div class="container">
                        <div class="row">
                            <div class=" col-xl-6 col-md-5 mt-5">
                            <input
                                        id="apple44"
                                        type="checkbox"
                                        class="checkbox "
                                        @click="water_mark"
                                        >
                                        <label for="apple44" class="wat-img">Watermark Image</label>
                                <input id="fileUpload" ref="fileInput" @input="pickFile" type="file" hidden>
                                <div>
                                    <button @click="chooseFiles()" class="upload">Upload</button>
                                </div>
                            </div>
                            <div class="col-xl-6 col-md-5 mt-5">
                            <input
                                        id="apple404"
                                        type="checkbox"
                                        class="checkbox "
                                        @click="water_mark"
                                        >
                                        <label for="apple404" class="wat-img">Watermark Text</label>
                            <div class="aaa">
                                <input type="text" placeholder="WATERMARK" id="water__mark"
                                    v-on:input="incrim($event.target.value)">
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-5 col-md-12 ">
                            <div class="bbb">
                                <p class="check_txt">Color</p>
                                <div class="button_rows">
                                    <button v-on:click="color1" class="other1">
                                    <input id="color1" type="checkbox" name="checkcolor"
                                        @click="onlyOnecolor($event)" class="color_box" checked>
                                    <label for="color1" class="box_label"></label>
                                    </button>
                                    <button v-on:click="color2" class="other2">
                                    <input id="color2" type="checkbox" name="checkcolor"
                                        @click="onlyOnecolor($event)" class="color_box" >
                                    <label for="color2" class="box_label"></label>
                                    </button>
                                    <button v-on:click="color3" class="other3">
                                    <input id="color3" type="checkbox" name="checkcolor"
                                        @click="onlyOnecolor($event)" class="color_box">
                                    <label for="color3" class="box_label"></label>
                                    </button>
                                </div>
                            </div>
                            </div>
                            <div class="col-xl-6 col-6 col-md-12 check_2">
                            <input
                                        id="apple404"
                                        type="checkbox"
                                        class="checkbox "
                                        @click="water_mark"
                                        >
                                        <label for="apple404" class="wat-img">Set Default</label>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="check_3">
                            <div class=" ddd" v-if="!previewImage">
                                <p class="check_txt">Position</p>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a5" @click="changePositionTopLeft">
                                            <input id="apple4" type="checkbox" name="check"
                                                @click="onlyOne($event)" class="position_box">
                                            <label for="apple4" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a4" @click="changePositionTopRight">
                                            <input id="apple3" type="checkbox" name="check"
                                                    @click="onlyOne($event)" class="position_box">
                                            <label for="apple3" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a3" @click="changePositionCenter">
                                            <input id="apple2" type="checkbox" name="check"
                                                @click="onlyOne($event)" class="position_box">
                                            <label for="apple2" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a2" @click="changePositionBottomLeft">
                                            <input id="apple1" type="checkbox" name="check"
                                                    @click="onlyOne($event)" class="position_box">
                                            <label for="apple1" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a1" @click="changePositionBottomRight">
                                            <input id="apple" type="checkbox" name="check"
                                                @click="onlyOne($event)" class="position_box" checked>
                                            <label for="apple" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" ddd" v-if="previewImage">
                                <p class="check_txt">Position</p>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a5" @click="picchangePositionTopLeft">
                                            <input id="apple4" type="checkbox" name="check"
                                                @click="onlyOne($event)" class="position_box">
                                            <label for="apple4" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a4" @click="picchangePositionTopRight">
                                            <input id="apple3" type="checkbox" name="check"
                                                @click="onlyOne($event)" class="position_box">
                                            <label for="apple3" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a3" @click="picchangePositionCenter">
                                            <input id="apple2" type="checkbox" name="check"
                                                onclick="onlyOne(this)" class="position_box">
                                            <label for="apple2" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a2" @click="picchangePositionBottomLeft">
                                            <input id="apple1" type="checkbox" name="check"
                                                onclick="onlyOne(this)" class="position_box">
                                            <label for="apple1" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                        <div class="col-xl-2 col-4 col-md-2">
                                        <div class="a1" @click="picchangePositionBottomRight">
                                            <input id="apple" type="checkbox" name="check"
                                                onclick="onlyOne(this)" class="position_box" checked>
                                            <label for="apple" class="box_label"></label>
                                            text
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-10 col-md-10 ">
                            <div class="bbb">
                                <p class="check_txt">Opacity</p>
                                <input type="range" class="rang" min="10" max="100" step="1" v-model="opa_city">
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-12 col-md-10 ">
                            <div class="bbb">
                                <p class="check_txt">Size</p>
                                <input type="range" class="rang" min="20" max="47" step="1" v-model="font_size"
                                    v-show="!previewImage">
                                <input type="range" class="rang" min="0" max="400" step="1" v-model="wid"
                                    v-show="previewImage">
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-12 mt-4 button_div">
                            <button class="save">SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="col-xl-2 col-12 col-md-6 col-lg-6 mt-3">
                <div class="picture">
                    <div class="pos_bottom_right" id="a1" v-bind:style="{color:activeColor,opacity: `${this.opa_city - 0.1}%`,fontSize: font_size + 'px',}" v-show="!previewImage">
                        {{
                        value }}
                    </div>
                    <div class="pic_pos_bottom_right" id="a2" :style="{ backgroundImage: `url('${previewImage}')`,width:wid +'px' }" v-if="previewImage"></div>
                </div>
                </div>
                </div>
        </div>
   </div>
</template>
<script>
// import Watermark from '@serializedowen/vue-img-watermark'
import axios from 'axios'

export default {
   components:{
    // Watermark
   },
   data() {
//     const options = {
//    mode: "fill",
//    textBaseline: "middle",
//    font: "15px Arial",
//    fillStyle: "white",
//    content: "请勿外传",
//    rotate: 45
// }
                 return {
                  
                     value: "Watermark",
                     activeColor: '#FFFFFF',
                     checkkedNames:[],
                     font_size: 40,
                     wid: 200,
                     opa_city:80,
                     // previewImage: 'fabio-consilvio-U_NkHa7T7mA-unsplash.png'
                     previewImage: null,
                
                 }
             },
             methods: {
                 incrim(value) {
                     this.value = value
                 },
               
                 color1() {
                     this.activeColor = '#FFFFFF'
                 },
                 color2() {
                     this.activeColor = '#ADADAD'
                 },
                 color3() {
                     this.activeColor = '#393939'
                 },
         
         
         
                 changePositionCenter() {
                     var collection = document.getElementById("a1");
                     // collection.classList.remove("aaa")
                     collection.classList.value = ''
                     collection.classList.add("pos_center")
         
                     console.log(collection)
         
                 },
         
         
                 picchangePositionCenter() {
                     var collection = document.getElementById("a2");
                     // collection.classList.remove("aaa")
                     collection.classList.value = ''
                     collection.classList.add("pic_pos_center")
         
                     console.log(collection)
         
                 },
         
         
                 changePositionBottomLeft() {
                     var collection = document.getElementById("a1");
                     // collection.classList.remove("bbb")
                     collection.classList.value = ''
                     collection.classList.add("pos_bottom_left")
         
                     console.log(collection)
                 },
         
                 picchangePositionBottomLeft() {
                     var collection = document.getElementById("a2");
                     // collection.classList.remove("bbb")
                     collection.classList.value = ''
                     collection.classList.add("pic_pos_bottom_left")
         
                     console.log(collection)
                 },
         
                 changePositionBottomRight() {
                     var collection = document.getElementById("a1");
                     // collection.classList.remove("aaa")
                     collection.classList.value = ''
                     collection.classList.add("pos_bottom_right")
         
                     console.log(collection)
                 },
         
                 picchangePositionBottomRight() {
                     var collection = document.getElementById("a2");
                     // collection.classList.remove("aaa")
                     collection.classList.value = ''
                     collection.classList.add("pic_pos_bottom_right")
         
                     console.log(collection)
                 },
         
                 changePositionTopRight() {
                     var collection = document.getElementById("a1");
                     // collection.classList.remove("ccc")
                     collection.classList.value = ''
                     collection.classList.add("pos_top_right")
         
                     console.log(collection)
                 },
         
                 picchangePositionTopRight() {
                     var collection = document.getElementById("a2");
                     // collection.classList.remove("ccc")
                     collection.classList.value = ''
                     collection.classList.add("pic_pos_top_right")
         
                     console.log(collection)
                 },
         
                 changePositionTopLeft() {
                     var collection = document.getElementById("a1");
                     // collection.classList.remove("ddd")
                     collection.classList.value = ''
                     collection.classList.add("pos_top_left")
         
                     console.log(collection)
                 },
         
         
                 picchangePositionTopLeft() {
                     var collection = document.getElementById("a2");
                     // collection.classList.remove("ddd")
                     collection.classList.value = ''
                     collection.classList.add("pic_pos_top_left")
         
                     console.log(collection)
         
         
         
                 },
                
                 set_default() {
                     this.activeColor = '#393939'
                 },
                 water_mark() {
                     this.value = "watermark"
         
                 },
                 chooseFiles() {
                     document.getElementById("fileUpload").click()
                 },
                 selectImage() {
                     this.$refs.fileInput.click()
                 },
         
                 pickFile() {
                     let input = this.$refs.fileInput
                     let file = input.files
                     if (file && file[0]) {
                         let reader = new FileReader
                         reader.onload = e => {
                             this.previewImage = e.target.result
                         }
                         reader.readAsDataURL(file[0])
                         this.$emit('input', file[0])
                     }
                 },
         
                 onlyOne(checkbox) {
             var checkboxes = document.getElementsByName('check')
           checkboxes.forEach((item) => {
                console.log(item.id);
                console.log(checkbox.target.id)
                 if (item.id !== checkbox.target.id) item.checked = false
             })

             console.log(checkbox)
         
         
         },
         
         onlyOnecolor(checkbox2) {
             var checkboxes = document.getElementsByName('checkcolor');
            //  console.log(checkboxes[0]);
             checkboxes.forEach((item) => {
                console.log(item.id);
                console.log(checkbox2.target.id)
                 if (item.id !== checkbox2.target.id) item.checked = false
             })
         
                    //   console.log(checkbox2)

         }
             },
             computed: {

                fontSize: () => `font-size:${this.font_size + 1}px`,
                 sizee() {

                     return `width: ${this.wid - 1}px;`
                 },
             }, 
             mounted(){
                axios({
                method: 'get',
                url: 'http://localhost:3000/loggedUser/',
               
              })
            .then(res => {
                for(let i in res.data){
                    if(res.data[i].watermarkLogo == 'true'){
                        axios({
                    method: 'get',
                    url: 'http://localhost:3000/watermarkLogoData/',
                
                })
                .then(res => {
                    for(let i in res.data){
                        let wtr = document.getElementById('a1');
                        wtr.innerHTML = '';
                        let img = document.createElement('img');
                        img.src = res.data[i].watermarkLogo;
                        img.style.objectFit = 'cover';
                        img.style.position = 'relative';
                        img.style.width = res.data[i].logoWidth;
                        img.style.height = res.data[i].logoHeight;
                        wtr.appendChild(img);
                    }
                });
                    }
                }
            })
             }      
                
}

</script>

<style scoped>


   * {
    margin: 0;
    padding: 0;
}

.mytabs-div{
display: flex;
flex-wrap: wrap;
}
/* 
  html { width: 80%;height:80%; } */
.box_label {
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    border-radius: 7px;
    width: 70px;
    height: 70px;
    margin: -2px;
    position: absolute;
    top: 0px;
    left: 0;
    padding-top: 50px;
}

.color_label {

    font-size: 10px;
    text-align: center;
    font-weight: bold;
    border-radius: 7px;
    width: 70px;
    height: 70px;
    margin: -2px;
    top: 0px;
    left: 0;
    padding-top: 50px;
    position: absolute;

}

.first_checkbox_label {

    font-size: 10px;
    text-align: center;
    font-weight: bold;
    /* border: 1px solid red; */
    border-radius: 7px;
    width: 40px;
    height: 40px;
    margin: -2px;
    top: 0px;
    left: 0;
    padding-top: 50px;
    position: absolute;

}

.set_default_label {
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    /* border: 1px solid red; */
    border-radius: 7px;
    width: 40px;
    height: 40px;
    margin: -2px;
    top: 0px;
    left: 0;
    padding-top: 50px;
    position: absolute;
}

.WatermarkImage_label {
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    /* border: 1px solid red; */
    border-radius: 7px;
    width: 40px;
    height: 40px;
    margin: -2px;
    top: 0px;
    left: 0;
    padding-top: 50px;
    position: absolute;
}

.position_box {
    display: none;
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    font-size: 10px;
    text-align: center;
    padding-top: 45px;
    padding-left: 35px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;

}

.first_checkbox {
    display: none;
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    font-size: 10px;
    text-align: center;
     padding-top: 45px;
                /*padding-left: 35px; */
    font-weight: bold;
    border-radius: 7px;
    position: relative;
}

.color_box {
    display: none;
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    font-size: 10px;
    text-align: center;
    padding-top: 45px;
    padding-left: 35px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;

}

.position_color {
    display: none;
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    font-size: 10px;
    text-align: center;
    padding-top: 45px;
    padding-left: 35px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;

}

.position_box:checked+label:before {
    content: url(../../../assets/icons/done.png);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: break-all;
}


.color_box:checked+label:before {
    content: url(../../../assets/icons/done.png);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: break-all;

}

.first_checkbox:checked+label:before {
    content: url(../../../assets/icons/done.png);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: break-all;
}

.set_default_label:checked+label:before {
    content: url(../../../assets/icons/done.png);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: break-all;
}

.container {
    margin: 0;
}


/* input[type=range] {
    height: 33px;
    -webkit-appearance:checkbox
    margin: 10px 0;
    width: 100%;
  } */
input[type=range] {
    -webkit-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ADADAD;
    border: none;
    height: 8px;
    border-radius: 3px;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 25px;
    width: 25px;
    border-radius: 7px;
    background: #223D8F;
    margin-top: -10px;
}

input[type=range]:focus {
    outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ccc;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* margin-right: -15px; */
    margin-left: -15px;
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
    position: relative;
    width: 100%;
    /* padding-right: 15px; */
    /* padding-left: 15px; */
}

/* .first{
display: flex;
} */

h1 {}


.watermarktext {
    position: absolute;
    /* flex-wrap: wrap;
    font-size: 30px;
    text-align: center;
    box-sizing:content-box;
 
    height: 80px; */
    word-break: break-all;
    width: 200px;
}

.flex-container h1 {
    margin-left: 30px;
}

.wat_image {
    background: rgb(255, 255, 255);
    box-shadow: 0px 6px 12px #707070;
}


.check {
    padding-top: 34px;
    /* margin-left: 30px; */

}

.first_checkbox {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: inline-block;
    float: left;
    /* border: 1px solid red; */
    background: #ffffff;
    border: 1px solid #707070;
}


.check_txt {
    font-size: 20px;
    font-family: 'Montserrat';
    color: #393939;
    /* width: 200px; */
    display: flex;
}

button {
    padding: 9px 83px 11px 72px;
    font-size: 22px;
    font-family: 'Montserrat';
    background: #223D8F;
    color: #FFFFFF;
    border-radius: 7px;
    border: none;

}

 .upload {
    padding: 5px 47px;
    font-size: 22px;
        font-family: 'Montserrat';
        background: #223D8F;
        color: #FFFFFF;
        border-radius: 10px;
        border: 2px solid #223D8F;
        font-weight: 500;
    }
    .upload:hover{
        background: #fff;
        color: #223D8F;
    }

.aaa {
    margin-left: 49px;
}

input {
    border: none;
    /* border-bottom: 1px solid black; */
    padding: 9px;

}

::placeholder {
    color: #223D8F;
    font-size: 14px;
        /* font-size: 18px; */
    font-family: 'Montserrat';
    outline: none;
    margin-left: 50px;
}

.check_1 {
    padding-top: 34px;
    margin-left: 30px;
    float: left;
    margin-left: 30px;
}

.check_2 {
    padding-top: 85px;
    /* margin-left: 34px; */
}

.check_3 {
    /* margin-left: 30px; */
      width: 500px;

}

.check_4 {
    margin-left: 30px;
}

.check_5 {
    margin-left: 30px;
}

#water__mark {
    /* margin-top: -60px; */
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
}
#water__mark:focus {
    outline: none;
}
#A {
    width: 70px;
    height: 70px;
    background: #FFFFFF;
    margin-right: 20px;
    margin-top: -17px;
    border: 1px solid black;
}

#b {
    width: 70px;
    height: 70px;
    margin-right: 20px;
    margin-top: -17px;
    background: #ADADAD;
    ;

}

.imagePreviewWrapper {
    cursor: pointer;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;

    position: absolute;
    display: flex;
    ;
    flex-wrap: wrap;
    font-size: 30px;
    text-align: center;
    box-sizing: content-box;
    word-break: break-all;
}

#c {
    width: 70px;
    height: 70px;
    background: #FFFFFF;
    margin-top: -17px;
    margin-right: 20px;

}

.ddd {
    margin-top: 37px;


}


.bbb {
    /* margin-top: 37px; */
    margin-top: 20px;



}


.rang {
    width: 390px;
    float: left;
}


.picture {
    width: 462px;
    background-image: url(../../../assets/icons/mounth.png);
    /* margin-left: 30px; */
    height:674px;
    /* background-size: contain; */
    border: 1px solid rgba(255, 0, 0, 0);
    position: relative;
}


.pos_top_right {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 20px;
    margin-top: 10px;
    word-break: break-all;
    height: 300px;
    max-width: 500px;

}

.pic_pos_top_right {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 20px;
    margin-top: 10px;
    word-break: break-all;
    background-repeat: no-repeat;
    object-fit: contain;
    max-width: 500px;
    height: 200px;
    background-size: 100% 100%;

}

.pos_top_left {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 20px;
    margin-top: 10px;
    word-break: break-all;
    max-width: 500px;

}

.pic_pos_top_left {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 20px;
    margin-top: 10px;
    word-break: break-all;
    background-repeat: no-repeat;
    object-fit: contain;
    max-width: 500px;
    height: 200px;
    background-size: 100% 100%;

}


.pos_bottom_left {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 20px;
    margin-top: 10px;
    word-break: break-all;
    max-width: 500px;

}


.pic_pos_bottom_left {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 20px;
    margin-bottom: 10px;
    word-break: break-all;
    background-repeat: no-repeat;
    object-fit: contain;
    max-width: 500px;
    height: 200px;
    background-size: 100% 100%;
}

.pos_bottom_right {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 10px;
    word-break: break-all;
    max-width: 500px;
}

.pic_pos_bottom_right {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    margin-bottom: 10px;
    word-break: break-all;
    background-repeat: no-repeat;
    object-fit: contain;
    max-width: 500px;
    height: 200px;
    background-size: 100% 100%;
}


.pos_center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: break-all;
    max-width: 500px;

}

.pic_pos_center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    word-break: break-all;
    background-repeat: no-repeat;
    object-fit: contain;
    max-width: 500px;
    height: 200px;
    background-size: 100% 100%;
}

.save {
    /* padding: 9px 83px 11px 72px; */
    padding: 5px 61px;
    font-size: 22px;
    font-family: 'Montserrat';
    background: #ffffff;
    color: #223D8F;
    border-radius: 10px;
    border: 3px solid #223D8F;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 25px;
    font-weight: bolder;
}

.a1 {
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    font-size: 10px;
    text-align: center;
    padding-top: 45px;
    padding-left: 35px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;
   

}

.a2 {
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    font-size: 10px;
    text-align: center;
    padding-top: 45px;
    padding-right: 35px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;


}

.a3 {
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    text-align: center;
    padding-top: 25px;
    font-size: 10px;
    font-weight: bold;
    position: relative;

    border-radius: 7px;


}

.a4 {
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    padding-left: 40px;
    padding-top: 7px;
    font-size: 10px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;


}

.a5 {
    width: 70px;
    height: 70px;
    background: #E0E0E0;
    font-size: 10px;
    padding-right: 40px;
    padding-top: 7px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;


}

.other1 {
    width: 70px;
    height: 70px;
    padding: 0;
    background: #FFFFFF;
    box-shadow: 0px 6px 12px #707070;

    /* background:#E0E0E0; */
    font-size: 10px;
    text-align: center;
    padding-top: 45px;
    padding-left: 35px;
    font-weight: bold;
    border-radius: 7px;
    position: relative;
    /* border: 1px solid red; */
    display: block;
    position: relative;


}

.other2 {
    width: 70px;
    height: 70px;
    padding: 0;
    background: #ADADAD;
    box-shadow: 0px 6px 12px #707070;
    position: relative;

}

.other3 {
    width: 70px;
    height: 70px;
    padding: 0;
    background: #393939;
    box-shadow: 0px 6px 12px #707070;
    position: relative;


}

.button_rows {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 24px;
    width: 250px;
    /* -webkit-box-pack: justify; */
    -ms-flex-pack: justify;
    justify-content: space-between;

}

.button_div {
    display: flex;

}

#container2 {
    width: 960px;
    position: relative;
    margin: 0 auto;
    line-height: 1.4em;
}
.wat-img{
    position: relative;
    bottom: 0.5rem;
}

@media only screen and (max-width: 500px) and (min-width: 200px) {
    html { width: 100%;height:100%; }

    
    

    .picture {
        margin-top: 25px;
        margin-left: 0px;
        background-repeat: no-repeat;
        background-size: auto;
        box-sizing: border-box;
        width: 100%;

        position: relative;


    }

    .check_2 {
    padding-top: 54px;
    margin-left: 34px;
}

    .pic_pos_bottom_right {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 20px;
        margin-bottom: 10px;
        word-break: break-all;
        background-repeat: no-repeat;
        object-fit: contain;
        max-width: 200px;
        height: 200px;
        background-size: 100% 100%;
    }

    .pic_pos_bottom_left {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-left: 20px;
        margin-bottom: 10px;
        word-break: break-all;
        background-repeat: no-repeat;
        object-fit: contain;
        max-width: 200px;
        height: 200px;
        background-size: 100% 100%;
    }

    .pic_pos_center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        word-break: break-all;
        background-repeat: no-repeat;
        object-fit: contain;
        max-width: 200px;
        height: 200px;
        background-size: 100% 100%;
    }

    .pic_pos_top_left {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 20px;
        margin-top: 10px;
        word-break: break-all;
        background-repeat: no-repeat;
        object-fit: contain;
        max-width: 200px;
        height: 200px;
        background-size: 100% 100%;
    }
    .pic_pos_top_right {
        position: absolute;
        top: 0;
        right: 0px;
        margin-left: 20px;
        margin-top: 10px;
        word-break: break-all;
        background-repeat: no-repeat;
        object-fit: contain;
        max-width: 200px;
        height: 200px;
        background-size: 100% 100%;
    }
    .check_4 {
        margin-left: 15px;
    }
    .upload {
        padding: 5px 41px;
        font-size: 12px;
        font-family: 'Montserrat';
        background: #223D8F;
        color: #FFFFFF;
        border-radius: 7px;
        border: none;
        margin-top: -60px;
    }

    .a1,
    .a2,
    .a3,
    .a4,
    .a5 {

        margin-bottom: 100%;
    }

    .rang {
        width: 300px !important;
    }

}


@media only screen and (max-width: 950px) and (min-width: 812px) {


    .picture {
        margin-top: 25px;
        margin-left: 0px;
        background-repeat: no-repeat;
        background-size: auto;
        box-sizing: border-box;
        position: relative;


    }

    button {
        padding: 9px 83px 11px 72px;
        font-size: 12px;
        font-family: 'Montserrat';
        background: #223D8F;
        color: #FFFFFF;
        border-radius: 7px;
        border: none;
        margin-top: -60px;
    }

    .a1,
    .a2,
    .a3,
    .a4,
    .a5 {

        margin-bottom: 100%;
    }

    .rang {
        width: 300px !important;
    }

}

@media only screen and (max-width:384px) {


    .picture {
        margin-top: 25px;
        margin-left: 0px;
        background-repeat: no-repeat;
        background-size: auto;
        box-sizing: border-box;
        position: relative;
        width: 100%;


    }

    button {
        padding: 9px 60px 11px 60px;
        font-size: 12px;
        font-family: 'Montserrat';
        background: #223D8F;
        color: #FFFFFF;
        border-radius: 7px;
        border: none;
        margin-top: -60px;
    }

    

    .check {
        /* padding-top: 34px;
        margin-left: 4px; */
    }

    .ddd {
        margin-top: 37px;
        margin-left: 9px;


    }

    .check_3 {
        margin-left: 6px;
      
    }

    .a1,
    .a2,
    .a3,
    .a4,
    .a5 {

        margin-bottom: 100%;
    }

    .rang {
        width: 200px !important;
    }


}


@media only screen and (max-width: 1008px) {
    .container {
        margin: 0 auto;
    }

    .picture {
        margin-left: 0px;
        background-repeat: no-repeat;
        background-size: auto;
        margin: 0 auto;
        position: relative;


    }

    .imagePreviewWrapper {
        margin: 0 auto;

    }

    .a1,
    .a2,
    .a3,
    .a4,
    .a5 {

        margin-bottom: 100%;
    }

    .rang {
        width: 100%;
    }

}

@media only screen and (max-width: 1024px) {
    .container {
        margin: 0 auto;
    }

    .picture {
        margin-top: 25px;
        margin-left: 0px;
        background-repeat: no-repeat;
        background-size: auto;
        position: relative;

    }


    .a1,
    .a2,
    .a3,
    .a4,
    .a5 {

        margin-bottom: 100%;
    }

    .rang {
        width: 100%;
    }

}
</style>
