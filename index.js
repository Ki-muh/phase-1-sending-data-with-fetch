function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
        name : 'Steve',
        email : 'steve@steve.com'
    })
    }).then(function (response) {
        return response.json();
        })
        .then(function (object) {
        console.log(object);
        })
        .catch(function (error) {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message;
        });

  };
  