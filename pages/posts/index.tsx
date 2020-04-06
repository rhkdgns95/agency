import { NextPage } from "next";
import CreatePost from "../../components/CreatePost";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../src/graphql/queries";
import { ListPostsQuery } from "../../src/API";
import PostCard from "../../components/PostCard";
import { onCreatePost } from "../../src/graphql/subscriptions";

const getPosts = async (setPost: any): Promise<void> => {
  const response: { data: ListPostsQuery } | any = await API.graphql(graphqlOperation(listPosts));
  if(response && response.data) {
    const { data: { listPosts }} = response;
    setPost({
      listPosts
    });
  }
};

const getPostSubsription = async (post: ListPostsQuery, setPost: any): Promise<void> => {
  const subscription: any = API.graphql(graphqlOperation(onCreatePost));
  subscription.subscribe({
    next: (todo) => {
      const { value: { data: { onCreatePost } }} = todo;
      console.log("onCreatePost: ", onCreatePost);
      const newPost = {
        listPosts: {
          ...post.listPosts,
          items: [
            ...post.listPosts.items,
            { ...onCreatePost }
          ]
        }
      };
      console.log("newPost: ", newPost);
      // setPost({
      //   ...post,
      //   listPosts: {
      //     ...post?.listPosts,
      //     items: [
      //       ...post?.listPosts?.items,
      //       { ...onCreatePost }
      //     ]
      //   }
      // });

    }
  });
}

const Posts: NextPage<IPageProps> = ({ title }) => {
  const [post, setPost] = useState<ListPostsQuery>();
  console.log("POSTS: ", post);

  useEffect(() => {
    console.log("useEffect(): ", title);
    getPosts(setPost);
    getPostSubsription(post, setPost);
    
  }, []);

  return (
    <div>
      <CreatePost />
      { post?.listPosts?.items?.map(post => <PostCard key={post.id} id={post.id} title={post.title} text={post.text}/>) }
    </div>
  );
};

Posts.getInitialProps = async (props): Promise<IPageProps> => {

  return {  
    title: "Posts"
  };
};

export default Posts;