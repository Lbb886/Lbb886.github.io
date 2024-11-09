var posts=["posts/45395.html","posts/15126.html","posts/19457.html","posts/29222.html","posts/19806.html","posts/46801.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };