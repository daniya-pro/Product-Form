
var getData =()=>{
database().ref


var refr =    database() .ref(`items`);
refr 
        .on("value", (data)=>{
          let num=   data.numChildren()
            //alert(num)
             if(!num){
        document.getElementById("spinner").style.display = 'none'
                document.getElementById('list').innerHTML=''
                document.getElementById('nothing').style.display='block'
                myData=[]

             }else{
                         myData=[]
                         document.getElementById('nothing').style.display='none'

                            data.forEach(on_Data)
                         //   dataUpdated()
             }
            
        } )
    // on_Data()



  

}



var pushData = () => {
    var flag = ''

  document.querySelectorAll("input").forEach((a) => {
    if (a.value.trim() === '') {
      flag = "false"

      $('.ui.modal')
        .modal('show');
    } else {
      if (flag === 'false') { } else {

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
btn?btn.addEventListener('click', pushData):''
