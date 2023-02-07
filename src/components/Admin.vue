<template>
   <div>
      <Navbar class="mb-3"/>
      <div class="d-flex justify-space-between">
         <b-button id="button-2" variant="" class="tooltip-btn p-0 mouseover-hover"   @mouseover="hover = true" @mouseleave="hover = false">
            <div class="logo user-logo">
               <img src="../assets/icons/Group 1.png" alt="logo" >
            </div>
            <div class="user-tooltip"   v-if="hover">
               <div><img src="../assets/icons/Polygon 2.png" alt="polygon" class="d-block"></div>
               <div class="user-name-hover">
                  <div class="user-hover py-3 pb-4">
                     <div class="row">
                        <div class="col-4">
                           <span class="user-img">
                           <img src="../assets/icons/user-img.png" alt="user-image" class="mx-3">
                           </span>
                        </div>
                        <div class="col-8">
                           <p class="text-uppercase m-0 user-name text-start pl-4 pb-2">
                              {{username.uname}}
                           </p>
                           <a href="#" class="text-decoration-none d-block text-start profile  pl-4 pb-2">Profile</a>
                           <a href="#" class="text-decoration-none d-block text-start logout  pl-4 pb-2">Logout</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </b-button>
         <div class="container-fluid  text-end basket-div">
            <div class="input-group mb-3 justify-content-end" > 
               <span class="input-icon" id="basic-addon1">
               <img src="../assets/icons/basket.png" alt="basket">
               </span>
               <span class="divider"></span>
               <input type="submit" class="your-items text-center" aria-describedby="basic-addon1" value="Your items">
            </div>
         </div>
      </div>
      <Datatable/>

   </div>
</template>

<script>

import Navbar from './reusable/Navbar.vue';
import 'vuetify/dist/vuetify.min.css'
import Datatable from './reusable/datatable.vue';
import UserInfo from './reusable/UserInfo'

export default {
  components:{
    Navbar,
    Datatable,
	UserInfo
},
  data: function () {
    return {
      adminTables: [],
	  hover: false,
	  username : []
    };
  },


 beforeRouteEnter(to, from, next) {
	let token =  $cookies.get('token');
	   if ( token != null){
		 next();
            console.log('have token')
        }else{
         console.log('no token');
		 next('/')
        };

  },
};
</script>

<style>
table {
	table-layout: fixed;
}
table.dataTable th,
table.dataTable td {
	-webkit-box-sizing: inherit;
	box-sizing: inherit;
}
input:focus-visible {
	outline: none;
}
.your-items {
	border-radius: 0px 10px 10px 0px;
	background-color: #393939;
	width: 7rem;
	color: #ffffff;
	border-left: 0;
}
.search-button {
	border: none;
	border-radius: 0px 10px 10px 0px;
	background-color: #ffffff;
	color: #2F4996;
}
.search-icon {
	padding: 1rem 1.4rem;
	border: 1px solid;
	border: none;
	border-radius: 10px 0px 0px 10px;
	background-color: #ffffff;
}

.search-input-filter {
	filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
}

.your-items::placeholder {
	color: #ffffff;
	font-size: 18px;
	line-height: 17px;
	font-weight: 500;
	opacity: 1;
}

.input-icon {
	border-radius: 10px 0px 0px 10px;
	background-color: #393939;
}

.input-icon img {
	padding: 0.7rem 0.5rem;
	width: 85%;
}

.divider {
	display: inline-block;
	width: 0;
	height: 19px;
	border-left: 1px solid #ffffff;
	border-right: 1px solid #ffffff;
	margin-top: 16px;
}

.divider-search {
	display: inline-block;
	width: 0;
	height: 19px;
	border-left: 2px solid #ADADAD;
	margin-top: 1rem;
}

.sorting {
	white-space: nowrap;
	font-size: 17px;
	line-height: 20px;
	color: #223d8f;
	font-weight: 600;
	font-family: "Montserrat";
}

.sort-button button {
	width: 8rem;
	border: none;
	border-radius: 0px 10px 10px 0px;
	-webkit-filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
	filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
	background-color: #ffffff;
	color: #C9C9C9;
}

.sort-button {
	margin: 0 !important;
}

label:after {
	content: "/";
	color: transparent;
}

.dataTables_scrollHead {
	filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.16));
	background-color: #ffffff;
}

th {
	border: none !important;
	text-align: initial !important;
	width: 200px !important;
}

td {
	font-size: 18px;
	line-height: 20px;
	color: #202124;
	font-weight: 400;
	border-bottom: 0.5px solid #ADADAD !important;
	height: 34px;
	text-align: start;
	padding: 1rem !important;
}

.dataTables_info {
	font-size: 17px;
	color: #adadad !important;
	font-weight: 500;
}

.paginate_button {
	width: auto;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.current,
.dataTables_wrapper .dataTables_paginate {
	background: none;
	border: none;
	color: #202124 !important;
}

.paginate_button.current:hover {
	background: #223D8F;
}

::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background-color: #F7F7F7;
	border-radius: 10px;
	height: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	height: 11px;
	border-radius: 6px;
	background-color: #e0e0e0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	height: 11px;
	border-radius: 6px;
	background-color: #e0e0e0;
}

.dataTables_wrapper .dataTables_length select {
	border: none;
}

.dataTables_wrapper .dataTables_filter input {
	font-size: 18px;
	line-height: 17px;
	color: #adadad;
	font-weight: 400;
	font-family: "Montserrat";
	height: 53px;
	border-radius: 10px;
	filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
	background-color: #ffffff;
}

#datatable_filter {
	margin-right: 0.6rem;
	display: none;
}

