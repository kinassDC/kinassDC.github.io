var posts=["2024/12/08/排序算法/","2024/12/05/散列查找/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };