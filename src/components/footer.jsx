import React from "react";

function Footer(){
 const getYear = new Date().getFullYear();

 return(
    <fotter>
        <p>CopyRightⓒ {getYear}</p>
    </fotter>
 );
}
export default Footer;