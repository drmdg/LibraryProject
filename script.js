var mylibrary=[];

function Book(name,autor,pag,read) {
        this.name=name;
        this.autor=autor;
        this.pag=pag;
        this.read=read;
    
  }

  function removelivro(e){
    
    for(let i=0;i<mylibrary.length;i++){
        if(e.target.id==mylibrary[i].name){
            mylibrary.splice(i,1);
        }
    }
    displaycontent();
  }
  
  function addBookToLibrary() {
        if(read.checked){
            read.value="Lido"
        }else{
            read.value="Não lido"
        }
        let book = new Book(bookname.value,authorname.value,npages.value,read.value);
        mylibrary.push(book);
        closemodal();
        bookname.value="";
        authorname.value="";
        npages.value=0;
        read.checked=false;
        displaycontent();
  }


function displaycontent(){
    let content=document.getElementById('display');
    content.innerHTML="";
    let i =0;
    for(let book of mylibrary){
        let newdiv=document.createElement('div');
        newdiv.classList.add('book');
        newdiv.innerHTML=`  <h2>nome: ${book.name}</h2>
                            <p>Autor: ${book.autor}</p>
                            <p> Numero de paginas: ${book.pag}</p>
                            <button class="lido">Livro ${book.read}</button>
                            <p id="${book.name}" class="remove">Remover livro</p>`
        content.appendChild(newdiv);
        document.getElementsByClassName("lido")[i].addEventListener('click',(e)=>{
            if(e.target.innerHTML=="Livro Lido"){
                e.target.innerHTML="Livro Não lido";
            }else{
                e.target.innerHTML="Livro Lido";
            }
        });
        document.getElementById(`${book.name}`).addEventListener('click',removelivro)
        i++;
    }
    
}

  function displaymodal(){
    document.getElementById("modal").style.cssText="display:flex;";
  }
  function closemodal(){
    document.getElementById("modal").style.cssText="display:none;";
  }

  let addbook=document.getElementById('addbook');
  addbook.addEventListener('click',displaymodal);
  let close=document.getElementById("close");
  close.addEventListener('click',closemodal);
  document.getElementById('sub').addEventListener('click',(event)=>{
    event.preventDefault();
    addBookToLibrary();
  });