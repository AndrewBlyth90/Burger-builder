export const updateObject = (oldObj, newProperties) => {
    return {
        ...oldObj,
        ...newProperties
    }
}

export const checkValidity = (value, rules) => {
    let isValid = true;
    if(!rules){
        return true
    }

    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.required && isValid) {
      isValid = value.trim() !== "";
    }

    if (rules.minLength && isValid) {
      isValid = value.length >= rules.minLength;
    }

    if (rules.maxLength && isValid) {
      isValid = value.length >= rules.maxLength;
    }
    
    if(rules.isEmail){
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        isValid = pattern.test(value) && isValid
    }

    if(rules.isNumeric){
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    
    return isValid;
  }