<template>
  <section class="headTop">
    <div class="nav">
      <router-link :to="{path:'/index'}" class="logoBrand" >株式会社DeepCode</router-link>
      <section  class="guide_item">
        <span>企業情報</span>
        <ul class="qyqb">
          <li>会社概要</li>
          <li>経営方針</li>
        </ul>
      </section>
      <section class="guide_item">
        <router-link to="/components/busineseeCont">事业内容</router-link>
      </section>
      <section class="guide_item">
        <span>招聘启示</span>
      </section>
   </div>
  </section>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .headTop{
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    margin-bottom: 0;
  }
  .nav{
    display: flex;
    align-items: center;
    background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
    background-repeat: repeat-x;
    border: 1px solid #d4d4d4;
    border-width: 0 0 1px;
    min-height: 40px;
    background-color: #fafafa;
  }
  .logoBrand{
    padding: 10px 20px 10px;
    font-size: 20px;
    color:#4682B4;
    text-shadow: 0 1px 0 #ffffff;
  }
  .guide_item{
    padding: 10px 20px 10px;
    position: relative;
    a {
      color: #777;
    }
    span {
      color: #777;
    }
    .qyqb{
      position:absolute;
      top:49px;
      left:10px;
      background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
      background-repeat: repeat-x;
      border: 1px solid #d4d4d4;
      border-width: 0 0 1px;
      background-color: #fafafa;
      border-radius: 6px;
      -webkit-transition: all .4s;
      -moz-transition: all .4s;
      -o-transition: all .4s;
      transition: all .4s;
      z-index: 0;
      opacity: 0;
      visibility: hidden;
      list-style: none;
      li{
        padding:10px;
        color: #777;
      }
    }
  }
  .nav .guide_item:hover {
    span ,a {
      color: #4682B4;
      cursor: default;
    }
  }
  .nav .guide_item:hover .qyqb {
  top:46px;
  left:10px;
  opacity: 1;
  visibility: visible;
  list-style: none;
  background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
  background-repeat: repeat-x;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
}
</style>
