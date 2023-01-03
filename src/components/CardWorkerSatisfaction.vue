<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Worker Satisfaction</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div v-if="!productData.d13">No data available</div>
        <div v-for="factory  in productData.d13" :key="factory.d13_factoryId" class="factory">
          <p class="text-body">{{factory.d13_factoryName}}</p>
          <div class="rating">
            <div class>
              <figure class="image">
                <img
                  src="@/assets/smileys/smiley_1.svg"
                  svg-inline
                  class="smiley"
                  :class="{smiley:true,active:factory.d13_workerSatisfactionScore === 1}"
                  alt="Rating 1"
                />
              </figure>
            </div>

            <div class>
              <figure class="image">
                <img
                  src="@/assets/smileys/smiley_2.svg"
                  svg-inline
                  class="smiley"
                  :class="{smiley:true,active:factory.d13_workerSatisfactionScore === 2}"
                  alt="Rating 2"
                />
              </figure>
            </div>

            <div class>
              <figure class="image">
                <img
                  src="@/assets/smileys/smiley_3.svg"
                  svg-inline
                  class="smiley"
                  :class="{smiley:true,active:factory.d13_workerSatisfactionScore === 3}"
                  alt="Rating 3"
                />
              </figure>
            </div>

            <div class>
              <figure class="image">
                <img
                  src="@/assets/smileys/smiley_4.svg"
                  svg-inline
                  :class="{smiley:true,active:factory.d13_workerSatisfactionScore === 4}"
                  class="smiley"
                  alt="Rating 4"
                />
              </figure>
            </div>

            <div class>
              <figure class="image">
                <img
                  src="@/assets/smileys/smiley_5.svg"
                  svg-inline
                  class="smiley"
                  :class="{smiley:true,active:factory.d13_workerSatisfactionScore === 5}"
                  alt="Rating 5"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWorkerSatisfaction",
  props: { productData: Object },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

div.icon {
  height: auto;
  margin: 0 0.25rem;
  flex: 1;
}
.content figure {
  margin: 0;
}
.content figure img {
  margin: auto;
  width: 100%;
  height: auto;
}
.factory {
  margin-top: 0.5rem;
  &:first-child {
    margin-top: 0;
  }
}
.smiley {
  background: #eaeff6;
  padding: 4px;
  border-radius: 57px;
  height: 48px;
  width: 48px;
  &.active {
    background: linear-gradient(90deg, #30ac78 -3.35%, #3bc98d 100%);
    path {
      fill: #fff;
    }
  }
}
.rating {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
}
img {
  -webkit-filter: 0 12.5px 6.3px -60px rgba(0, 0, 0, 0.025),
    0 100px 50px -60px rgba(0, 0, 0, 0.05);
  filter: 0 12.5px 6.3px -60px rgba(0, 0, 0, 0.025),
    0 100px 50px -60px rgba(0, 0, 0, 0.05);
}

.content p:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
