export const compareDates = (now, articleDate) => {
  if (now.getDate() === articleDate.getDate() && now.getHours() === articleDate.getHours()) {
    return `${now.getMinutes() - articleDate.getMinutes()} minutes ago`
  } else if (now.getDate() === articleDate.getDate()) {
    return `${now.getHours() - articleDate.getHours()} hours ago`
  } else if (now.getDate() - articleDate.getDate() === 1) {
    return "Yesterday"
  } else {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return week[articleDate.getDay()]
  }
}