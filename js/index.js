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
getData()
window.onresize = ()=>{resizingImg()  }
resizingImg()






var setHtml=(data)=>{
var list=  document.getElementById("list")
list.innerHTML=''
console.log(1,data,'d.v',data.val())


}}else{
  
var pushData = () => {
  var flag = ''

document.querySelectorAll("input").forEach((a) => {
  if (a.value.trim() === '') {
    flag = "falses"

    $('.ui.modal')
      .modal('show');
  } else {
    if (flag === 'falses') { } else {
alert()
      flag = 'true'
    }
  }


})
if (flag === 'true') {
  firebase.database().ref('prodectDeteils').push({
    productName: document.getElementById('productName').value,
    productPrice: document.getElementById('productPrice').value,
    productImagelink: document.getElementById('productImage').value,
    productDescription: document.getElementById('productDescription').value
    

  })
  location.href='/pages'
}

}

var btn=document.getElementById('SubmitBtn')
btn.addEventListener('click', pushData)
}
