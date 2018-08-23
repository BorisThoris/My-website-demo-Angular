import { Injectable } from '@angular/core';
import remote from "../services/kinvey-remote-service.service.js";


@Injectable({
  providedIn: 'root'
})
export default class AuthServiceService {
  
  constructor
  (
    private remote: remote,
    
  )
  {
    
  }
    
   
  


  register (username, password, picUrl) {
        let obj = { username, password, picUrl };
        
        
    }

  login(username, password) {
        let obj = { username, password };

        
    }
    
  logout() {
        
    }

}
