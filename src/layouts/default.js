import Header from "../components/header";
import {Container} from "react-bootstrap";
import ListPost from "../components/Posts/ListPost";
import ListOnline from "../components/Chats/listOnline";

function Default() {

    let listPosts = [
        {
            'author': {
                'name' : "viendd1",
                'avatar' : '../public/images/logo-user.png'
            },
            'title' : "PHP1",
            'description': 'abcd',
            'favorited': false,
            'total_like' : 200,
            'total_comment' : 20,
            'time_ago' : '1 hour ago'

        },
        {
            'author': {
                'name' : "nganvt",
                'avatar' : '../public/images/logo-user.png'
            },
            'title' : "Laravel",
            'description': 'abcd',
            'favorited': true,
            'total_like' : 200,
            'total_comment' : 20,
            'time_ago' : '1 hour ago'

        },
        {
            'author': {
                'name' : "tuanva",
                'avatar' : '../public/images/logo-user.png'
            },
            'title' : "ReactJs",
            'description': 'abcd',
            'favorited': true,
            'total_like' : 200,
            'total_comment' : 20,
            'time_ago' : '1 hour ago'


        },
    ]
    return (
        <div className="instagram">
            <div className="main">
                <Header/>
                <div className="content" style={{paddingTop: "120px"}}>
                    <Container>
                        <div className="row">
                            <ListPost listPosts={listPosts} />
                            <ListOnline/>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Default;