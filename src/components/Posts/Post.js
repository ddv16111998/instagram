import '../../public/css/post.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../public/images/media.png'
import NotFavorited from "./Reacts/notFavorited";
import Favorited from "./Reacts/favorited";
import {useState} from "react";
import Comment from "./Reacts/comment";
import Share from "./Reacts/share";
import Save from "./Reacts/save";
import TotalLike from "./Extra/totalLike";
import Description from "./Extra/description";
import ViewAllComment from "./Extra/viewAllComment";
import TimeAgo from "./Extra/timeAgo";
import OptionMore from "./Extra/optionMore";
import InfoAccount from "./Extra/infoAccount";
import Emoji from "./Extra/emoji";
import InputComment from "./Extra/inputComment";
function Post(props){

    const [post, setPost] = useState(props.post)

    function handleFavorite(){
        setPost({
            'author': {
                'name' : "viendd",
                'avatar' : '../public/images/logo-user.png'
            },
            'title' : "PHP",
            'description': 'abcd',
            'favorited': true,
            'total_like'  : 10000,
            'total_comment' : 20
        })
    }

    function handleNotFavorite(){
        setPost({
            'author': {
                'name' : "viendd",
                'avatar' : '../public/images/logo-user.png'
            },
            'title' : "PHP",
            'description': 'abcd',
            'favorited': false,
            'total_like'  : 999,
            'time_ago' : '1 day ago'
        })
    }

    return (
        <div className="post">
            <div className="row account">
                <div className="col-md-11">
                    <InfoAccount author={post.author}/>
                </div>
                <div className="col-md-1 more-options">
                    <OptionMore />
                </div>
            </div>
            <div className="row content">
                <img width="100%" height="auto" src={image} alt="" />
            </div>
            <div className="row actions">
                <div className="col-md-11 favorite-comment-share">
                    {post.favorited ? <Favorited unlike={handleNotFavorite} /> : <NotFavorited like={handleFavorite} />}
                    <Comment/>
                    <Share/>
                </div>
                <div className="col-md-1 right button-save">
                    <Save/>
                </div>
            </div>
            <div className="row info">
                <div className="col-md-12">
                    <TotalLike totalLike={post.total_like}/>
                    <Description author={post.author.name} description={post.description}/>
                    <ViewAllComment totalComment={post.total_comment}/>
                    <TimeAgo timeAgo={post.time_ago}/>
                </div>
            </div>

            <div className="row react-and-comment">
                <div className="col-md-1">
                    <Emoji />
                </div>
                <div className="col-md-9">
                   <InputComment/>
                </div>
                <div className="col-md-2 btn-comment">
                    <b className="right">Post</b>
                </div>
            </div>
        </div>
    );
}

export default Post;