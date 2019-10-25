import React from 'react';
import Dialogs from './Dialogs';
import {addMessageCreator, onMessageChangeCreator} from '../../state/dialog-reducer';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageVal: state.messagePage.newMessageVal,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageCont: () => {
            dispatch(addMessageCreator())
        },
        upDateMessageChange: (newMess) => {
            dispatch(onMessageChangeCreator(newMess))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)


/*let AuthRedirectComponent = WithAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/


/*
 const mapStateToPropsForRedirect= (state) => ({
 isAuth: state.auth.isAuth
 });
 AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
 */

/*(props) => {
 if(!props.isAuth) return <Redirect to={"/login"}/>
 return <Dialogs {...props}/>
 };*/



/*const DialogsContainer = (props) => {
  return (
 <MyContext.Consumer>
 {(store) => {
 let state = store.getState();


 let newMessageText = React.createRef();

 let addMessage = () => {
 //let text = newMessageText.current.value;
 store.dispatch(addMessageCreator());
 };

 let onMessageChange = (newMess) => {
 store.dispatch(onMessageChangeCreator(newMess));
 };
 return < Dialogs dialogs={state.messagePage.dialogs}
 messages={state.messagePage.messages}
 newMessageVal={state.messagePage.newMessageVal}
 addMessageCont={addMessage}
 upDateMessageChange={onMessageChange}/>
 }
 }
 </MyContext.Consumer>

 )
 };*/
