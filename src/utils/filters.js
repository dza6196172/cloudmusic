const date = dateval => {
  let historydate = new Date(dateval)
  let currentdate = new Date()
  if(historydate.getFullYear()<currentdate.getFullYear()){
    return historydate.getFullYear()+'年'+String(historydate.getMonth()).padStart(2,'0')+'月'+String(historydate.getDate()).padStart(2,'0')+'日'
  }else if(historydate.getDate()+1==currentdate.getDate()){
    return '昨天 '+String(historydate.getHours()).padStart(2,'0')+':'+String(historydate.getMinutes()).padStart(2,'0')
  }else{
    return String(historydate.getMonth()).padStart(2,'0')+'月'+String(historydate.getDate()).padStart(2,'0')+'日'
  }
}


export { date};