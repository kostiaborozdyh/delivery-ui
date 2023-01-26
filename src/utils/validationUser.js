const loginRegex = /^[a-zA-Z][a-zA-Z\d]{4,20}/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const nameRegex = /^[a-zA-ZА-Яа-яЇїіІ]{4,20}/
const phoneNumberRegex = /\+380\d{9}/
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const isNotValid = (string,regex) =>{
    const found = string.match(regex)

    if(found === null) {
        return true
    } else{
        return found[0] !== string
    }

}
export const validate = (user) =>{
    const err={}

    if(isNotValid(user.login,loginRegex)){
        err.login = 'must contain at least 4 characters and can contain a numbers'
    }
    if(isNotValid(user.password,passwordRegex)){
        err.password = 'minimum eight characters, at least one letter and one number'
    }
    if(user.password!==user.confirmPassword){
        err.confirmPassword = 'passwords must match'
    }
    if(isNotValid(user.firstName,nameRegex)){
        err.firstName = 'must consist at least 4 uppercase or lowercase letters'
    }
    if(isNotValid(user.lastName,nameRegex)){
        err.lastName = 'must consist at least 4 uppercase or lowercase letters'
    }
    if(isNotValid(user.phoneNumber,phoneNumberRegex)){
        err.phoneNumber = 'must be 10 digits and begin with 0 or +380'
    }
    if(isNotValid(user.email,emailRegex)){
        err.email = 'must adhere to email standards'
    }

    return err
}