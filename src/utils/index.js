import Cookie from 'js-cookie'

export function setCookie(userId,userName){
    let d = new Date()
    let times = d.getTime();
    var obj = {
        id : userId,
        name : userName,
        time : times
    }

    Cookie.set('user',obj)
}

export function getCookie(user){
    return Cookie.get(user)
}

export function removeCookie(user){
    Cookie.remove(user)
}