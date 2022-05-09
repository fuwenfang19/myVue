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
    <section class="slide_display_phone">
      <img src="../images/imgPhone01.png" class="slideImgPhone">
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
        <div class="bsFluidright bsFluid02Right">
          <img src= '../images/bis02.jpeg' class="bisImg">
        </div>
      </div>
    </section>
    <hr class="dividingLine">
    <section>
      <h2 class="sectionTitle">テクノロジー</h2>
      <div class="skillsFluid">
        <div class="skillsFluidCont">
          <div>
            <img src= '../images/cloud.jpeg' class="skillImg">
            <h3 class="skillName">ＣＬＯＵＤ</h3>
            <p>AWSのコンサルティング・構築</p>
            <p>(EC2,S3,RDS,Route53等)</p>
          </div>
        </div>
        <div class="skillsFluidCont">
          <img src= '../images/mobile.jpeg' class="skillImg">
          <h3 class="skillName">ＭＯＢＩＬＥ</h3>
          <p>モバイルアプリケーション開発</p>
          <p>（iOS、Android）</p>
        </div>
        <div class="skillsFluidCont">
          <img src= '../images/java.png' class="skillImg">
          <h3 class="skillName">ＪＡＶＡ</h3>
          <p>より安全な大規模システム開発</p>
          <p>(Java8,SpringBoot,Thymeleaf,Html5,Git等)</p>
        </div>
      </div>
    </section>
    <hr class="dividingLine">
    <section>
      <h2 class="sectionTitle">個人情報保護方針</h2>
      <div class="informationFluid">
        <p class="informationFluidTop">制定日 2021年7月10日</p>
        <p class='informationFluidTop'>最終改正日 2021年7月10日</p>
        <p class="informationFluidOCont">株式会社DeepCode（以下、「当社」という。）では、当社の主事業であるITソリューションサービスを行って行く上で、「個人情報」は、お客様にとっても、取り扱う当社にとっても重要な情報資産であり、確実に保護することは重要な責務であります。個人情報保護理念と自ら定めた行動規範に基づき、社会的使命を十分に認識し、本人の権利の保護、個人情報に関する法規制等を遵守致します。
