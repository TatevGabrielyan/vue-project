<template>
   <div>
      <Navbar class="mb-3"/>
      <div class="d-flex justify-space-between">
         <b-button id="button-2" variant="" class="tooltip-btn p-0 mouseover-hover"   @mouseover="hover = true" @mouseleave="hover = false">
            <div class="logo user-logo">
               <img src="../assets/icons/Group 1.png" alt="logo" >
            </div>
            <div class="user-tooltip" v-if="hover">
               <div><img src="../assets/icons/Polygon 2.png" alt="polygon" class="d-block"></div>
               <div class="user-name-hover">
                  <div class="user-hover py-3 pb-2">
                     <div class="row">
                        <div class="col-4">
                           <span class="user-img">
                           <img src="../assets/icons/user-img.png" alt="user-image" class="mx-3">
                           </span>
                        </div>
                        <div class="col-8">
                           <p class="text-uppercase m-0 user-name text-start pl-4 pb-2">Admin name</p>
                           <a href="#" class="text-decoration-none d-block text-start profile  pl-4 pb-2">Back to Admin</a>
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
      <DatatableClient/>
   </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Navbar from './reusable/Navbar.vue';
import Button from "./reusable/Button.vue";
import DatatableClient from "./reusable/datatableClient.vue";
export default {
  components:{
    Navbar,
    Button,
    DatatableClient
},
       data: function () {
        return {
          users: [],
          hover: false,
        };
  },
};
</script>

<style>
table.dataTable.stripe tbody tr.odd,
table.dataTable.display tbody tr.odd,
table.dataTable.hover tbody tr:hover,
table.dataTable.display tbody tr:hover,
table.dataTable.display tbody tr.odd>.sorting_1,
table.dataTable.order-column.stripe tbody tr.odd>.sorting_1,
table.dataTable.display tbody tr:hover>.sorting_1,
table.dataTable.order-column.hover tbody tr:hover>.sorting_1,
table.dataTable.display tbody tr>.sorting_1,
table.dataTable.order-column.hover tbody tr>.sorting_1 {
	background-color: transparent;
}

.datatable-btn {
	color: #ffffff;
	font-weight: bold;
	border: 1px solid #223d8f;
	font-size: 13px;
	padding: 1rem 2rem;
	border-radius: 10px;
	background-color: #223d8f;
}

.extra-tr {
	background-color: #393939 !important;
	border-style: hidden;
}

.extra-tr-2nd {
	background-color: #223d8f !important;
	border-style: hidden;
}

.extra-tr-3rd,
.extra-tr-4th,
.extra-tr-5th {
	border-style: hidden;
}

.extra-tr-3rd .extra-header {
	background-color: #637bc4 !important;

}

.extra-tr-4th .extra-header,
.extra-tr-5th .extra-header {
	background-color: #e0e0e0;
	color: #393939;

}

.extra-header {
	font-size: 15px;
	color: #ffffff;
	font-weight: 500;

}

.extra-details-table {
	display: flex;
	justify-content: flex-end;
}

.extra-details-table th,
.extra-details-table td {
	width: 228px;
}

.extra-details-table td {
	padding: 0 1rem !important;
}

table.dataTable.display tbody td {
	border-top: none !important;
}

#extra-table td {
	border-top: none !important;
	border-bottom: none !important;
}

td.details-control {

	background: url('../assets/icons/plus.svg') no-repeat center;

	cursor: pointer;
}

tr.shown td.details-control {
	background: url('../assets/icons/minus.svg') no-repeat center;
}

#datatableUser th:nth-child(2),
.datatableUser-id {
	width: 60px !important;
}

#datatableUser th:nth-child(3),
.datatableUser-name,
#datatableUser th:nth-child(4),
#datatableUser th:nth-child(5),
#datatableUser th:nth-child(6) {
	width: 100px !important;
}
#datatableUser_length label {
    font-size: 17px;
    line-height: 17px;
    color: #adadad;
    font-weight: 400;
}
#datatableUser_length label select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXCAYAAAA/ZK6/AAAABHNCSVQICAgIfAhkiAAAASdJREFUOE+Vk8ERgjAQRc0MB27agdhBPDADJ7UCtQMtwQrEDixBK5AO5AY3sQItQU9ww78ZwwRZonIJs/mP5f9NRI95giBIUI6yLKO18YjPQhiGC9ROVVXdAYysgJRy4LruRQjhkRDQDlBkQo0O+JUI4q0heAAaA7rrWg1A7EF8YyzFaZouOSABMOFCQJeZDkB10EY58dtLHYD4NGqBVACCMdrFqAAIaA2ni0D90BqcRay2/gd835eO4/S/fZn2i6K4CkRKUxz+AsD0mkxPMbDzNwDiK2KVenAxgLkN0tNWAJ0jLDk6sV4gPuLrq0ZKXQOE+FmWpZfn+aMVa0cAG5zWfeu0vn+tEYA2anrjrmgdgHms2Q5mAHiPtVFrB9qk+4GpJtqoCbwAjRCSkKyD5f8AAAAASUVORK5CYII=) white no-repeat 98.5% !important;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXCAYAAAA/ZK6/AAAABHNCSVQICAgIfAhkiAAAASdJREFUOE+Vk8ERgjAQRc0MB27agdhBPDADJ7UCtQMtwQrEDixBK5AO5AY3sQItQU9ww78ZwwRZonIJs/mP5f9NRI95giBIUI6yLKO18YjPQhiGC9ROVVXdAYysgJRy4LruRQjhkRDQDlBkQo0O+JUI4q0heAAaA7rrWg1A7EF8YyzFaZouOSABMOFCQJeZDkB10EY58dtLHYD4NGqBVACCMdrFqAAIaA2ni0D90BqcRay2/gd835eO4/S/fZn2i6K4CkRKUxz+AsD0mkxPMbDzNwDiK2KVenAxgLkN0tNWAJ0jLDk6sV4gPuLrq0ZKXQOE+FmWpZfn+aMVa0cAG5zWfeu0vn+tEYA2anrjrmgdgHms2Q5mAHiPtVFrB9qk+4GpJtqoCbwAjRCSkKyD5f8AAAAASUVORK5CYII=) white no-repeat calc(86% - -1px) !important;
    width: 45px;
    height: 29px;
}
@media only screen and (max-width:991px){
    .datatable-btn {
    padding: 1rem 1rem;
    }
}
@media only screen and (max-width:768px){
	
#datatableUser_length label{
	color: transparent;
	display: table-caption;
    height: 30px;
	width: 20%;
}
}
</style>
