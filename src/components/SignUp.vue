<template>
   <div id="signup" class="">
      <div class="">
         <div class="row">
            <div class="col-lg-2 col-md-3 d-lg-block d-md-block d-none left-sidebar">
               <div class="circle-div">
                  <div class="main-circle">
                     <div class="blue-circle">
                        <img src="../assets/icons/white.png" alt="tricolor-logo">
                     </div>
                  </div>
               </div>
            </div>
             <div class="d-lg-none d-md-none d-block imaging-center-div">
                <p class="text-uppercase imaging-center-sm imaging-signup">Professional Imaging Center</p>
               <div class="circle-div-sm">
                  <div class="main-circle-sm">
                     <div class="blue-circle-sm">
                        <img src="../assets/icons/white.png" alt="tricolor-icon-white">
                     </div>
                  </div>
               </div>
            </div>

            <div class="col-lg-10 col-md-9 col-12">
               <div class="login container text-center">
                  <div class="m-auto tricolor-logo">
                     <img class="w-100 mt-5" src="../assets/icons/TRICOLOR CENTER.png" alt="logo">
                  </div>
                  <div class="container mt-5 p-0">
                     <div class="row">
                        <div class="col-lg-6 col-md-12 col-12 client-sign-up mb-3">
                           <div class="signUp-btns mb-5">
                              <router-link to='/ClientInformation'>
                                 <Button  class="text-uppercase text-uppercase text-nowrap sign-up-btns">
                              Client sign up
                              </Button>
                              </router-link>
                           </div>
                           <div class="signUp-details">
                              <p class="py-4 px-5 details-p">Ordering prints, cards, albums, canvas and other products</p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-12 studio-sign-up">
                           <div class="signUp-btns mb-3">
                              <router-link  to='/BusinessInformation'>
                                  <Button
                                 class="text-uppercase text-uppercase text-nowrap sign-up-btns">
                              Studio sign up
                              </Button>
                              </router-link>
                              <p>(for professional photographers)</p>
                           </div>
                           <div class=" signUp-details-right">
                              <div class="row p-4">
                                 <div class="col-lg-6 col-md-6 col-12">
                                    <p class="details-p">Uploading new files for editing</p>
                                 </div>
                                 <div class="col-lg-6 col-md-6 col-12">
                                    <p class="details-p">Ordering prints, cards, albums, canvas and other products</p>
                                 </div>
                                 <div class="col-lg-6 col-md-6 col-12 ">
                                  
                                    <p class="details-p">Uploading .jpg images to a gallery for client view</p>
                                  
                                 </div>
                                 <div class="col-lg-6 col-md-6 col-12 ">
                                   
                                    <p class="details-p">QR codes, green screens for events and school</p>
                                    
                                 </div>
                                 <div class="col-lg-6 col-md-6 col-12">
                                    
                                    <p class="details-p">Select images for prints, cards and albums</p>
                                 </div>
                                 <div class="col-lg-6 col-md-6 col-12">
                                   
                                    <p class="details-p">Prepaid events deposit and registration</p>
                                 </div>
                              </div>
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

import Button from './reusable/Button.vue';
export default{
    	components:{
			Button
		},
}
</script>
<style> 
    .signUp-btns p{
        font-size: 14px;
        color: #707070;
        font-family: "Montserrat";
        line-height: 30px;
    }
    .signUp-details, .signUp-details-right{
        max-width: 400px;
        min-height: 270px;
        border-radius: 30px;
        -webkit-filter: drop-shadow(0px 3px 5px rgba(0,0,0,0.16));
        filter: drop-shadow(0px 3px 5px rgba(0,0,0,0.16));
        background-color: #ffffff;
        margin: auto;
    }
    .signUp-details-right{
        max-width: inherit;
    }
    .details-p{
        font-size: 16.5px;
        color: #393939;
        font-family: "Montserrat";
        text-align: left;
    }
    .client-sign-up{
       padding-left: 2rem!important;
    }
    .sign-up-btns{
       font-size: 15px!important;
       width: 40%!important;
    }
    .imaging-signup{
      color: transparent;
    }
    @media only screen and (max-width:1024px){
      .signUp-details, .signUp-details-right {
         max-width: 304px;
    }
    }
    @media only screen and (max-width:425px) {
      .sign-up-btns {
      width: 100%!important;
      }
      .client-sign-up {
      padding-left: 0rem!important;
      }
}
</style>