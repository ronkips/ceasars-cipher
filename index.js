 function rot13(str) {
  str = str.split("");
  function a(item){
    let result;
    if (item.charCodeAt()>=65&&item.charCodeAt()<78){
      result= String.fromCharCode(item.charCodeAt()+13); 
    }
    else if(item.charCodeAt()>=78&&item.charCodeAt()<=95){
      result= String.fromCharCode(item.charCodeAt()-13);
    }
    else{
      result = item;
    }
    return result;
  }
  str = str.map(item=>a(item)).join("");
  console.log(str);
  return str;
}

rot13("SERR PBQR PNZC");