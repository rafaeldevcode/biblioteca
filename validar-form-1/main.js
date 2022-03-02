// Alterar o texto do bubble

let fields = document.querySelectorAll('[required]');

for(let field of fields){
    field.addEventListener('invalid', customValidation);
}

function customValidation(event){
    let field = event.target;

    function verifyError(){
        let foundError = false;

        for(let error in field.validity){
            if(error !== 'customError' && field.validity[error] && !field.valid){
                foundError = error;
            }
        }

        return foundError;
    }

    function customMessage(typeError){
        let valueMissing = 'Por favor, preencha este campo!'

        const message = {
            text: {
                valueMissing: valueMissing
            },
            email: {
                valueMissing: valueMissing,
                typeMismatch: 'Por favor, digite um email válido!'
            },
            password: {
                valueMissing: valueMissing
            }
        }

        if(message[field.type]){
            return message[field.type][typeError];
        }else{
            return valueMissing;
        }
    }

    let error = verifyError();
    let message = customMessage(error);

    if(error){
        field.setCustomValidity(message);
    }else{
        field.setCustomValidity('');
    }
}