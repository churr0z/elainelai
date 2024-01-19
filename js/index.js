function sendEmail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value, 
    message: document.getElementById("message").value
  }

  const serviceID = "service_k17v6z3"
  const templateID = "template_hv0n1xp"
  
  emailjs
    .send(serviceID, templateID, params)
    .then((res) =>{
      document.getElementById("name").value = ""
      document.getElementById("email").value = ""
      document.getElementById("message").value = ""
      console.log(res);
      alert("Sent!")
  })
  .catch((err) => console.log(err))
}
