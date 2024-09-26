import React, { useContext } from 'react'
import { MenuContext } from '../src/menuContext';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useAddress } from './useAddress';

export function useUser () {

    const {currentUser, setCurrentUser} = useContext(MenuContext)
    const {fetchAllAddresses} = useAddress()
  
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
        const allAddresses = await fetchAllAddresses()
        console.log("RESPONSE")
        console.log(users);
        console.log("All addresses");
        console.log(allAddresses);
        
        
        let addressArray = Array.from(new Set(users.flatMap(customer => customer.addresses)));
        console.log(addressArray);
        const addressesToKeep = allAddresses.filter(address => addressArray.some(customerAddress => customerAddress === address.id))
        console.log("ADDRESSES TO KEEP");
        
        console.log(addressesToKeep)
        }
        catch(error){
          console.log(error);
          
        }
      }
  
    return {
        handleSave
    }

  
}
