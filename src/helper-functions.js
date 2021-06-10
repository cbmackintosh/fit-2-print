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

export const newsCategories = [
  {'arts': 'Arts'},
  {'automobiles': 'Automobiles'},
  {'books': 'Books'},
  {'business': 'Business'},
  {'fahsion': 'Fashion'},
  {'food': 'Food'},
  {'health': 'Health'},
  {'insider': 'Insider'},
  {'magazine': 'Magazine'},
  {'movies': 'Movies'},
  {'nyregion': 'New York Region'},
  {'obituaries': 'Obituaries'},
  {'opinion': 'Opinion'},
  {'politics': 'Politics'},
  {'realestate': 'Real Estate'},
  {'science': 'Science'},
  {'sports': 'Sports'},
  {'sundayreview': 'Sunday Review'},
  {'technology': 'Technology'},
  {'theater': 'Theater'},
  {'t-magazine': 'T-Magazine'},
  {'travel': 'Travel'},
  {'upshot': 'Upshot'},
  {'us': 'U.S.'},
  {'world': 'World'}
];