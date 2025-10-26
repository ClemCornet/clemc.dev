import { format as formatFns, getHours } from 'date-fns'
import { TZDate } from '@date-fns/tz'

export const formatDate = (date: Date | string, format = 'do MMM, yyy') => {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  return formatFns(date, format)
}

export const getCurrentTimeInTimeZone = (timeZone: string, format = 'h:mm a') => {
  const tzDate = new TZDate(new Date(), timeZone)
  return formatFns(tzDate, format)
}

export const getDateInTimeZone = (timeZone: string) => {
  return new TZDate(new Date(), timeZone)
}

export const getDayPeriod = (date: Date) => {
  const hours = getHours(date)

  if (hours >= 6 && hours < 12) {
    return 'morning'
  }
  else if (hours >= 12 && hours < 18) {
    return 'afternoon'
  }
  else {
    return 'night'
  }
}
