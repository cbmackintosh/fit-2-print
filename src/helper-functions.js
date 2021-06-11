export const compareDates = (now, articleDate) => {
  if (now.getDate() === articleDate.getDate() && now.getHours() === articleDate.getHours() && now.getMinutes() === articleDate.getMinutes()) {
    return 'Now'
  } else if (now.getDate() === articleDate.getDate() && now.getHours() === articleDate.getHours()) {
    return `${now.getMinutes() - articleDate.getMinutes()} minute${now.getMinutes() - articleDate.getMinutes() > 1 ? 's' : ''} ago`
  } else if (now.getDate() === articleDate.getDate() && now.getHours() - articleDate.getHours() < 12) {
    return `${now.getHours() - articleDate.getHours()} hour${now.getHours() - articleDate.getHours() > 1 ? 's' : ''} ago`
  } else if (now.getDate() === articleDate.getDate() && now.getHours() - articleDate.getHours() > 12) {
    return 'Today'
  } else if (now.getDate() - articleDate.getDate() === 1) {
    return "Yesterday"
  } else {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return week[articleDate.getDay()]
  }
}

export const newsCategories = [
  {code: 'arts', proper: 'Arts'},
  {code: 'automobiles', proper: 'Automobiles'},
  {code: 'books', proper: 'Books'},
  {code: 'business', proper: 'Business'},
  {code: 'fahsion', proper: 'Fashion'},
  {code: 'food', proper: 'Food'},
  {code: 'health', proper: 'Health'},
  {code: 'insider', proper: 'Insider'},
  {code: 'magazine', proper: 'Magazine'},
  {code: 'movies', proper: 'Movies'},
  {code: 'nyregion', proper: 'New York Region'},
  {code: 'obituaries', proper: 'Obituaries'},
  {code: 'opinion', proper: 'Opinion'},
  {code: 'politics', proper: 'Politics'},
  {code: 'realestate', proper: 'Real Estate'},
  {code: 'science', proper: 'Science'},
  {code: 'sports', proper: 'Sports'},
  {code: 'sundayreview', proper: 'Sunday Review'},
  {code: 'technology', proper: 'Technology'},
  {code: 'theater', proper: 'Theater'},
  {code: 't-magazine', proper: 'T-Magazine'},
  {code: 'travel', proper: 'Travel'},
  {code: 'upshot', proper: 'Upshot'},
  {code: 'us', proper: 'U.S.'},
  {code: 'world', proper: 'World'}
];