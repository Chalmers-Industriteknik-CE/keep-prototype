<template>
  <div class="difficulty-rating">
    <div class="bar">
      <div class="item easy" :class="{active:score === 1}"></div>
      <div class="item medium" :class="{active:score === 2}"></div>
      <div class="item hard" :class="{active:score === 3}"></div>
    </div>
    <div class="labels">
      <div class="item">
        <span>Easy</span>
      </div>
      <div class="item">
        <span>Medium</span>
      </div>
      <div class="item">
        <span>Hard</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DifficultyRating",
  props: { score: Number },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";
.difficulty-rating {
  .bar {
    display: flex;
    width: 100%;
    height: 8px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: inset 0px 0px 3px #00000029;
    background: #eaeff6;
    .item {
      flex: 1;
      &:first-child {
        border-right: 1px solid #fff;
      }
      &:last-child {
        border-left: 1px solid #fff;
      }
      &.active {
        &.easy {
          background: #37be85;
        }
        &.medium {
          background: #dea54f;
        }
        &.hard {
          background: #db7062;
        }
      }
    }
  }
  .labels {
    display: flex;
    width: 100%;
    margin-top: 0.5rem;
    .item {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