また、以下に示す方針を具現化するための個人情報保護マネジメントシステムを構築し、最新のＩＴ技術の動向、社会的要請の変化、経営環境の変動等を常に認識しながら、その継続的改善に、全社を挙げて取り組むことをここに宣言致します。</p>
        <p class="informationFluidOCont">１． 当社は、適切な個人情報の取得・利用及び提供を行い、特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行ないません。また、そのための措置を講じます。</p>
        <p class="informationFluidOCont">２． 当社は個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守致します。</p>
        <p class="informationFluidOCont">３． 当社は個人情報の漏えい、滅失、き損などのリスクに対しては、合理的な安全対策を講じて防止すべく、事業の実情に合致した経営資源を注入し、個人情報のセキュリティ体制を継続的に向上させていきます。また、万一の際には速やかに是正措置を講じます。</p>
        <p class="informationFluidOCont">４． 当社は個人情報取扱いに関する苦情及び相談に対しては、迅速かつ誠実に対応致します。</p>
        <p class="informationFluidOCont">５． 個人情報保護マネジメントシステムは、当社を取り巻く環境の変化と実情を踏まえ、適時・適切に見直して継続的に改善をはかります。</p>
        <p class="informationFluidTop">株式会社DeepCode 代表取締役社長 匡 文</p>
        <p class='informationFluidTop'>以上</p>
        <p class="informationFluidBottom">
          <b>【個人情報保護方針に関するお問い合わせ先 兼 個人情報に関する苦情・相談窓口】</b>
          <span>〒277-0005千葉県柏市柏六丁目4-24 コルメ柏Jルーム</span>
          <span>株式会社DeepCode 個人情報に関するお問い合わせ窓口</span>
          <span>メールアドレス：info@deepcode.co.jp ※特定電子メールはご遠慮ください</span>
        </p>
        <div class="informationFluidBottomLink">
          <router-link to="/busineseeCont">＞個人情報の利用目的の公表</router-link>
          <router-link to="/busineseeCont">＞保有個人データに関する事項の周知について</router-link>
          <router-link to="/busineseeCont">＞保有個人データの開示等に関する手続き</router-link>
        </div>
      </div>
    </section>
    <hr class="dividingLine">
    <section>
      <h2 class="sectionTitle">採用情報</h2>
      <div class="messageFluid">
        <p class="title">仲間大募集中！</p>
        <table class="messageFluidTable">
          <tbody>
            <tr>
              <td class="messageFluidTd01">募集職種</td>
              <td class="messageFluidTd02">
                <p>管理職（プロジェクトマネジャー、プロジェクトリーダー）</p>
                <p>技術職（システムエンジニア、プログラマー）</p>
              </td>
            </tr>
            <tr>
              <td class="messageFluidTd01">業務内容</td>
              <td class="messageFluidTd02">
                <p>WEBシステム開発</p>
                <p>スマートフォンアプリ開発</p>
              </td>
            </tr>
            <tr>
              <td class="messageFluidTd01">応募資格</td>
              <td class="messageFluidTd02">
                <p>＜未経験歓迎！＞</p>
                <p>IT業界の経験は必要ナシ（充実の研修をご用意しています）。</p>
              </td>
            </tr>
            <tr>
              <td class="messageFluidTd01">勤務地</td>
              <td class="messageFluidTd02">
                <p>東京都内または首都圏（千葉・神奈川・埼玉）</p>
              </td>
            </tr>
            <tr>
              <td class="messageFluidTd01">勤務時間</td>
              <td class="messageFluidTd02">
                <p>9:30～18:30</p>
              </td>
            </tr>
            <tr>
              <td class="messageFluidTd01">採用担当</td>
              <td class="messageFluidTd02">
                <p><a href= "mailto:recruit@deepcode.co.jp">recruit@deepcode.co.jp</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <hr class="dividingLine">
    <section>
      <div class="footer">
        <span>©2021 DeepCode Co.,Ltd. All rights reserved.</span>
        <span v-on:click="backTop" class="backTop">トップへ</span>
      </div>
    </section>
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
      imgtimer: null,
      backTopTimer: null,
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
    this.imgtimer = setInterval (() => {
       this.autoPlay ()
     }, 4000)
    },
   stop () {
     clearInterval (this.imgtimer)
     this.imgtimer = null
    },
    backTop () {
      let docTop = document.documentElement.scrollTop;
      this.backTopTimer = setInterval (() => {
        docTop = docTop-100;
        document.documentElement.scrollTop = docTop;
        //console.log(docTop)
        if (docTop<=0){
          clearInterval (this.backTopTimer)
          this.backTopTimer = null
        }
      },20)
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
@media (max-width: 767px){
  .slide_display{
    display: none;
  }
  .slide_display_phone{
    width: 100%;
    height: 100px;
    overflow: hidden;
    img{
      width:100%;
      height: 100px;
    }
  }
   .bsFluid{
     display: block;
     margin-left: 8%;
     margin-right: 3%;
   }
   .bsFluid .bsFluidright .bisImg{
     width:400px;
     height: auto;
     max-width: 100%;
   }
   .skillsFluid{
     display: block;
     .skillsFluidCont{
        margin-bottom: 15px;
     }
   }
 }
 @media ( min-width: 768px) {
  .slide_display_phone{
     display: none;
  }
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
  .skillsFluid{
     display: flex;
    .skillsFluidCont{
      flex: 1;
      align-items: center;
    }
  }
}
.bsFluidLeftCont{
  margin-top: 20px;
  p{
    text-align: left;
  }
}
.skillsFluid{
  .skillImg{
    height: 140px;
  }
  .skillName{
    text-align: center;
    margin: 10px 0 10px 0;
    font-weight: bold;
  }
  p{
    color: #999;
    text-align: center;
  }
}
.informationFluid{
  margin-left: 8%;
  margin-right: 3%;
  .informationFluidTop{
    text-align: right;
    margin:8px 0 10px 0;
  }
  .informationFluidOCont{
    margin-bottom: 10px;
    text-align: left;
  }
  .informationFluidBottom{
    text-align: center;
    font-size: 13px;
    b{
      font-weight: bold;
    }
    span{
      display: block;
      text-align: center;
    }
  }
  .informationFluidBottomLink{
    margin: 13px 0 15px 0;
    a{
      text-align: left;
      display: block;
      color: #4682B4;;
      cursor: pointer;
      text-decoration: underline;
      font-size: 13px;
      margin-bottom: 8px;
    }
  }
}
.messageFluid{
  margin-left: 8%;
  margin-right: 3%;
  .title{
    text-align: center;
    font-weight: bold;
    font-size: 22px;
  　margin: 15px 0 15px 0;
  }
  .messageFluidTable{
    margin:0 auto;
    font-size: 14px;
  }
  .messageFluidTd01{
    padding-right: 8px;
    font-weight: bold;
    vertical-align: top;
  }
  .messageFluidTd02{
    padding-left:8px;
    text-align: left;
    a{
      color: #4682B4;;
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
.footer{
  margin-left: 8%;
  margin-right: 6%;
  padding-bottom: 20px;
  display: flex;
  span{
    flex: 1;
    align-items:stretch ;
    text-align: left;
  }
  .backTop{
    text-align: right;
    color: #4682B4;;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
