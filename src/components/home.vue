<template>
  <div class="deepCodeHome">
    <topNav></topNav>
    <section class="slide_display">
      <transition-group tag="ul" name="carouselImag" class="slide_ul">
        <li v-for="(item,index) in slideImgList" :key="index" v-show="currentIndex===index" class="slide_li" @mouseenter="stop" @mouseleave="go">
          <img :src="item.image" class="slideImg">
        </li>
      </transition-group>
    </section>
    <hr class="dividingLine">
    <section class="instruction">
      <h2 class="sectionTitle">メッセージ</h2>
      <div class="row-fluid">
        <p>「所有する時代から、共有する時代へ」「シェアリングエコノミー元年」…</p>
        <p>こんなコピーをいろいろな記事で見かけますが、まさにエンジニアリングもこのシェアカルチャーの中で大きく変化しています。</p>
        <br>
        <br>
        <p>目まぐるしい技術革新が日々起こっている中で、</p>
        <p>必要となる技術やスキルが変わっていくため、日々の勉強を通してスキルアップしていくことが大事です。</p>
        <br>
        <p>我々は常に世の未来を強く意識し、新しいことへのチャレンジ精神を持ちつつ、</p>
        <p>よりお客様と従業員が喜んでくれる企業を目指して日々精進していく考えであります。</p>
        <br>
      </div>
    </section>
    <section class="businessContent">
      <h2 class="sectionTitle">事業内容</h2>
      <div class="bsFluid">
        <div class="bsFluidLeft">
          <div class="bsFluidLeftTop">
            <h3 class="bsFluidLeftTopH3">システム受託開発</h3>
            <small>モバイルアプリケーションを中心に幅広い開発に対応</small>
          </div>
          <div class="bsFluidLeftCont">
            <p>当社はレガシーシステムのアップグレードから最新のスケーラビリティの高いシステムの構築までハイクオリティなシステム開発を実現致します。</p>
            <br>
            <p>お客様のご要望を聞くから、システムの設計、実装、テストをし、最後の納品まで入念に作業させて頂きまして、お客様の課題を解決し、真のニーズに応えるソリューションの実現を展開してします。</p>
            <br>
            <br>
            <p>主な技術：Android, iOS, Java, AWSなど</p>
          </div>
        </div>
        <div class="bsFluidright">
          <img src= '../images/bis01.png' class="bisImg">
        </div>
      </div>
      <hr class="dividingLine">
      <div class="bsFluid bsFluid02">
        <div class="bsFluidright bsFluid02Right">
          <img src= '../images/bis02.jpeg' class="bisImg">
        </div>
        <div class="bsFluidLeft bsFluid02Left">
          <div class="bsFluidLeftTop bsFluid02LeftTop">
            <h3 class="bsFluidLeftTopH3 bsFluid02LeftTopH3">クラウドコンピューティング</h3>
            <small>AWSの価値最大限活用</small>
          </div>
          <div class="bsFluidLeftCont">
            <p>クラウドを利用することで、ハードウェア導入に伴う初期の多額の投資や、リソースの調達、メンテナンス、容量の使用計画といったわずらわしい作業に多大な人的リソースを費やす必要がなくなります。</p>
            <br>
            <p>削減することができた資金や人的リソースを新しいアイデアの実現に充てることが可能になり、IT部門を運営するために必要な、適切な種類とスペックのコンピューティングリソースもプロビジョニングすることができます。</p>
            <br>
            <br>
            <p>弊社は主にAWS（Amazon Web Service）活用に関するコンサルティングを実施しています。 インフラの調達期間、拡張・縮小の迅速さ、セキュリティ、既存のデータセンター環境との連携の利便性など、自社サーバーでは難しかった多くのケースも AWSクラウドであれば解決することができます。</p>
          </div>
        </div>
      </div>
    </section>
    <hr class="dividingLine">
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState } from 'vuex'
import topNav from '../component/topNav.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      currentIndex: 0,
      timer: null,
      slideImgList: [
        { image: require('../images/img01.png') },
        { image: require('../images/img02.png') },
        { image: require('../images/img03.png') }
      ]
    }
  },
  computed: mapState(['msg']),
  components: {
    topNav
  },
  methods: {
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex > this.slideImgList.length - 1) {
        this.currentIndex = 0
      }
    },
   go () {
    this.timer = setInterval (() => {
       this.autoPlay ()
     }, 4000)
    },
   stop () {
     clearInterval (this.timer)
     this.timer = null
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
       this.autoPlay ()
      }, 4000)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/mixin';
.slide_display{
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  .slide_ul{
    width: 100%;
    height: 100%;
    .slide_li{
      position:absolute;
      width: 100%;
      height: 100%;
      img{
      width: 100%;
      height: 100%;
      }
    }
  }
}
.carouselImag-enter-to {
  transition: all 2s ease;
  transform: translateX(0);
}

.carouselImag-leave-active {
  transition: all 2s ease;
  transform: translateX(-100%)
}

.carouselImag-enter {
  transform: translateX(100%)
}

.carouselImag-leave {
  transform: translateX(0)
}
.dividingLine{
  margin: 20px 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #fff;
}
.sectionTitle{
  text-align: left;
  margin:10px 0 10px 30px;
}
.row-fluid{
  margin-left: 8%;
  p{
    text-align: left;
  }
}
.bsFluid{
  display: flex;
  margin-left: 8%;
  .bsFluidLeftTop{
    border-left:5px solid #e5e5e5;
    small{
      color: rgb(126, 107, 107);
      display: block;
      text-align: left;
    }
  }
  .bsFluidLeft{
    flex: 2;
    text-align: left;
    padding:10px 15px 10px 0;
  }
  .bsFluidright{
    flex: 1;
    .bisImg{
      width: 100%;
    }
  }
  margin-right: 3%;
}
.bsFluidLeftCont{
  margin-top: 20px;
  p{
    text-align: left;
  }
}
</style>
