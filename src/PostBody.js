import React from "react"
import {connect} from "react-redux"
import store from './store'
class PostBody extends React.Component{
    handleLike=()=>{

        store.dispatch({type:"XXX",postId:this.props.postId})
    }
    render(){

        let {postId,posts}=this.props;
        let cPostsId = posts.filter(value => value.postId === postId)[0]
        return(
            <div className="home" >
               <div className="post-body">
                   <div className="title">{this.props.postId}</div>

                   <div className="likes-num num" onClick={this.handleLike}>
                       {cPostsId.likes}赞
                   </div>
                   <div className="comment-num num">
                       {this.props.comments.length}
                       </div>
               </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    comments:state.comments,
    posts: state.posts
})
export default connect(mapStateToProps)(PostBody)