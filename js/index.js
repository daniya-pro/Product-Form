  if(document.getElementById("err404")){
    var getData =()=>{
  database().ref
  
  
  var refr =    database() .ref(`prodectDeteils`);
   
        refr.on("value", (data)=>{
  
            let num=   data.numChildren()
              //alert(num)
               if(!num){
                resizingImg()
  
      err404.className='absolute block'
list.innerHTML=''
  
  
               }else{
                err404.className='absolute none' 
  
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
getData()
window.onresize = ()=>{resizingImg()  }
resizingImg()





var i =0
var setHtml=(data)=>{
var list=  document.getElementById("list")
list.innerHTML=''
data.forEach((a,i)=>{
var obj=a.val()
var {Link} = obj
var {productName} = obj
var {Price} = obj
var {Description} = obj
var {Sign} =obj
list.innerHTML+=`<div class="ui card inline-block">
<select name="cars" class="ui dropdown" onchange='drdownchange' id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
<div id="list"></div>
<div class="image">
  <img src="${Link}" onerror="errorCallback(true)" alt='image not found'>
</div>
<div class="content">
  <a class="header">${productName}</a>
  <div class="meta">
    <span class="date">${Sign} ${Price}</span>
  </div>
  <div class="description">
${Description}  </div>
</div>

</div>

`
console.log(obj)
}
)

}

}else{
  function validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }
var pushData = () => {
  var flag = ''

document.querySelectorAll("input").forEach((a) => {
  if (a.value.trim() === '') {
    flag = "falses"

    $('.ui.modal')
      .modal('show');
  } else if( document.getElementById('productDescription').value===''){
    flag = "falses"
    $('.ui.modal')
    .modal('show');
    

  }else {
    if (flag === 'falses') { } else {
      flag = 'true'
    }
  }


})
if (flag === 'true') {
  firebase.database().ref('prodectDeteils').push({
    productName: document.getElementById('productName').value,
 Price: document.getElementById('productPrice').value, 
      Link: document.getElementById('productImage').value,
      Description: document.getElementById('productDescription').value,
      Sign: document.getElementById('rupeeSign').value

  }).then(()=>  location.href='/pages')
}

}

var btn=document.getElementById('SubmitBtn')
btn.addEventListener('click', pushData)
}
$(".ui.dropdown").dropdown({
  onChange:(value,text)=>{console.log(text,value,'a') 
  ;}
}
)
