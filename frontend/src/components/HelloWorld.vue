<template>
  <div class="jumbotron" >
     <b-jumbotron >
    <template #header >게시판 main</template>

    <template #lead>
      게시판 만들기
    </template>

    <hr class="my-4">

    <p>
      개발자 : 3명
    </p>

    <p>
      빠밤!
    </p>
    
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'jumbotron',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3c423f;
}
  .jumbotron {
            background: url("https://blog.kakaocdn.net/dn/sZ7ux/btqDSzwx1NN/c0FYKBDM9WacVK61NpYar1/img.jpg") center center / cover no-repeat;
        }
        
</style>
