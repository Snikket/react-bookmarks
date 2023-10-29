import classes from './Post.module.css';

function Post(props){
    return (
    <li className={classes.post}>
        <p classes={classes.author}>Author: {props.author}</p>
        <p className={classes.text}>Book: {props.body}</p>
        <p/>
        </li>);
}

export default Post;