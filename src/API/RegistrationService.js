import $ from "jquery";

export default class RegistrationService {
    static registerUser(user,setLoginErr) {
        const requestJson = JSON.stringify(user)
        $.post({
            contentType: 'application/json',
            url: 'http://localhost:8081/v1/registration',
            data: requestJson,
            success: function () {
                console.log('Yep, u are successfully registered')
                console.log('modal window and redirect to login page')
            },
            error: function (xhr) {
                const errLogin = {}
                const message = JSON.parse(xhr.responseText).message
                if (message.startsWith('Not Valid')){
                    const field = message.substring(10)
                    errLogin[field] = message
                    console.log(field)
                } else if(message === 'This login already exist'){
                    errLogin.login = message
                } else if(message === 'This email already exist'){
                    errLogin.email = message
                }else if(message === 'passwords are not equals'){
                    errLogin.confirmPassword = message
                }else{
                    console.log('something is going wrong')
                    console.log(message)
                }
                setLoginErr(errLogin)
            }
        });
    }
}