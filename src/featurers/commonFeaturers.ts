import { MONTHS } from "./commonVariables"
import {useHistory} from 'react-router-dom'

type IParseDateType = 'dd.mm.yy' | 'dd month, time' 

export const parseDate = (d: string, type: IParseDateType) => {
  const date = new Date(Date.parse(d))
  let dd:string|number = date.getDate()
  let mm:string|number = date.getMonth()
  let yy = date.getFullYear()
  let h = date.getHours()
  let m = date.getMinutes()
  
  switch(type) {
    case 'dd month, time':
      return `${dd} ${MONTHS[mm]}, ${h}:${m}`
    case 'dd.mm.yy':
      if(dd < 10) dd = '0' + dd
      mm+=1
      if(mm<10) mm = '0' + mm
      return `${dd}.${mm}.${yy} г.`
  } 
}

