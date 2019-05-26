const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  // return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  return [year, month, day].map(formatNumber).join('/')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 还需要处理跨日子的情况
Date.prototype.formatDate = function(formatString){
  const mdl = {
    "y+": this.getFullYear(),
    "m+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "i+": this.getMinutes(),
    "s+": this.getSeconds()
  }

  for(let i of Object.keys(mdl)){
    let reg = new RegExp(`(${i})`);
    formatString = formatString.replace(reg, formatNumber(mdl[i]))
  }

  return formatString;
}

Date.prototype.getWeekday = function(weekdaysArray){
  const weekMdl = weekdaysArray || ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
    today = this.getDay()
  
  return weekMdl[today]
}

module.exports = {
  formatTime: formatTime
}
