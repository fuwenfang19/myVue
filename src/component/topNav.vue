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
    <div>
      <div class="nav_mobile" :class="showMobileValue ? 'nav_mobile_show':'nav_mobile_hide'">
        <router-link :to="{path:'/index'}" class="logoBrand" >株式会社DeepCode</router-link>
        <section  class="guide_item_mobile" style="padding-top:48px">
          <span>企業情報</span>
          <ul class="qyqb">
            <li>会社概要</li>
            <li>経営方針</li>
          </ul>
        </section>
        <section class="guide_item_mobile">
          <router-link to="/components/busineseeCont">事业内容</router-link>
        </section>
        <section class="guide_item_mobile">
          <span>招聘启示</span>
        </section>
        <section class="guide_item_button">
          <div v-on:click="showMobile">click</div>
        </section>
    </div>
   </div>
  </section>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      showMobileValue: false
    }
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    },
    showMobile () {
      this.showMobileValue = !this.showMobileValue
      console.log(this.showMobileValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @media (min-width: 979px) {
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
    .logoBrand{
      padding: 10px 20px 10px;
      font-size: 20px;
      color:#4682B4;
      text-shadow: 0 1px 0 #ffffff;
      background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
      background-repeat: repeat-x;
    }
  }
  .nav_mobile{
    display: none;
  }
  .guide_item{
    padding: 10px 20px 10px;
    position: relative;
    background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
    background-repeat: repeat-x;
    a {
      color: #777;
      background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
      background-repeat: repeat-x;
    }
    span {
      color: #777;
      background-image: linear-gradient(to bottom, #ffffff, #f2f2f2);
      background-repeat: repeat-x;
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
  .guide_item_button{
    display: none;
  }
}
 @media (max-width: 979px) {
   .headTop{
    position:static;
    right: 0;
    left: 0;
    z-index: 0;
    margin-bottom: 0;
  }
   .nav_mobile{
    align-items: center;
    border: 1px solid #d4d4d4;
    border-width: 0 0 1px;
    min-height: 40px;
    background-color: #fafafa;
    margin-bottom: 20px;
    .logoBrand{
      float:left;
      padding: 10px 20px 10px;
      font-size: 20px;
      color:#4682B4;
      text-shadow: 0 1px 0 #ffffff;
      background-color: #fafafa;
    }
    span{
      display: block;
      padding: 9px 15px;
      font-weight: bold;
      color: #777777;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      margin-bottom: 2px;
      background-color: #fafafa;
    }
  }
  .nav_mobile_show{
    height:auto;
  }
  .nav_mobile_hide{
    height:50px;
    overflow: hidden;
  }
   .nav{
     display: none;
   }
   .guide_item_mobile{
     background-color: #fafafa;
     text-align: left;
     padding-left:20px;
     .qyqb{
       margin-left: 40px;
       padding:6px 0;
       background-color: #fafafa;
     }
     .qyqb li{
      background-color: #fafafa;
      padding:10px 0;
      cursor: pointer;
     }
     a{
       display: block;
      padding: 9px 15px;
      font-weight: bold;
      color: #777777;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      margin-bottom: 2px;
      background-color: #fafafa;
     }
   }
   .guide_item_button {
    display: block;
    position: absolute;
    right:20px;
    top:10px;
    width: 50px;
    height: 29px;
    float: right;
    padding: 7px 10px;
    margin-right: 5px;
    margin-left: 5px;
    background-color: #e5e5e5;
    border-radius: 3px;
    cursor: pointer;
    div{
      background-color: #e5e5e5;
    }
   }
 }
</style>
