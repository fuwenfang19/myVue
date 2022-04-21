<template>
  <div class="deepCodeHome">
    <topNav></topNav>
    <section>
      <div>{{msg}}</div>
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
  name: 'HelloDeepCode',
  data () {
  },
  computed: mapState(['msg']),
  components: {
    topNav
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../style/mixin';
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
