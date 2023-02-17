function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let c = text.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode(c + shift);
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode(c + shift);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }

  console.log(caesarCipher('EFGH', 15))
