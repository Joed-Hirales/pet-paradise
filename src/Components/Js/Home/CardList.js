import React, { useEffect, useState } from "react";
import CardPet from "./CardPet";
import { ArrayPets } from '../Services/ArrayPets';
import '../../css/HomePage.css'
import { fetchPets } from "../../Services/ApiServices";
function CardList() {
  const [pets, setPet]=useState([]);
    useEffect (()=>{
      const getPets= async()=>{try {
      const response = await fetchPets();
      console.log(response);
      setPet(response); 
      } catch (error) {
        
      }}
      getPets();
    },[])
    return (
      <div className='ContainerHomePage'>
        <div className='row justify-content-center'>
          {pets.map((pet) => (
            <div key={pet.id} className='col-6 col-md-4 col-lg-3 col-xl-2 mb-4'>
              <CardPet pet={pet} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default CardList;