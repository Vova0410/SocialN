import React from 'react';


class ProfileStatus extends React.Component {
    state = {
    editMode: false
};
    toggleEditMode =() => {
        this.state.editMode ? this.setState({editMode: false})  : this.setState({editMode: true})
    };
render()
{
    return (
        <div>
            {!this.state.editMode &&
                <div onDoubleClick={this.toggleEditMode}>
                    <span>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div onBlur={this.toggleEditMode}>
                    <input type="text"  value={this.props.status} autoFocus={true} />
                </div>
            }
        </div>
    )
}
}
export default ProfileStatus;