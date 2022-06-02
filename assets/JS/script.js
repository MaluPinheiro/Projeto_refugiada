 var insertSenha = document.forms["formulario"]["senha"].value;
 var insertConfirmacaoSenha = document.forms["formulario"]["confirmacaosenha"].value;

function validateForm() {
  console.log("called")
  let insertNome = document.forms["formulario"]["nome"].value;
  if (insertNome == "") {
    alert("O campo nome deve ser preenchido");
    return false;
  }
};

function validateSobrenome(){
  console.log("called")
  let insertSobreome = document.forms["formulario"]["sobrenome"].value;
  if (insertSobreome == "") {
    alert("O campo sobrenome deve ser preenchido");
    return false;
  }
};

function validateEmail(){
  console.log("called")
  let insertEmail = document.forms["formulario"]["email"].value;
  if (insertEmail == "") {
    alert("O campo email deve ser preenchido");
    return false;
  }
};

function validateSenha(){
  console.log("called")
  insertSenha = document.forms["formulario"]["senha"].value;
  if (insertSenha == "") {
    alert("O campo senha não preenchido corretamente");
    return false;
  }
};


function validateConfirmacaoSenha(){
  console.log("called")
  insertConfirmacaoSenha = document.forms["formulario"]["confirmacaosenha"].value;
  if (insertConfirmacaoSenha == "") {
    alert("O campo de Confirmação da senha deve ser preenchido");
    return false;
  }else if(insertConfirmacaoSenha != insertSenha){
     alert("Senhas diferentes, favor digitar senhas iguais.");
    return false;
  }else{
    document.form.submit();
    return true;
  }
};

function validatePassaporte(){
  console.log("called")
  let insertPassaporte = document.forms["formulario"]["passaporte"].value;
  if (insertPassaporte == "") {
    alert("O campo de Nº do passaporte deve ser preenchido");
    return false;
  }
};

function validateData(){
  console.log("called")
  let insertData = document.forms["formulario"]["data"].value;
  if (insertData == "") {
    alert("O campo Data de nascimento deve ser preenchido");
    return false;
  }
};


function validateComunicar(){
  console.log("called")
  let insertComunicar= document.forms["formulario"]["comunicar"].value;
  if (insertComunicar == "") {
    alert("O campo de Comunicação deve ser preenchido");
    return false;
  }
};

function validateAcompanhante(){
  console.log("called")
  let insertAcompanhante = document.forms["formulario"]["acompanhante"].value;
  if (insertAcompanhante == "") {
    alert("O campo de 'Acompanhanda de criança?' deve ser preenchido");
    return false;
  }
};