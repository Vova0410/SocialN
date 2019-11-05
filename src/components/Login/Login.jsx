import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {maxLength22, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControl";
import {connect} from "react-redux";
import {loginDAL} from "../../state/auth-reducer";
import {Redirect} from "react-router-dom";

let LoginForm = (props) => {
    const { handleSubmit } = props;
    return(
        <form name="login" onSubmit={handleSubmit}>
            <div>
                <Field name="Email"  type="text" placeholder="Email" component={Input} validate={[required, maxLength22]}/>
            </div>
            <div>
                <Field name="Password"  type="Password" placeholder="Password" component={Input} validate={[required]}/>
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

        /*console.log(dataForm)*/
        props.LoginL(dataForm.Email, dataForm.Password, dataForm.rememberMe)
    };

    if(props.isAuth) {return <Redirect to={"/profile"} />}
    return(<div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>

    )

};
const mapStateToPros = (state) => {
    return{
        isAuth: state.auth.isAuth
    }

};

export default connect(mapStateToPros,  {LoginL: loginDAL})(Login) ;