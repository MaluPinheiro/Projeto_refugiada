    function validateEmail(){
    console.log("called")
    let insertSobreome = document.forms["formulario"]["email"].value;
    if (insertSobreome == "") {
      alert("O campo email deve ser preenchido");
      return false;
    }
  };

  function validateSenha(){
    console.log("called")
    let insertSobreome = document.forms["formulario"]["senha"].value;
    if (insertSobreome == "") {
      alert("O campo senha deve ser preenchido");
      return false;
    }
  };