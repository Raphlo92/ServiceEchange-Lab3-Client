/*
    Méthodes d'accès aux services Web API_Server/bookmarks
 */
const BaseUrl = "http://localhost:5000/";
const apiBaseURL= BaseUrl + "api/bookmarks";
//const apiBaseURL= "https://blushing-imaginary-streetcar.glitch.me/api/bookmarks";

function webAPI_GET_ALL(queryString, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + queryString,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data => { successCallBack(data); console.log("webAPI_GET_ALL - success", data); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET_ALL - error");
        }
    });
}

function webAPI_GET( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        contentType:'text/plain',
        data:{},
        success: data  => { successCallBack(data); console.log("webAPI_GET - success", data);},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_GET - error");
        }
    });
}

function webAPI_POST( data , successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        headers: {"Authorization": localStorage.getItem('token')},
        contentType:'application/json',
        data: JSON.stringify(data),
        success: (resData) => {successCallBack();  console.log("webAPI_POST - success", resData); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_POST - error");
        }
    });
}

function webAPI_PUT(data, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + data.Id,
        type: 'PUT',
        headers: {"Authorization": localStorage.getItem('token')},
        contentType:'application/json',
        data: JSON.stringify(data),
        success:(s) => {successCallBack();  console.log("webAPI_PUT - success", s); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_PUT - error");
        }
    });
}

function webAPI_DELETE( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        contentType:'text/plain',
        headers: {"Authorization": localStorage.getItem('token')},
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE - error");
        }
    });
}

function webAPI_LOGIN(data, successCallBack, errorCallBack){
    $.ajax({
        url: BaseUrl+"token",
        contentType:'application/json',
        type: 'POST',
        data: JSON.stringify(data),
        success: resData => {successCallBack(resData);  console.log("webAPI_LOGIN - success", resData); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_LOGIN - error");
        }
    });
    console.log(data)
}

function webAPI_REGISTER(data, successCallBack, errorCallBack){
    $.ajax({
        url: BaseUrl+"accounts/register",
        contentType:'application/json',
        type: 'POST',
        data: JSON.stringify(data),
        success: resData => {successCallBack(resData);  console.log("webAPI_REGISTER - success", resData); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_REGISTER - error");
        }
    });
    console.log(data)
}

function webAPI_EDIT_ACCOUNT(data, successCallBack, errorCallBack){
    $.ajax({
        url: BaseUrl+"accounts/change",
        contentType:'application/json',
        headers: {"Authorization": localStorage.getItem('token')},
        type: 'PUT',
        data: JSON.stringify(data),
        success:() => {successCallBack();  console.log("webAPI_EDIT_ACCOUNT - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_EDIT_ACCOUNT - error");
        }
    });
    console.log(data)
}

function webAPI_DELETE_ACCOUNT(id, successCallBack, errorCallBack) {
    $.ajax({
        url: BaseUrl+"accounts/remove/" + id,
        contentType:'text/plain',
        headers: {"Authorization": localStorage.getItem('token')},
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_DELETE_ACCOUNT - success"); },
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_DELETE_ACCOUNT - error");
        }
    });
    console.log({id:id})
}
