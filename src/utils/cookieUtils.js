/**
 * CookieUtil常用的一些工具类
 */
import Cookies from 'js-cookie'

const TokenKey = 'token'


export function setCookie(name, value, days) {
    // var exp = new Date();
    // exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    // document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();

    var domain, domainParts, date, expires, host;

    if (days) {
        date = new Date();
        console.log("***************************")
        console.log(date)
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));//一天
        expires = "; expires=" + date.toUTCString();
    } else {
        expires = "";
    }

    host = location.host;
    if (host.split('.').length === 1) {
        // no "." in a domain - it's localhost or something similar
        document.cookie = name + "=" + value + expires + "; path=/";
    } else {
        // Remember the cookie on all subdomains.
        //
        // Start with trying to set cookie to the top domain.
        // (example: if user is on foo.com, try to set
        //  cookie to domain ".com")
        //
        // If the cookie will not be set, it means ".com"
        // is a top level domain and we need to
        // set the cookie to ".foo.com"
        domainParts = host.split('.');
        domainParts.shift();
        domain = '.' + domainParts.join('.');

        document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;

        // check if cookie was successfuly set to the given domain
        // (otherwise it was a Top-Level Domain)
        if (getCookie(name) == null || getCookie(name) != value) {
            // append "." to current domain
            domain = '.' + host;
            document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
        }
    }
}

export function getCookie(name) {
    // var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    // if (arr = document.cookie.match(reg))
    //   return unescape(arr[2])
    // else
    //   return null
    return Cookies.get(name)

}

export function delCookie(name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null){
        document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString()+";domain="+process.env.VUE_APP_DOMAIN;
    }
}
