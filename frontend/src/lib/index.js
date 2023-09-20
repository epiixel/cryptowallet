const Number_Format = new Intl.NumberFormat('en-US');
const Number_Format_USD = new Intl.NumberFormat('en-US');
const Number_Format_Compact = new Intl.NumberFormat('en-US', { notation: "compact"});

export const CurrencyFormat = (amount) => {
  var value;
  var decimals = Math.round(-Math.floor( Math.log10(amount) + 1));
  if(decimals < 2){
    value = Number_Format.format(amount);
  }else{
    value = amount;
  }
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

export function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

export function qs(selector, parent = document) {
  return parent.querySelector(selector)
}

export function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

export function createElement(type, options = {}) {
  const element = document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(value)
      return
    }

    if (key === "dataset") {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
      return
    }

    if (key === "text") {
      element.textContent = value
      return
    }

    element.setAttribute(key, value)
  })
  return element
}

addGlobalEventListener('click', '.btn__load', (e) => {
  const element = e.target;
  const content = element.textContent;
  element.textContent = "";
  element.classList.add("button__loading");
  sleep(5000).then(() => {
      element.textContent = content;
      element.classList.remove("button__loading");
  })
}, {})

export const FormatNumber = (v=0, d=2, s=true) => {
  var m = -Math.floor( Math.log10(v) + 1);
  if(m > d) d = 5
  if(s){
    return CurrencyFormat(parseFloat(v).toFixed(d));
  }else{
    return parseFloat(Math.floor(v)).toFixed(d);
  }
}

addGlobalEventListener('input', '.onlyNumbers', (e) => {
  var str = e.target.value.replace(/[^0-9.]/g, '');
  str = str.length > 20 ? str.substring(0,20) : str;
  e.target.value = str;
})

addGlobalEventListener('input', '.onlyLetters', (e) => {
  var str = e.target.value.replace(/[^a-zA-Z\s]+/g, '');
  str = str.length > 20 ? str.substring(0,20) : str;
  e.target.value = str;
})

addGlobalEventListener('input', '.email', (e) => {
  if(!/^\S+@\S+\.\S+$/.test(e.target.value)){
    e.target.classList.add("bg-[rgba(255,0,0,.1)]");
    setButton(false);
  }else{
    e.target.classList.remove("bg-[rgba(255,0,0,.1)]");
    setButton(true);
  }
})


addGlobalEventListener('input', '.sql', (e) => {
  var str = e.target.value.replace(/[\t\r\n]|(--[^\r\n]*)|(\/\*[\w\W]*?(?=\*)\*\/)/gi, '');
  // str = str.length > 20 ? str.substring(0,20) : str;
  e.target.value = str;
})