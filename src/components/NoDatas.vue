<template>
    <div class="nodatas">
        <img class="nodatas__icon" src="../assets/noDatas.png" />
        <p class="nodatas__title">No Data</p>
    </div>
</template>

<script>
export default {
  setup() {

  },
};
</script>

<style lang="scss" scoped>
@import "../style/mixin.scss";
@import "../style/variable.scss";

.nodatas {
    @include flex(column, nowrap, center, center);
    &__icon {
        width: 120px;
    }
    &__title {
        margin-top: 16px;
        font-size: 14px;
        font-family: Montserrat-Regular, Montserrat;
        font-weight: 400;
        color: $font-color2;
    }
}
</style>
