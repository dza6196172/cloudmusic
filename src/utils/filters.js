const msgdate = dateval => {
  let historydate = new Date(dateval)
  let currentdate = new Date()
  if(historydate.getFullYear()<currentdate.getFullYear()){
    return historydate.getFullYear()+'年'+String(historydate.getMonth()+1).padStart(2,'0')+'月'+String(historydate.getDate()).padStart(2,'0')+'日'
  }else if(historydate.getDate()+1==currentdate.getDate()){
    return '昨天 '+String(historydate.getHours()).padStart(2,'0')+':'+String(historydate.getMinutes()).padStart(2,'0')
  }else if(historydate.getDate()==currentdate.getDate()){
    if((parseInt((currentdate.getTime() - historydate.getTime())/1000/60/60)<1)){
      if(((currentdate.getTime() - historydate.getTime())/1000/60)<1){
        return '刚刚'
      }else{
        return parseInt((currentdate.getTime() - historydate.getTime())/1000/60)+'分钟前'
      }
    }else{
      return parseInt((currentdate.getTime() - historydate.getTime())/1000/60/60)+'小时前'
    }
  }else {
    return String(historydate.getMonth()+1).padStart(2,'0')+'月'+String(historydate.getDate()).padStart(2,'0')+'日'
  }
}

const musicdt = val => {
  let minutes = parseInt(val/1000/60)
  let seconds = parseInt(val/1000%60)
  return minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0')
}

const date = val => {
  let currentdate = new Date(val)
  return currentdate.getFullYear()+'-'+(currentdate.getMonth()+1).toString().padStart(2,'0')+'-'+(currentdate.getDay()).toString().padStart(2,'0')
}


export { msgdate , musicdt , date};