.datatables_length {
	font-size: 18px;
	line-height: 17px;
	color: #223d8f;
	font-weight: 400;
	font-family: "Montserrat";
	font-weight: 400;
	font-family: "Montserrat";
	height: 53px;
	border-radius: 10px;
	-webkit-filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
	filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
	background-color: #ffffff;
	padding-top: 0.5rem;
}


.dataTables_wrapper .dataTables_length {
	font-weight: 400;
	border-radius: 10px;
	-webkit-filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
	filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.16));
	background-color: #ffffff;
	padding-top: 10px;
	position: absolute;
	top: -4rem;
	right: 16rem;
	text-align: center;
}


.dataTables_wrapper .dataTables_filter input {
	font-size: 18px;
	line-height: 17px;
	color: #223d8f;
	font-weight: 400;
	font-family: "Montserrat";
}



.dataTables_wrapper select option:hover {
	background-color: #F7F7F7;
}

.dataTables_scrollBody {
	border-bottom: none !important;
}

.dataTables_length label {
	font-size: 18px;
}

.btn-check:checked+.btn-secondary,
.btn-check:active+.btn-secondary,
.btn-secondary:active,
.btn-secondary.active,
.show>.btn-secondary.dropdown-toggle {
	color: #C9C9C9 !important;
	background-color: white !important;

}

.btn-check:focus+.btn-secondary,
.btn-secondary:focus {
	color: #C9C9C9 !important;
	background-color: #fff !important;
	border-color: #fff !important;
	-webkit-box-shadow: none !important;
	box-shadow: none !important;
}

.dataTables_length label select {
	border: none;
}

.dataTables_length label select option:hover .dataTables_length label select option {
	color: #223D8F !important;
}

th,
td {
	white-space: nowrap;
}

th,
td {
	border: 1px solid #202124;
	width: 200px;
	overflow: hidden;
}


#admin-datatable thead tr th:first-child, #datatable-client thead tr th:first-child{
	width: 60px !important
}
 #datatable-client thead tr th:nth-child(6){
		width: 100px !important
 }
#admin-datatable thead tr th:last-child, #datatable-client thead tr th:last-child{
	 width: 85px !important;
}
#admin-datatable thead tr th:nth-last-child(2){
	 width: 85px !important;
}
#dropdown-1__BV_toggle_ {
	font-size: 20px;
	line-height: 20px;
	color: #393939 !important;
	font-weight: 500;
}

.dataTables_filter {
	display: none;
}

table.dataTable.display tbody tr.even>.sorting_1,
table.dataTable.order-column.stripe tbody tr.even>.sorting_1 {
	background: transparent !important;
}

.sorting_1 {
	width: 60px !important;
}

#datatable_length label {
	font-size: 17px;
	line-height: 17px;
	color: #adadad;
	font-weight: 400;
}
.th-width{
	min-width: 17rem!important
}
#datatable_length label select{
	-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("../assets/icons/down-up.png") white no-repeat 98.5% !important;
    background: url("../assets/icons/down-up.png") white no-repeat calc(86% - -1px) !important;
    width: 45px;
    height: 29px;

}
.search-admin{
	    padding-right: 9px;
}
.user-name-hover{
    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
}
.user-tooltip{
    position: absolute;
    z-index: 1000000;
    left: 28px;
    top: 40px;
}

div.dataTables_length select:hover {
  color: #2F4996 !important;

}
.navbar-dark .navbar-toggler{
	border: none;
}
.navbar-toggler:focus{
	    box-shadow: none!important;

}
.basket-div{
	padding-right: 3rem!important;
}
.filter-sm{
	display: none;
}



.searching-sm{
	display: flex;
    justify-content: center;
}

.search-box{
  width: fit-content;
  height: fit-content;
  position: relative;
  filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
  background: white;
  border-radius: 10px;
  padding: 10.5px 4px;
  height: 47px;
}
.input-search{
    width: 150px;
    border-style: none;
    outline: none;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    color: #2F4996;
	padding-left: 10px;
		
}

.btn-search{
    outline: none;
    cursor: pointer;
    background-color: transparent;
    pointer-events: painted; 
	border: none;
	border-right: 2px solid #ADADAD;
}
.btn-search:focus ~ .input-search{
  width: 150px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 150px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom:1px solid rgba(255,255,255,.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.mouseover-hover:hover .user-logo img{
	width: 100%!important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover{
	border: none;
	background: none;
	color: #202124 !important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled{
	color: #ADADAD!important;
}
.dataTables_wrapper .dataTables_paginate .paginate_button:hover{
	    background: none;
    border: none;
    color: #ADADAD!important;
}

/* media */
@media only screen and (min-width:769px){
	.filter-lg{
		display: block;
	}
}
@media only screen and (max-width:1159px){
	.search-icon-gallery {
    padding-left: 0!important;
	}
}
@media only screen and (max-width:991px){
	.basket-div {
    	padding-right: 0!important;
	}
	.user-tooltip{
		top: 28px;
	}
}
@media only screen and (max-width:768px){
	
#datatable_length label{
	color: transparent;
	display: table-caption;
    height: 30px;
	width: 20%;
}
.dataTables_wrapper .dataTables_length{
	right: auto;
}
.input-search{
	width: 0px;
    border: 0;

}
.user-tooltip{
	    top: 30px;
		left: 26px;
}
.search-on-datatable{
	    width: 216px!important;
}
.input-filter-xs{
	width: auto;
}
.filter-search{
	    display: flex;
    justify-content: flex-end;
}
.clear-filter{
	display: none;
}
}
@media only screen and (max-width:550px){
	.user-tooltip {
    top: 26px;
    left: 22px;
	}
}
</style>