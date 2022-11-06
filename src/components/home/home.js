import React from "react";
import "./home.css";
import Profile_img from "../../img/profile_pic.jpeg"

const home=()=>{
    return(
        <div className="home_background"> 
            <div className="home_body">
                <div className="home_img_div">
                    <img className="home_img" src={Profile_img}/>
                </div>
                <div className="home_description">
                    <h4>This is homepage</h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
} 

export default home;