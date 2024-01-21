import React, { forwardRef, useEffect, useState, useImperativeHandle } from 'react';
import "./Card.css"
//forwardRef ve useImperativeHandle denemelerim
const Card = forwardRef((props,ref) => {

  const [datas, setDatas] = useState({ message: "" });

  const [isVisible, setIsVisible] = useState({first:true, second:false, third:true})

  useEffect(() => {
    console.log(isVisible)
  }, [isVisible])

  useImperativeHandle(ref,() => ({
    changeFirstCard: () => (setIsVisible((prev)=>{
      return {
      ...prev,
      first: prev.first == false ? true : false
      }
    })),
    changeSecondCard: (() => setIsVisible((prev)=>{
      return {
      ...prev,
      second: prev.second == false ? true : false
      }
    })),
    changeThirdCard: (() => setIsVisible((prev)=>{

      return{
        ...prev,
        third: prev.third == false ? true : false
      }
    }))
  }))

  return (
    <div className="containerr">
      {isVisible.first && <div className='card card_1'>
        <div className='card-content'>
          <div className='card-Image'>
            <img src="{datas.message}" alt="" />
          </div>
          <div>
            <p className='card_1'>
              1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime, et nemo, enim fugiat nostrum obcaecati quae excepturi vel porro doloremque quasi in sapiente vitae facilis modi consectetur vero voluptatum?
            </p>
          </div>
        </div>
      </div>}

      {isVisible.second && <div className='card card_2'>
        <div className='card-content'>
          <div className='card-Image'>
            <img src="{datas.message}" alt="" />
          </div>
          <div>
            <p className='card_2'>
              2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime, et nemo, enim fugiat nostrum obcaecati quae excepturi vel porro doloremque quasi in sapiente vitae facilis modi consectetur vero voluptatum?
            </p>
          </div>
        </div>
      </div>}

      {isVisible.third &&<div className='card card_3'>
        <div className='card-content'>
          <div className='card-Image'>
            <img src="{datas.message}" alt="" />
          </div>
          <div>
            <p className='card_3'>
              3Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime, et nemo, enim fugiat nostrum obcaecati quae excepturi vel porro doloremque quasi in sapiente vitae facilis modi consectetur vero voluptatum?
            </p>
          </div>
        </div>
      </div>}
    </div>
  )
});

export default Card