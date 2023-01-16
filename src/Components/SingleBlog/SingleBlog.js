import React, { Component } from "react";
import Axios from "axios";
import c from "./SingleBlog.module.css";
import Spinner from "../Spinner/Spinner";
import SkeletonSingleLoader from "../SkeletonLoader/SingleLoader";

export class SingleBlog extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      singlePost: {},
      titleid: props.location.pathname,
      avatar: "",
      profileLink: "",
      error:null,
      isloading:true
    };
  }
  // "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@contactvix";
  componentDidMount() {
    let id = this.state.titleid.replace('/','');
    let mediumURL = `https://booyah-training-backend.azurewebsites.net/api/Blog/getBlogData/?id=${id}`;
    Axios.get(mediumURL)

      .then((data) => {
   
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; 
        const posts = res;
        // res.filter((item) => item.categories.length > 0);
        // for (let i in posts) {
          // const title = "/" + posts[i].title;
          // if (title === this.state.titleid) {
            let post = posts[0];
            
              this.setState((p) => ({
                singlePost: post,
                avatar: avatar,
                profileLink: profileLink,
                isloading:false
              }));
            
          // }
        // }
        
      })
      .catch((e) => {
        this.setState({error:e.toJSON()})
        console.log(e);
      });
  }

  render() {
    let post
    if(this.state.singlePost){
     post =( 
      <div className={c.content}  dangerouslySetInnerHTML={{ __html:this.state.singlePost.htmlContent}}>
          </div>
     )
    }
    if(this.state.isloading){
      post = <SkeletonSingleLoader />
    }
    if(this.state.error){
   let   error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    
    return (
      <div className={`container ${c.center}`}>
       {post}
      </div>
    );
  }
}

export default SingleBlog;
