<template>
  <div class="timeline-item">
    <div class="timeline-marker is-32x32"></div>
    <div class="timeline-content">
      <div class="columns">
        <div class="column">
          <p class="event text-body-l has-text-weight-mediium">{{type}}</p>
          <p class="date text-uppercase date">{{ new Date(date)| date('dd MMMM, yyyy') }}</p>
        </div>
        <div class="column">
          <div class="media">
            <div class="media-content">
              <p class="text-body has-text-weight-medium">{{label}}</p>
              <p class="text-body-light">{{description}}</p>
            </div>
            <div class="media-right">
              <figure class="image is-48x48 logo-image">
                <img :src="image" />
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
  name: "TimelineItem",
  props: {
    type: String,
    date: String,
    label: String,
    description: String,
    image: String,
  },
  methods: {
    getImageUrl(imagePath) {
      return require(`@/assets/${imagePath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.timeline-content {
  width: 100%;
}

p.date {
  text-align: right;
}

div.media-right {
  margin-right: 0.75rem;
  border-radius: 1rem;
  box-shadow: 0 0px 1px rgba(0, 0, 0, 0.08), 0 0px 8px rgba(0, 0, 0, 0.16);
}

figure.image img {
  border-radius: 1rem;
}
.timeline {
  .timeline-item {
    &:last-child:before {
      height: 44%;
    }
    .timeline-marker {
      top: 2rem;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
