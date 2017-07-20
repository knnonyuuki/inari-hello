import React from "react"
import {connect} from "react-redux"
import store from './store'
class CommentBox extends React.Component{
    handleSubmit =(e)=>{
        e.preventDefault()
        console.log(store.getState())
        let newComment = this.comment.value
        store.dispatch({type:'ADD_COMMENT',comment:newComment})  //action 对象
        this.myForm.reset()
    }
    render(){
       let com = this.props.comments
        return(
        <div className="comment-box">
            {
                ['1','2'].map(item => (
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
    comments:state
})
export default connect(mapStateToProps)(CommentBox)