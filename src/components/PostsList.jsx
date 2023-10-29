import Post from "./Post"
import classes from './PostsList.module.css';

function PostsList(){
    return (
        <ul className={classes.posts}>
                <Post author='Maximillian' body='HP and the Philosopher Stone'/>
                <Post author='Dominik' body='Yellowface'/>
                <Post author='Mary' body='A series of unfortunate events'/>
        </ul>
    )
}

export default PostsList;