import fs from 'fs';


const Number_Format = new Intl.NumberFormat('en-US');
const Number_Format_USD = new Intl.NumberFormat('en-US');
const Number_Format_Compact = new Intl.NumberFormat('en-US', { notation: "compact"});

export const CurrencyFormat = (amount) => {
    let value = Number_Format.format(amount);
    // value = value.split(".")
    // if(value[1]){
    // value_final = value[0] +"."+ value[1].substring(0,2);
    // }else{
    // value_final = value;
    // }
    return value;
  }

  export const short = (_url) => {
    if(_url == undefined) return;
    return _url.slice(0, 5)+"..."+_url.slice(_url.length-4);
  }

  export const generateUUID = () => {
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  export const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  export const checkCookie = (cname) => {
    let cookie = getCookie(cname);
    if (cookie != "") {
      return true;
    } else {
      return false;
    }
  }

  export function sleep(duration){
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

export const isEmpty = (value) => {
  return (value == null || value.length === 0);
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

// function to encode file data to base64 encoded string
export function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

