import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const appKey = "kid_rkMvaFdSX"
const appSecret = "a6ebc734c55d4407b0442a0b17d0a91e"
const kinveyBaseUrl = "https://baas.kinvey.com/";
const getAllUrl = kinveyBaseUrl + 'appdata' + "/" + appKey + '/flats';
//POST /user/:appKey/ HTTP/1.1

@Injectable({
  providedIn: 'root'})
export default class KinveyRemoteServiceService {
  constructor(private http: HttpClient) { }
 
  //MAKE AUTH
  makeAuth(type) {
    return type === 'basic'
      ? 'Basic ' + btoa(appKey + ':' + appSecret)
      : 'Kinvey ' + sessionStorage.getItem('authtoken');
  }
  
  //IS AUTH
  isAuth() {
    return sessionStorage.getItem('authtoken') !== null;
  }

  //SAVE SESSION
  saveSession(userData) {
    sessionStorage.setItem('authtoken', userData._kmd.authtoken);
    sessionStorage.setItem('username', userData.username);
    sessionStorage.setItem('userId', userData._id);
    sessionStorage.setItem('picUrl', userData.profilePic);
    sessionStorage.setItem('isAdmin', userData.isAdmin);
  }

  //POST
  post(url, data, auth){
    return this.http.post(url, data, {headers: {'authorization': this.makeAuth(auth)}});
  }

  //PUT
  put(url, data, auth) {
    return this.http.put(url, data, { headers: { 'authorization': this.makeAuth(auth) } });
  }

  //GET
  get(url, auth) {
    return this.http.get(url, { headers: { 'authorization': this.makeAuth(auth) } });
  }

  //DELETE
  delete(url, id, auth){
    return this.http.delete(url, { headers: { 'authorization': this.makeAuth(auth) } })
  }

  //REGISTER
  register(username, password, profilePic){
    //POST /user/:appKey/ HTTP/1.1
    let obj = { username, password, profilePic:"https://www.petcentric.com/media/356972/05_catpaw.jpg?width=500&height=333"};
    let url = kinveyBaseUrl + 'user' + "/" + appKey + "/";
    let data = obj;
    return (this.post(url, data, 'basic'));
  }

  //LOGIN
  login(username, password) {
    //POST /user/:appKey/login HTTP/1.1
    let obj = {username, password};
    let url = kinveyBaseUrl + 'user' + "/" + appKey + "/login";
    let data = obj;
    return (this.post(url, data, 'basic'));
  }

  //LOGOUT
  logout() {
    //POST /user/:appKey/_logout HTTP/1.1
    
    let url = kinveyBaseUrl + 'user' + "/" + appKey + "/_logout";
    let data = null;
    return (this.post(url, data, 'kinvey'));
  }
  

  //UPDATE USER
  updateUser(username, password, id, profilePic) {
    // PUT/user/:appKey/:id HTTP / 1.1
    let obj = { username, profilePic };
    let url = kinveyBaseUrl + 'user' + "/" + appKey + "/" + id;
    let data = obj;
    return (this.put(url, data, 'kinvey'));
  }

  //CREATE CAT
  CreateCat(name, breed, age, contactNumber, information, imgUrl ) {
    // /appdata/:appKey/:collectionName HTTP/1.1
    let obj = { name, breed, age, contactNumber, information, imgUrl };
    let url = kinveyBaseUrl + 'appdata' + "/" + appKey + "/" + "Cats";
    let data = obj;
    return (this.post(url, data, 'kinvey'));
  }

  //GET ALL CATS
  GetAllCats() {
    // /appdata/:appKey/:collectionName HTTP/1.1
    // return remote.get('appdata', "Products", 'kinvey');
    let url = kinveyBaseUrl + 'appdata' + "/" + appKey + "/" + "Cats";
    return (this.get(url, 'kinvey'));
  }

  //GET ALL USERS
  GetAllUsers() {
    // GET /user/:appKey/:id HTTP/1.1
    // return remote.get('appdata', "Products", 'kinvey');
    let url = kinveyBaseUrl + 'user' + "/" + appKey + "/";
    return (this.get(url, 'kinvey'));
  }
    
  //DELETE USER
  DeleteUser(id){
    //DELETE /user/:appKey/:id HTTP/1.1
    let url = kinveyBaseUrl + 'user' + "/" + appKey + "/" + id;
    return (this.delete(url,  null, 'kinvey'))
  }

  //GET CAT BY ID
  GetCatById(id){
    //GET /appdata/:appKey/:collectionName/:id
    let url = kinveyBaseUrl + 'appdata' + "/" + appKey + "/" + "Cats" + "/" + id
    return (this.get(url, "kinvey"))
  }
  
  //UPDATE CAT BY ID
  UpdateCat(name, breed, age, contactNumber, information,imgUrl, id){
    ///appdata/:appKey/:collectionName/:id HTTP/1.1
    let obj = { name, breed, age, contactNumber, information, imgUrl };
    let url = kinveyBaseUrl + 'appdata' + '/' + appKey + '/' + "Cats" + "/" + id
    let data = obj;
    return (this.put(url, data, 'kinvey '))
  }

  //DELETE CAT 
  deleteCat(id){
    //DELETE /appdata/:appKey/:collectionName/:id?query=... HTTP/1.1
    let url = kinveyBaseUrl + 'appdata' + '/' + appKey + '/' + 'Cats' + '/' + id
    return(this.delete(url,id,'kinvey'));

  }

  //GET MESSAGES
  GetAllMessages() {
    // /appdata/:appKey/:collectionName HTTP/1.1
    // return remote.get('appdata', "Products", 'kinvey');
    let url = kinveyBaseUrl + 'appdata' + "/" + appKey + "/" + "Messages";
    return (this.get(url, 'kinvey'));
  }

  //GET USER BY ID
  GetUserById(id) {
    //GET /user/:appKey/:id HTTP/1.1
    let url = kinveyBaseUrl + 'user' + "/" + appKey + "/" + id; 
    return (this.get(url, "kinvey"))
  }
  
  //DELETE MESSAGE BY ID
  DeleteMessageById(id){
    let url = kinveyBaseUrl + 'appdata' + '/' + appKey + '/' + 'Messages' + '/' + id
    return (this.delete(url, id, 'kinvey'));
  }
  


}




 
  
  


 

    

    
    



