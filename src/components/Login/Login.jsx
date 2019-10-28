import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {maxLength, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControl";

let LoginForm = (props) => {
    const { handleSubmit } = props;
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="Login"  type="text" placeholder="Login" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name="Password"  type="text" placeholder="Password" component={Input} validate={[required]}/>
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component={Input} validate={[required]}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};
LoginForm = reduxForm({ //скопировал с библиотеки, подставил свои данные
    form: 'login'
})(LoginForm);


const Login = (props) => {
    const onSubmit = dataForm => {
        console.log(dataForm)
    };
    return(<div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>

    )

};

export default Login;