import React from "react";
import Image from "./Image";

class UserProfile extends React.Component {
    render() {
        const { name, email, avatar } = this.props.user;
        return (
            <div className="user-unity">
                <Image avatar={avatar} name={name} />
                <p>Nome: {name}</p>
                <p>Email: {email}</p>
            </div>
        )
    }
}

export default UserProfile;