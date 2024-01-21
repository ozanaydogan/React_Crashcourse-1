import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

const Card = () => {

  useEffect(()=> {
    console.log("render edildi")
  })

  useEffect(() => {
    console.log("component olustu")

    return () => {
      console.log("component destroy edildi")
    }
  },[])

  console.log("ss")

  const [data,setData] = useState({
    yak:"muh"
  });

  const getDataFromAPI = async () => {

    let data_ = await axios.get("https://dog.ceo/api/breeds/image/random").then((response) => response.data);


    console.log(data_)

    setData((prev) => ({ 
      yak:prev.yak + data_.message +" "
   }))

   console.log("2222")
    console.log(data)
  }

  useEffect(() => {
    console.log("????state degisti");
    console.log(data)
    console.log("state degisti???");

    return () =>{
      console.log("dependency'li useeffectin cleari")
    }
  },[data])


  return (
    <>
    {console.log("asdasd")}
    <div>
      {data.yak}
    </div>
    <div>
      <button type='button' onClick={getDataFromAPI}>
        buton name
      </button>
    </div>
    </>
  )
}

export default Card