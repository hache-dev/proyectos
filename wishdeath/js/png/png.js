function PNG_loader() { 
   for(var i=0; i<document.images.length; i++) { 
      var img = document.images[i]; 
      var imgName = img.src.toUpperCase(); 
      if (imgName.substring(imgName.length-3, imgName.length) == "PNG") { 
         var imgID = (img.id) ? "id='" + img.id + "' " : ""; 
         var imgClass = (img.className) ? "class='" + img.className + "' " : ""; 
         var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "; 
         var imgStyle = "display:inline-block;" + img.style.cssText; 
         if (img.align == "left") imgStyle += "float:left;"; 
         if (img.align == "right") imgStyle += "float:right;"; 
         if (img.parentElement.href) imgStyle += "cursor:hand;"; 
         var strNewHTML = "<span " + imgID + imgClass + imgTitle 
            + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" 
            + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" 
            + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"; 
         img.outerHTML = strNewHTML; 
         i--; 
      } 
   } 
} 
window.attachEvent("onload", PNG_loader); 