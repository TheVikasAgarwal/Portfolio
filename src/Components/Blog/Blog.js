import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from "../ShowBlog/ShowBlog";
import Spinner from "../Spinner/Spinner";
import Tabs from "../Tabs";
export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
      },
      item: [],
      isloading: true,
      error: null
    };
  }
  mediumURL = "https://booyah-training-backend.azurewebsites.net/api/Blog/getAllBlogs";
  // "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@contactvix";

  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        console.log(data.data)
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res;
        //  res.filter(item => item.categories.length > 0);

        const title = data.data.feed.title;

        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avtar: avatar,

            },
            item: posts,
            isloading: false
          }),
          () => {
            console.log(this.state);
          }
        );
        console.log(data, res);
      })
      .catch((e) => {

        console.log(e);
        this.setState({ error: e.toJSON() })
      });
  }
  render() {

    let kanbanPost;
    let scrumPost;

    if (this.state.item) {
      kanbanPost = this.state.item.filter(x => x.category === "Kanban").map((post, index) => (
        <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
      ))
      scrumPost = this.state.item.filter(x => x.category === "Scrum").map((post, index) => (
        <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
      ))
    }
    if (this.state.isloading) {
      kanbanPost = <Spinner />
      scrumPost = <Spinner />
    }
    if (this.state.error) {
      let error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      kanbanPost = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
      scrumPost = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    return (
      <div>
      <Tabs>
        <div label="Kanban">
        <div className="row">
          {kanbanPost}
         </div>
        </div>
        <div label="Scrum">
        <div className="row">
          {scrumPost}
         </div>
        </div>
        
      </Tabs>
    </div>
      // <div className="container">
      //   <div className="row">
      //     {post}
      //   </div>
      // </div>
    );
  }
}

export default Blog;

const styleParams = {
  particles: {
    number: {
      value: 100,
    },
    size: {
      value: 5,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};
