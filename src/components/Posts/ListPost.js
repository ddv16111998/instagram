import Post from "./Post";
import PropTypes from "prop-types";

function ListPost(props){
    let listPosts = props.listPosts
    return (
        <div className="posts col-md-7">
            {listPosts.length && listPosts.map((post, index) =>
                <Post key={index} post={post} />
            )}
        </div>
    )
}

ListPost.propTypes = {
    listPost: PropTypes.array,
};

export default ListPost