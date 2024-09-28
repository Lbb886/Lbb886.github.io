var posts=["posts/f5103fb2.html","posts/4a17b156.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };