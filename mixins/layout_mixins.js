export default {
  props: {
    justifyContent: {
      type: String,
      default: 'flex-start',
    },
    alignItems: {
      type: String,
      default: 'flex-start',
    },
    flexWrap: {
      type: String,
      default: 'nowrap',
    },
    gap: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      style: {
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        flexWrap: this.flexWrap,
        gap: this.gap + 'px',
      },
    }
  },
}
