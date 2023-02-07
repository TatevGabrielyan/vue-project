<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top" id="studentExcelTop">
            <p class="watermark-header text-uppercase">Student excel</p>
           
         </div>
         <div class="col-lg-3">
         </div>
         
         <div class="col-lg-9 text-start" id="studentExcel">
           <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
               <div class="row">
                     <div class="col-lg-8 col-md-12 col-12">
                        <div class="form-group mt-3 selected-form ">
                           <b-form-checkbox-group
                              v-model="selected"
                              :options="options"
                              value-field="item"
                              text-field="name"
                              disabled-field="notEnabled"
                              class="excel-checkbox"
                              ></b-form-checkbox-group>
                              
                        </div>
                        
                     </div>
                      <div class="col-lg-4 col-md-12 col-12 mt-3">
                        <button type="btn" class="text-uppercase upload-btn hover-btns">Upload</button>
                      </div>
                     
                    
                  </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 excel-btns text-lg-end text-md-end text-start">
                <div class="mt-4"><button type="btn" class="text-uppercase upload-btn hover-btns">Excel info</button></div>
                <div class="mt-3"><button type="btn" class="text-uppercase upload-btn hover-btns">User info</button></div> 
                <div class="mt-3"><button type="btn" class="text-uppercase upload-btn hover-btns">Excel details</button></div> 
            </div>
            
           </div>
           <div class="col-lg-4 col-md-6 col-12 download-excel-btns">
              <div class="mt-3"><button type="btn" class="text-uppercase download-btn hover-btns">DOWNLOAD AN EXCEL PROTOTYPE</button></div> 
              <div class="mt-3"><button type="btn" class="text-uppercase download-btn hover-btns">DOWNLOAD AN EXCEL EXAMPLE</button></div> 
              <div class="mt-4"><button type="btn" class="text-uppercase excel-next">Next</button></div> 
           </div>
             
         </div>
      </div>
   </div>
</template>
<script>
 import Button from '../Button.vue';

 export default{
      components:{
            Button,
      },
  data() {
      return {

            selected: [],
             options: [
          { item: '0', name: 'Upload a new excel file' }, 
          { item: '1', name: 'View all excel files you have loaded today' },
        ],
      }
    },
    methods: {
    send() {
      let obj = {
        check_items: this.selected
      };
      let obj2nd = {
        check_items2nd: this.selected2nd
      };
       console.log(obj, obj2nd)
      	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
     		  obj,
              obj2nd
              
   		  })
         .then(res => {
           console.log(res.data)
         })
    }
  },
 
 }
</script>
<style>
    .excel-checkbox div label span{
        position: relative;
        top: 3px;
        font-size: 14px;
    }
    .excel-checkbox div{
        margin-bottom: 1rem;
    }
    .upload-btn{
        background: #223d8f;
        color: #fff;
        width: inherit;
        padding: 0.1rem;
        border-radius: 10px;
        width: 175px;
    }
    .excel-checkbox .custom-checkbox {
        white-space: inherit;
    }
    .excel-btns{
        text-align: end;
        padding-right: 3rem;
    }
    .download-btn{
        background: #223d8f;
        color: #fff;
        width: inherit;
        padding: 0.3rem;
        border-radius: 10px;
        width: 270px;
        font-size: 14px;
    }
    .excel-next{
        border: 2px solid #223D8F;
        width: 220px;
        height: 50px;
        margin-left: 2.1rem;
        border-radius: 3px;
        color: #223D8F;
        font-weight: 700;
    }
    .excel-next:hover{
        background-color: #223D8F;
        color: #fff!important;
    }
    .hover-btns{
         border: 2px solid #223D8F;
         font-weight: 700;
    }
    .hover-btns:hover{
         background-color: #fff;
        color: #223D8F!important;
        border: 2px solid #223D8F;
    }
    @media only screen and (max-width:400px){
      .excel-checkbox div label span{
        font-size: 11px;
      }
    }
</style>