import "./Card.css"
const Card = (props) => {
    /*Every Props has a default attribute called props.children*/
    /*This attribute presents the child elements of the component it is called upon*/
    const classes = props.className+" card";
    return (
        <div className={classes}>{props.children}</div>
    );
};

export default Card;
