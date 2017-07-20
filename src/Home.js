import React, { Component } from 'react'

import {Link} from 'react-router-dom'

class HomePage extends Component {

    render() {

        return (
            <div>
                <Link to={"/"}>首页</Link>
                <Link to={"/post/1"}>pinlun</Link>
                <Link to={"/post/2"}>GIT study</Link>
                <Link to={"/post/3"}>iiiii</Link>
            </div>

        )
    }
}

export default HomePage;