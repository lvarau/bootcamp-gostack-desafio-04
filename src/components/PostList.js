import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Vanessa Romero",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "22 Out 2019",
        content: "Pessoal, esta página foi feita em React?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            date: "22 Out 2019",
            content: "Sim, ela é feita em React"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Leonardo Araújo",
          avatar:
            "https://avatars0.githubusercontent.com/u/44064347?s=400&u=6b5745b7ad73c5fc7aa6ac8d5904a4736d9edee0&v=4"
        },
        date: "22 Out 2019",
        content: "Olá, meu nome é Leonardo, sou o criador desta página",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "22 Out 2019",
            content: "Nossa! muito bem Leonardo, ficou massa!"
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "22 Out 2019",
            content: "top mano!"
          }
        ]
      },
      {
        id: 6,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/150?img=51"
        },
        date: "22 Out 2019",
        content: "React parece ser bem legal",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            date: "22 Out 2019",
            content: "experimente. Tenho certeza que vai gostar"
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            date: "22 Out 2019",
            content: "É isso ai!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
