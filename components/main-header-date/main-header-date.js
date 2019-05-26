// components/main-header-date/main-header-date.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {
    today: ''
  },

  /**
   * Component methods
   */
  methods: {
    getToday() {
      let date = new Date()
      return `${date.formatDate("m/d")} ${date.getWeekday()}`
    },
    handler() {
      this.setData({
        today: this.getToday()
      })
      setTimeout(() => this.handler(), 1000)
    }
  },

  attached() {
    // Update the main displaying time.
    this.handler()
  }
})