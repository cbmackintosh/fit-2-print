const baseURL = `https://api.nytimes.com/svc/topstories/v2`
const apiKey = `eKrNL8riACGff1334MMBoJUGH7f5v2yl`

export const getStories = (category) => {
  return fetch(`${baseURL}/${category}.json?api-key=${apiKey}`)
  .then(res => res.json())
}