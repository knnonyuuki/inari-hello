import React from "react"
import {connect} from "react-redux"
class PostBody extends React.Component{
    render(){
        return(
            <div className="home" >
               <div className="post-body">
                   <div className="likes-num num">
                       {this.props.likes}
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
    likes:state.likes
})
export default connect(mapStateToProps)(PostBody)