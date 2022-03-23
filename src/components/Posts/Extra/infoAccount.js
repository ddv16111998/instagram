import avatar from "../../../public/images/logo-user.png";

function InfoAccount(props){
    return (
        <div className="info-account">
            <img className="avatar" src={avatar} width="50" height="50" alt="" />
            <span className="name">{props.author.name}</span>
        </div>
    );
}

export default InfoAccount