var pushData = () => {

firebase.database().ref('prodectDeteils').push({

})
}


document.getElementById('SubmitBtn').addEventListener('click',pushData
)

