<template>
  <div id="rezervace">
    <iframe
      title="rezervace"
      :src="this.penziony"
      scrolling="yes"
      class="py-8"
      frameborder="0"
      width="100%"
      height="2000"
      name="previo-booking-iframe"
      id="previo-booking-iframe"
      allowTransparency="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    /// '4889'
    hotelId: Number,
    /// '456-455667-456'
    roomsId: String,
  },
  computed: {
    penziony() {
      return (
        "https://booking.previo.cz/?hotId=" +
        this.hotelId +
        "&?showRoomType=" +
        this.roomsId +
        "&?lang=cs"
      );
    },
  },
};
</script>

<style scoped>
</style>