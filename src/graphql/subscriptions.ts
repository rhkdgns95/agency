// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($userName: String!) {
    onCreatePost(userName: $userName) {
      id
      title
      userName
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($userName: String!) {
    onUpdatePost(userName: $userName) {
      id
      title
      userName
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($userName: String!) {
    onDeletePost(userName: $userName) {
      id
      title
      userName
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($userName: String!) {
    onCreateComment(userName: $userName) {
      id
      postId
      userName
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($userName: String!) {
    onUpdateComment(userName: $userName) {
      id
      postId
      userName
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($userName: String!) {
    onDeleteComment(userName: $userName) {
      id
      postId
      userName
      content
      createdAt
      updatedAt
    }
  }
`;
