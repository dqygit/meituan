function alterStyle() {
  if (document.querySelector('.el-tabs__header')) {
    document.querySelector('.el-tabs__header').style.backgroundColor = 'white'
    document.querySelector('.el-tabs__header').style.boxShadow = "0 2px 12px 0 rgba(0, 0, 0, 0.1)"
  }

  document.querySelectorAll('.el-tabs__item').forEach(item => {
    item.style.color = "#000"
    item.onmouseenter = function() {
      this.style.color = "#000"
    }
  })
}

function noChnage() {
  if (document.querySelector('.el-tabs__header') != null) {
    document.querySelector('.el-tabs__header').style.backgroundColor = ''
    document.querySelector('.el-tabs__header').style.boxShadow = ""
  }

  document.querySelectorAll('.el-tabs__item').forEach(item => {
    item.style.color = "#fff"
    item.onmouseenter = function() {
      this.style.color = ""
    }
  })
}

export default function changeStyle(path) {
  if (path != 'home') {
    alterStyle()
  }
  if (path === 'home' && document.documentElement.scrollTop === 0) {

    noChnage()
  }
  document.onscroll = function() {

    if ((document.documentElement.scrollTop != 0 && path === 'home')) {
      alterStyle()
    } else if (path != 'home') {
      alterStyle()
    } else {
      noChnage()
    }

    if (document.documentElement.scrollTop == 0) {
      console.log("enter1")
    }
  }
}