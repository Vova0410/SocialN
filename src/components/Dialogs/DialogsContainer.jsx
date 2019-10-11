import React from 'react';
import Dialogs from './Dialogs';
import {addMessageCreator, onMessageChangeCreator} from '../../state/dialog-reducer';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        newMessageVal: state.messagePage.newMessageVal

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;








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
