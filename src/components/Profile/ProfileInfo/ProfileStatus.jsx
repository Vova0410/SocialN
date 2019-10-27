import React from 'react';
import classes from './ProfileStatus.module.css'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode} className={classes.span1}>
                    <span>{this.props.status || 'hello'}</span>
                </div>
                }
                {this.state.editMode &&
                <div onBlur={this.deActivateEditMode} className={classes.input}>
                    <input onChange={this.onChangeInput} type="text" value={this.state.status} autoFocus={true}/>
                </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;