import React from "react";
import "./blog.css"

const blog = () =>{

    return(
        <div className="blog_body">
            <div className="blog_main">
                <div className="blog_pic_div">
                    <img className="blog_pic"/>
                </div>
                <div className="blog_details">
                    <div className="blog_title">
                        <h4>제목</h4>
                    </div>
                    <div className="blog_desciption">
                        <p>
                            블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                            블라블라블라블라블라블라블라블라블라블라블라블라블라블라
                        </p>
                    </div>
                    <div className="blog_timeline">
                        <p>5일전 </p>
                    </div>
                </div>
 
            </div>
        </div>
    )
}

export default blog