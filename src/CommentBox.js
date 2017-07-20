import React from "react"
import {connect} from "react-redux"
import store from './store'
class CommentBox extends React.Component{
    handleSubmit =(e)=>{
        e.preventDefault();
        let newComment = this.comment.value;
        console.log(newComment)
        store.dispatch({type:'ADD_COMMENT',comment: newComment, postId: this.props.postId});  //action 对象
        this.myForm.reset()
    }
    render(){
        let { postId, comments } = this.props;
        console.log(this.props)
        // console.log(comments[postId-1].content)
        let com = comments.filter(value => value.postId ===  postId ).map(item => {
            return item.content;
        })
        return(
        <div className="comment-box">
            {
                com.map(item => (
                    <li className="comment" key={Math.random()}>{item}</li>
                ))
            }
                <form ref={value=>this.myForm=value} onSubmit={this.handleSubmit} className="comment-form">
                    <input ref={value=>this.comment=value} type="text" className="input" />
                    <button type="submit" className="submit-btn" >提交</button>
                </form>
        </div>
        )
    }
}
const mapStateToProps = (state) =>({
    comments:state.comments
});
export default connect(mapStateToProps)(CommentBox)