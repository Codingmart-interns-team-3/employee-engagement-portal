import React from "react";
import { toast } from "react-toastify";

function Userpage(props) {
  return (
    <div>
        <button className="btn btn-primary" type="button" onClick
        ={()=>{
            localStorage.clear();
            toast.info("You are Logged Out");
            setTimeout(props.history.push('/login'),7000);
        }}>Logout</button>
    </div>
  );
}

export default Userpage;
