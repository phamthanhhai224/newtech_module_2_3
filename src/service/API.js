const API_URL = 'http://localhost:3000/'
const POST_LOGIN = API_URL
const POST_REGISTER = API_URL + 'signup'
const POST_FORGETPASSWORD = API_URL + '/forgetpassword'
const POST_UPLOAD_FILE = API_URL + 'profile/upload'
const GET_USER_PROFILE = API_URL + 'profile'
const PUT_USER_IMAGE = API_URL + 'profile/upload'
const GET_USER_DETAIL = API_URL + 'profile/'
const GET_FRIENDS = API_URL + 'friends'
const PUT_UNFRIEND = API_URL + 'friends/unfriend'
const POST_FIND_USER_DETAIL = API_URL + 'find'
const PUT_REQUEST = API_URL + 'friends/request'
const GET_REQUEST_RECEIVE = API_URL + 'friends/request'
const PUT_DELETE_REQUEST = API_URL + 'friends/unrequest'
const PUT_ACCEPT_REQUEST = API_URL + 'friends/accept'
export const API_CONST = {
    POST_LOGIN,
    POST_REGISTER,
    POST_UPLOAD_FILE,
    GET_USER_PROFILE,
    PUT_USER_IMAGE,
    GET_USER_DETAIL,
    GET_FRIENDS,
    PUT_UNFRIEND,
    POST_FIND_USER_DETAIL,
    PUT_REQUEST,
    GET_REQUEST_RECEIVE,
    PUT_DELETE_REQUEST,
    PUT_ACCEPT_REQUEST,
    POST_FORGETPASSWORD,
    API_URL
}
