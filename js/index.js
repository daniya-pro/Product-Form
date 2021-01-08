  if(document.getElementById("err404")){
    var getData =()=>{
  database().ref
  
  
  var refr =    database() .ref(`prodectDeteils`);
   
        refr.on("value", (data)=>{
  
            let num=   data.numChildren()
              //alert(num)
               if(!num){
                resizingImg()
  
      err404.className='block'
  
  
               }else{
                err404.className='none'
  
                    setHtml(data)
               }
              
          } )
      // on_Data()
  
  
  
    
  
  }
var resizingImg = ()=>{err404=document.getElementById("err404")
bodyel = document.getElementById("body")
err404.style.height=bodyel.offsetHeight 
err404.style.width=bodyel.offsetWidth

}

}
