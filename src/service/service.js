import { API_CONST } from './API'
const user_token = localStorage.getItem('auth-token') ? localStorage.getItem('auth-token') : null
async function logIn(email, password) {
    let res
    let op = {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
        headers: {
            'Content-Type': 'Application/json'
        }
    }
    let url = API_CONST.POST_LOGIN
    try {
        res = await fetch(url, op)
        let body = await res.json(res)
        if (body.errorCode !== 200)
            return {
                error: true
            }
        else return {
            error: false,
            body: body
        }
    } catch (error) {
        return {
            error: true
        }
    }

}
async function uploadFile(file) {
    let formData = new FormData()
    formData.append('image', file)
    console.log(file)
    let res
    let op = {
        method: "POST",
        body: formData,
        headers: {
            "auth-token": user_token,
            //'Content-Type': "multipart/form-data; boundary=<calculated when request is sent>",
        }
    }
    let url = API_CONST.POST_UPLOAD_FILE
    console.log(file)
    try {
        res = await fetch(url, op)
        let body = await res.json()
        console.log(body)
        if (body.errorCode !== 200) return { error: true }
        else return { error: false, imgLocation: body.location }
    } catch (error) {
        return { error: true }
    }
}
async function getProfile() {
    let res
    let op = {
        method: "GET",
        headers: {
            "auth-token": user_token
        }

    }
    let url = API_CONST.GET_USER_PROFILE
    try {
        res = await fetch(url, op)
        let body = await res.json()
        return { error: false, user: body.user }
    } catch (error) {
        return { error: true }
    }

}


export const Service = {
    logIn,
    uploadFile,
    getProfile
}