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
async function postRegister(email, password) {
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
    let url = API_CONST.POST_REGISTER
    try {
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode === 200) return ({ error: false })
        if (body.errorCode === 1) return { error: true }
    } catch (error) {
        return { error: true }
    }

}
async function getUserDetail(user_id) {
    let res
    let op = {
        headers: { "auth-token": user_token }
    }
    try {
        let url = API_CONST.GET_USER_DETAIL + user_id
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode !== 200) return { error: true }
        else return { error: false, user: body.user }
    } catch (error) {
        return { error: true }
    }
}
async function getFriends() {
    let res
    let op = {
        headers: {
            'auth-token': user_token,
            'Content-Type': 'Application/json'
        }
    }
    try {
        let url = API_CONST.GET_FRIENDS
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode !== 200) return { error: true }
        else return { error: false, friends: body.friends }
    } catch (error) {
        return { error: true }
    }
}
async function putUnfriend(user_id) {
    let res
    let op = {
        method: "PUT",
        body: JSON.stringify({
            unfriend_user_id: user_id
        }),
        headers: {
            'Content-Type': 'Application/json',
            'auth-token': user_token
        }
    }
    let url = API_CONST.PUT_UNFRIEND
    try {
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode === 200) {
            return { error: false }
        } else return { error: true }
    } catch (error) {
        return { error: true }
    }
}
async function getRequestReceive() {
    let res
    let op = {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'auth-token': user_token
        }
    }
    try {
        let url = API_CONST.GET_REQUEST_RECEIVE
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode === 200) return { error: false, request: body.request, receive: body.receive }
        else return { error: true }
    } catch (error) {
        return { error: true }
    }
}
async function getUserDetailByEmail(email) {
    let res
    let op = {
        method: "POST",
        body: JSON.stringify({
            email: email
        }),
        headers: {
            'auth-token': user_token,
            'Content-Type': 'Application/json'
        }
    }
    try {
        let url = API_CONST.POST_FIND_USER_DETAIL
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode === 200) return { error: false, user: body.user }
        else return { error: true }
    } catch (error) {
        return { error: true }
    }
}
async function putRequest(user_id) {
    let res
    let op = {
        method: "PUT",
        body: JSON.stringify({
            request_to_user_id: user_id
        }),
        headers: {
            'Content-Type': 'Application/json',
            'auth-token': user_token
        }
    }
    let url = API_CONST.PUT_REQUEST
    try {
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode === 200) {
            return { error: false }
        } else return { error: true }
    } catch (error) {
        return { error: true }
    }
}
async function putDeleteRequest(user_id) {
    let res
    let op = {
        method: "PUT",
        body: JSON.stringify({
            un_request_to_user_id: user_id
        }),
        headers: {
            'Content-Type': 'Application/json',
            'auth-token': user_token
        }
    }
    let url = API_CONST.PUT_DELETE_REQUEST
    try {
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode === 200) {
            return { error: false }
        } else return { error: true }
    } catch (error) {
        return { error: true }
    }
}
async function putDeleteReceive(user_id) {}
async function putAcceptRequest(user_id) {
    let res
    let op = {
        method: "PUT",
        body: JSON.stringify({
            accept_user_id: user_id
        }),
        headers: {
            'Content-Type': 'Application/json',
            'auth-token': user_token
        }
    }
    let url = API_CONST.PUT_ACCEPT_REQUEST
    try {
        res = await fetch(url, op)
        let body = await res.json()
        if (body.errorCode === 200) {
            return { error: false }
        } else return { error: true }
    } catch (error) {
        return { error: true }
    }
}
export const Service = {
    logIn,
    uploadFile,
    getProfile,
    postRegister,
    getUserDetail,
    getFriends,
    putUnfriend,
    getRequestReceive,
    getUserDetailByEmail,
    putRequest,
    putDeleteRequest,
    putDeleteReceive,
    putAcceptRequest
    
}