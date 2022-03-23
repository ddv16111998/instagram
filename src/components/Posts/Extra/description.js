function Description(props){
    return(
        <p className="description-post">
            {props.author} {props.description}
        </p>
    );
}

export default Description