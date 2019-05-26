// components/main-menu/main-menu.js
const app = getApp()

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
    opened: false,
    styles: {
      icon: `top:${app.globalData.statusBarHeight + 2}px`,
      icon_opened: `top:${app.globalData.statusBarHeight + 12}px`,
      menu: `padding-top:${app.globalData.statusBarHeight + 80}px`
    },
    prefix: 'op-',
    items: [{
      name: 'New Task',
      icon: 'add'
    }, {
      name: 'Manage Tasks',
      icon: 'edit'
    }, {
      name: 'User Center',
      icon: 'user'
    }, {
      name: 'About',
      icon: 'about',
      url: '../about/about'
    }],
  },

  /**
   * Component methods
   */
  methods: {
    toggle () {
      this.setData({
        opened: !this.data.opened
      })
    },
    onNavigate (e) {
      console.log(e)
      // setTimeout(()=>{
        this.setData({
          opened: false
        })
      // },350)
      
    }
  }
})