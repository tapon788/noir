function triangleAdjust() {
    var elem_full_down_arrow = document.getElementById("down-arrow-full");
    var elem_full_up_arrow = document.getElementById("up-arrow-full");

  
    
    var elem_down_arrow = document.getElementsByClassName("triangle-container");
    var elem_down_arrow_cur_style = document.querySelectorAll(".triangle-down");
    for(i=0;i<elem_down_arrow.length;i++){

    tri_w = Math.floor(elem_down_arrow[i].clientWidth / 2);
    tri_h = elem_down_arrow[i].clientHeight;            

        elem_down_arrow_cur_style[i].style.borderWidth = "45px " + tri_w + "px 0 " + tri_w + "px";

        
    }
    
    

    var elem_full_down_arrow_cur_style = 
        document.querySelectorAll(".triangle-down-full");
    var elem_full_up_arrow_cur_style = 
        document.querySelectorAll(".triangle-up-full");

    



    
    
/*    
    var display = document.getElementById("output");
    display.innerHTML = elem_down_arrow.length;
    */
    

    full_down_arrow_container_width =
        Math.floor(elem_full_down_arrow.clientWidth / 2);
    full_down_arrow_container_height = document.getElementById("down-arrow-full").clientHeight;

    full_up_arrow_container_width =
        Math.floor(elem_full_up_arrow.clientWidth / 2);
    full_up_arrow_container_height =
        elem_full_up_arrow.clientHeight+1;
/*
    tri_w = Math.floor(elem_down_arrow.clientWidth / 2);
    tri_h = document.getElementById("down-arrow").clientHeight;
*/




    for (i = 0; i < elem_full_down_arrow_cur_style.length; i++) {
        elem_full_down_arrow_cur_style[i].style.borderWidth =
            full_down_arrow_container_height + 'px ' +
            full_down_arrow_container_width + "px 0px " +
            full_down_arrow_container_width + "px";
    }

    for (i = 0; i < elem_full_up_arrow_cur_style.length; i++) {
        elem_full_up_arrow_cur_style[i].style.borderWidth =
            "0px " + full_up_arrow_container_width + "px " + full_up_arrow_container_height + "px " + full_up_arrow_container_width + "px";
    }
/*
    for (i = 0; i < elem_down_arrow_cur_style.length; i++) {
        elem_down_arrow_cur_style[i].style.borderWidth = "45px " + tri_w + "px 0 " + tri_w + "px";
    }
*/
}