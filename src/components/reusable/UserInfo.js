
import Vue from 'vue'
import axios from 'axios';

import { resolve } from 'core-js/fn/promise';
export default class UserLoginData{
     user_id = '';
     username = '';
     token = '';
     user_type ='';
    setToken (token){
        this.token = token;
    };
    setUsername(username){
        this.username = username;
    };
    setUserID(user_id){
        this.user_id = user_id;
    };
    setUserType(user_type){
        this.user_type = user_type;
    };
    getUserType(){
        return this.user_type;
    };
    getToken(){
        return  this.token;
    };
    getUsername(){
        return this.username;
    };
    getUserID(){
        return this.user_id;
    };
   getUserTypeByToken(){
        const sendRequest = async () =>{
            try{
                const response = await axios({
                    method: 'post',
                    type:'post',
                    url: 'http://dev.studioseye.com/api/getusertypebytoken',
                    data: {
                        'token' : this.getToken(),
                    },
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    } ,
                });
               if(response.status == 200){
                if(response.data.user_type != ''){
                    this.setUserType(response.data.user_type);
            
                    return 25;
                   
                }
               }
            }
            catch(err){
                console.log(err.message);
            }
        };
        sendRequest();
       
    };
   
  
};

