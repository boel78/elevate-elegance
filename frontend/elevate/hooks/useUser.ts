import React, { useContext } from 'react'
import { MenuContext } from '../src/menuContext';
import axios from 'axios';
import {toast} from 'react-hot-toast'

export function useUser () {

    const {currentUser, setCurrentUser} = useContext(MenuContext)
  
    const handleSave = async (userInfo) => {
        const newUser = userInfo;
        newUser.password = ""
        newUser.id = currentUser.id
        
        try{
          const {data} = await axios.put("http://localhost:8080/api/customer", newUser)
          if(data.error){
            toast.error(data.error)
          }else{
            toast.success("Your details have now been updated")
            
            setCurrentUser(newUser);
          }
        }
        catch(error){
          toast.error(error.response?.data || "ajaja")
        }
        
        
      };
  
  
    return {
        handleSave
    }

  
}
