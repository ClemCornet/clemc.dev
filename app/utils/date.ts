import { format as formatFns } from 'date-fns'
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
