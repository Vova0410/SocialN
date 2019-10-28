import React from 'react';
import classes from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deActivateEditMode =() => {
        this.setState({editMode: false});
        this.props.upDateStateDAL(this.state.status)
    };
    onChangeInput = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
        console.log("componentDidUpdate")
    }

    render() {
        console.log("render");
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode} className={classes.span1}>
                    <span>{this.props.status || 'create your status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div onBlur={this.deActivateEditMode} className={classes.input}>
                    <input  type="text" value={this.state.status} autoFocus={true} onChange={this.onChangeInput}/>
                </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;