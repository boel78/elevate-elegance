import React, { useContext } from 'react'
import { MenuContext } from '../src/menuContext';
import axios from 'axios';
import {toast} from 'react-hot-toast'

export function useUser () {

    const {currentUser, setCurrentUser} = useContext(MenuContext)
  
    const handleSave = async (userInfo) => {
        const newUser = userInfo;
        newUser.id = currentUser.id
        
        try{
          const {data} = await axios.put("http://localhost:8080/api/customer", newUser)
          if(data.error){
            toast.error(data.error)
          }else{
            toast.success("Your details have now been updated")
            
            setCurrentUser(newUser);
            checkAddresses()
          }
        }
        catch(error){
          toast.error(error.response?.data || "ajaja")
        }
        
        
      };
  
      const checkAddresses = async () => {
        try{
        const response = await axios.get("http://localhost:8080/api/customer")
        const users = response.data
        console.log("RESPONSE")
        console.log(users);
        let addressArray = [new Set(users.flatMap(user => user.addresses))];
        console.log(addressArray);
        
        }
        catch(error){
          console.log(error);
          
        }
      }
  
    return {
        handleSave
    }

  
}
