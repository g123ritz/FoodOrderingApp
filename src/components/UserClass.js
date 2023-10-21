import { Component } from "react";

class UserClass extends Component{
    constructor(props){
        super(props);
        this.state={
          userInfo:{
            name:"Dummy",
            location:"Default",
          }
        };
        console.log("Child Constructor");
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/g123ritz");
        const json=await data.json();

        this.setState({
            userInfo:json,
        })
        console.log("Child Component Did Mount");
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        console.log("Child render");
        const{name,location}=this.state.userInfo;
       
      
        return(
            <div className="user-card">
            <img src={this.state.userInfo.avatar_url} alt=""/>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
        )
    }
}
export default UserClass;