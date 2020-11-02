import {API_CONST} from './API'
const user_token = localStorage.getItem('auth-token') ? localStorage.getItem('auth-token'): null
async function logIn (email,password){
    let res
    let op = { 
        method:"POST",
        body: JSON.stringify({
            "email" : email,
          "password": password
        }),
        headers:{
            'Content-Type': 'Application/json' 
        }
    }
    let url = API_CONST.POST_LOGIN
    try {
        res = await fetch(url,op)
        let body = await res.json(res)
        if (body.errorCode !== 200)
        return {
            error : true
        }
        else return {
            error :false,
            body : body
        }
    } catch (error) {
        return {
            error : true
        }
    }

}
export const Service = { 
    logIn
}