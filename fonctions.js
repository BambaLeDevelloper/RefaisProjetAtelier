function estClique(id) {
    var button = document.getElementById(id);
    var prenom = document.getElementById('Prenom');
    var nom = document.getElementById('Nom');
    var tel = document.getElementById('tel');
    var email = document.getElementById('email');
    button.addEventListener("click", function(event) {
      event.preventDefault();  
      if (prenom.value.trim() === "" || nom.value.trim()==="" || tel.value.trim() ==="" || email.value.trim()==="") {
        alert("Veuillez remplir tous les champs !!!");
      } else {
        document.writeln("normalement tous les champs sont remplis ");
        return true;
      } 
    });
  }
  estClique('ok');
  
  
