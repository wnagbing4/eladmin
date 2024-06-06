<template>
  <div class="FourBoxes-style">
    <div class="user">
      <div class="svg-a">
        <!-- <svg-icon
          class="a"
          style="font-size: 48px"
          name="user"
          color="#40c9c6"
        ></svg-icon> -->
        <img src="@/assets/image/image.png" alt="" style="margin-top:10px">
      </div>
      <div class="title-a">
       
        <p>New Visits</p>
        <p>23</p>
        <!-- <el-button type="primary">Primary</el-button> -->
      </div>
    </div>
    <div class="user">
      <div class="svg-b">
        <!-- <svg-icon
          class="b"
          style="font-size: 48px"
          name="xiaoxi"
          color="#36a3f7"
        ></svg-icon> -->
        <img src="@/assets/image/1.png" alt="" style="margin-top:10px">
      </div>

      <div class="title-a">
        <p>Messages</p>
        <p>23</p>
      </div>
    </div>
    <div class="user">
      <div class="svg-c">
        <!-- <svg-icon
          class="c"
          style="font-size: 48px"
          name="qian-"
          color="#f4516c"
        ></svg-icon> -->
        <img src="@/assets/image/2.png" alt="" >
      </div>
      <div class="title-a">
        <p>purchases</p>
        <p>23</p>
      </div>
    </div>
    <div class="user">
      <div class="svg-d">
        <!-- <svg-icon
          class="d"
          style="font-size: 48px"
          name="gouwuche"
          color="#34bfa3"
        ></svg-icon> -->
        <img src="@/assets/image/3.png" alt="" style="margin-top:2px">
      </div>
      <div class="title-a">
        <p>Shoppings</p>
        <p>23</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.FourBoxes-style {
  width: 100%;
  display: flex;
  //   justify-content: start;
  justify-content: space-between;
  margin-bottom: 20px;

  .user {
    align-items: center;
    justify-content: space-between;
    display: flex;
    background-color: #fff !important;
    height: 108px !important;
    .svg-a {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      margin: 5px 0 0 14px;
      //   padding: 16px;
      box-sizing: border-box;
    }
    .svg-b {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      margin: 5px 0 0 14px;
      //   padding: 16px;
      box-sizing: border-box;
    }
    .svg-c {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      margin: 5px 0 0 14px;
      //   padding: 16px;
      box-sizing: border-box;
    }
    .svg-d {
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      margin: 5px 0 0 14px;
      //   padding: 16px;
      box-sizing: border-box;
    }

    .title-a {
      margin: 26px 26px 26px 0;
      // overflow: hidden;
    }
    &:hover .svg-a {
      background-color: #40c9c6;
      border-radius: 6px;
      svg {
        color: #fff !important;
      }
    }
    &:hover .svg-b {
      background-color: #36a3f7;
      border-radius: 6px;
      svg {
        color: #fff !important;
      }
    }
    &:hover .svg-c {
      border-radius: 6px;
      background-color: #f4516c;
      svg {
        color: #fff !important;
      }
    }
    &:hover .svg-d {
      border-radius: 6px;
      background-color: #34bfa3;
      svg {
        color: #fff !important;
      }
    }
  }
}
.FourBoxes-style .user {
  width: 23%;
  background-color: #fff;

  margin-bottom: 20px;
  height: 6.75rem;
}
@media screen and (max-width: 1200px) {
  /* 屏幕宽度小于等于800px时，三个li排一行 */
  .FourBoxes-style {
    display: flex;
    // justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 20px;
    width: 100%;
  }
  .FourBoxes-style .user {
    width: 49%;
  }
}

// @media screen and (max-width: 800px) {
//   /* 屏幕宽度小于等于800px时，三个li排一行 */
//   .FourBoxes-style {
//     width: 100%;
//   }
//   .FourBoxes-style div {
//     width: 43%;
//   }
// }
</style>
