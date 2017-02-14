const postsReducer = (state=[], action) => {
  switch (action.type) {
    case 'VOTE_UP':
      return state.map((post) => {
        console.log(post.postid);
        console.log(action.payload);
        if (post.postid !== action.payload.id) return post;
        return { ...post, votes: post.votes + 1 };
      });
    case 'SORT_NEWEST':
      return state.slice().sort((post, nextPost) => (parseInt(post.postid, 10) - parseInt(nextPost.postid, 10)));
    case 'SORT_POPULAR':
      return state.slice().sort((post, nextPost) => (nextPost.votes - post.votes));
    case 'LOAD_POSTS':
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
