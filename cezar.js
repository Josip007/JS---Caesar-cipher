/**
 * 
 * @param {String} text 
 * @param {Number} shift 
 */

function cezar(text, shift) {
    let result = '';
    for(let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        switch (true) {
            case (c >= 65 && c <= 90):
                result += String.fromCharCode(c + shift);
                break;
            case (c >= 65 && c <= 122):
                result += String.fromCharCode(c + shift);
                break;
            case(c >= 32 && c <= 64):
            result += String.fromCharCode(c + shift);
            break;
            default:
                result += text.charAt(i);
        }
    } return result;
 }

 console.log(cezar('-/', 2));