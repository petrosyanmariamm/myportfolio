import React, { useState } from "react";
import "./form.scss";
import {useForm} from "react-hook-form";
import MyAlert from "../Alert/MyAlert";


export default function Form() {

    const {register, reset, handleSubmit, formState:{errors}} = useForm();
    const[showAlert, setShowAlert] = useState(false);
    

    const onSubmit = (data)=>{
      const myData = localStorage.setItem("info",JSON.stringify(data));
      console.log(myData);
      setShowAlert(!showAlert);
       reset()
    };

  return (
    <div className="formWrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name",
        {required:"Name is required",
          minLength:{
            value:4,
            message:"Minimum 4 simbols"
          },
          pattern:{
            value:/[A-Z]/,
            message:"Name must begin with uppercase"
          }
        }
      )}/>
      {errors?.name && <p className="error">{errors?.name?.message}</p>}

      <input type="number" placeholder="Phone" {...register("phone",
      {required:"Phone is required",
        minLength:{
          value:9,
          message:"Minimum 9 simbol"
        },
        pattern:{
          value:/[0-9]/,
          message:"You can enter only numbers"
        }
      }
      )}/>
      {errors?.phone && <p className="error">{errors?.phone?.message}</p>}

      <textarea  placeholder="Message" {...register("message",
        {required:"Message is required",
          maxLength:{
            value: 100,
            message:"Maximum 100 simbols"
          }
        }
      )}></textarea>
      {errors?.message && <p className="error">{errors?.message?.message}</p>}
      
      <input type="submit" value="send" className="btn"/>
    </form>
    {
      showAlert && <MyAlert setShowAlert={setShowAlert} showAlert={showAlert}/>
    }
    
    </div>
    
  )
}
