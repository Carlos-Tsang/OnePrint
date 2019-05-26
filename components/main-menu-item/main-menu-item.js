// components/main-menu-item/main-menu-item.js
Component({
  /**
   * Component properties
   */
  properties: {
    opened: Boolean,
    prefix: String,
    count: Number,
    info: Object
  },

  /**
   * Component initial data
   */
  data: {
    initPos: '',
    inkPos: '',
    flag: false,
  },

  /**
   * Component methods
   */
  methods: {
    handleTap(e) {
      console.log(e);

      this.setData({
        inkPos: `top:${e.detail.y - e.currentTarget.offsetTop}px;left:${e.detail.x}px`,
        flag: true
      })
      setTimeout(() => {
        this.setData({
          inkPos: '',
          flag: false
        })
      }, 350)

      this.triggerEvent('navigate')
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        initPos: `transform: translateY(${(this.properties.count + 1) * -50}px)`
      })
    }
  }
})