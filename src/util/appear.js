//设置屏幕滚动到指定的位置显示
export default function appear(move, callback) {
  var waypoint = new Waypoint({
    element: move,
    handler: function(direction) {
      if (direction == 'down') {
        callback(true)
      } else {
        callback(false)
      }
    },
    offset: 600
  })
}
