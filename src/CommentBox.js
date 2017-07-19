import React from "react"
class CommentBox extends React.Component{
    constructor(){
        super()
        this.state={
            comments:[
                "第一条",
                "第二条"
            ],
            input:""
        }
    }
    // handleClick(e){
    //     e.preventDefault()
    //     this.setState({comment:[...this.state.comment,...this.state.input]})
    // }
    handleSubmit =(e)=>{
         e.preventDefault()
        console.log(this.comment.value)
        let newComment=this.comment.value
        // this.state.comments.push(newComment)
        this.setState({
          comments:[...this.state.comments,newComment]
        })
        this.myForm.reset()
        // console.log({comment:[...this.state.comments,newComment]})

    }
    render(){
       console.log("render......")
       let com=this.state.comments.map(item=>(
                <li key={Math.random()}>{item}</li>
            ))

        return(

        <div className="comment-box">
            <form ref={value=>this.myForm=value} onSubmit={this.handleSubmit} className="comment-form">
              {com}
              <input ref={value=>this.comment=value} type="text" className="input" />
              <button type="submit" className="submit-btn" >提交</button>
            </form>
        </div>
        )
    }
}
export default CommentBox