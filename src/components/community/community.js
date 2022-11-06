import React from "react";
import "./community.css";
import Blog from "../blog/blog";
const community=()=>{
    return(
        <div className="community_background">
            <div className="blog_div">
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    )
} 

export default community;