var posts=["2024/12/03/hello-world/","2024/12/03/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };