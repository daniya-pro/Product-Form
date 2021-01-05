


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
  }
}

document.getElementById('SubmitBtn').addEventListener('click', pushData)

