import '../../public/css/list_online.css'
import avatarNone from '../../public/images/avatar_none.png'
function ListOnline(){
    return (
        <div className="friend-onl col-md-3">
            <ul className="list-friend-onl">
                <li><b>List friend online</b></li>
                <li>
                    <div className="avatar-and-online">
                        <img src={avatarNone} className="avatar" alt=""/>
                            <div className="status-online"/>
                    </div>
                    <span className="name">viendd</span>
                </li>
                <li>
                    <div className="avatar-and-online">
                        <img src={avatarNone} className="avatar" alt=""/>
                            <div className="status-online"/>
                    </div>
                    <span className="name">viendd</span>
                </li>
                <li>
                    <div className="avatar-and-online">
                        <img src={avatarNone} className="avatar" alt=""/>
                            <div className="status-online"/>
                    </div>
                    <span className="name">viendd</span>
                </li>
                <li>
                    <div className="avatar-and-online">
                        <img src={avatarNone} className="avatar" alt=""/>
                            <div className="status-online"/>
                    </div>
                    <span className="name">viendd</span>
                </li>
            </ul>
        </div>
    );
}

export default ListOnline