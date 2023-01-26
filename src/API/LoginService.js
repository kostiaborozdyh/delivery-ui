import $ from "jquery";

export default class LoginService{
    static loginUser(user,setLoginErr) {
        const requestJson = JSON.stringify(user)
        $.post({
            contentType: 'application/json',
            url: 'http://localhost:8082/v2/login',
            data: requestJson,
            success: function (data) {
                console.log('Yep, u are successfully authorized')
                console.log('modal window and redirect to main page')
                console.log(data)
            },
            error: function (xhr) {
                const errLogin = {}
                const message = xhr.responseText
                if (message.includes('Bad credentials')){
                    errLogin.username = 'Invalid login or password'
                }else{
                    console.log('something is going wrong')
                    console.log(message)
                }
                setLoginErr(errLogin)
            }
        });
    }
}