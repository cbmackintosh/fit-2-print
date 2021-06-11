# Fit-2-Print

<img src="https://img.shields.io/badge/LinkedIn-cameron--mackintosh-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>
<img src="https://img.shields.io/badge/Github-cbmackintosh-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>

## ASTRACT:

Fit-2-Print is a simple news app that consumes the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). The app displays a list of the top 55-60 stories currently on the New York Times homepage. Users can click/tap on an article thumbnail to view more details on that article, including image caption, publication time, author, summary text, content tags and a button linking to the full story on the New York Times site. From the Categories menu, users can select a specific news category to view a list of stories/articles only under that category.

This project was a requirement for my final quarter as a frontend engineering student at the Turing School of Software and Design. The goal of the assignment was to simulate a take-home technical challenge that students might encounter during the job search. We were given the NYT API along with a set of open ended instructions and asked to create a simple application. Total suggested work time on this project was 6 hours. <a href="https://github.com/turingschool-examples/mod4-tech-challenges/blob/main/take-homes/fe-take-home.md">More info can be found here</a>

One of my goals for this application was to focus on mobile design first in order to facilitate responsiveness at later stages of development. In my experience, starting with a desktop view and then trying to squeeze everything together later on produces innumerable design complications.

## SCREENSHOTS:

|                     | HOME          | ARTICLE DETAILS | CATEGORY MENU |
| ------------------  | ------------- | -------------- | ------------- | 
| Design Inspiration: The Associated Press news app  | ![IMG_4823](https://user-images.githubusercontent.com/72054706/121571551-69cf9080-c9e0-11eb-9719-cd5498121842.PNG) | ![IMG_4824](https://user-images.githubusercontent.com/72054706/121571679-8f5c9a00-c9e0-11eb-8442-4ca3e9a08a14.PNG)  | ![IMG_4825](https://user-images.githubusercontent.com/72054706/121571738-9e434c80-c9e0-11eb-94a3-5a3615b273fe.PNG)       |
| Wireframes          | ![Screen Shot 2021-06-10 at 11 21 34 AM](https://user-images.githubusercontent.com/72054706/121571957-e6626f00-c9e0-11eb-90f3-69e29a7da1de.png)  | ![Screen Shot 2021-06-10 at 11 21 50 AM](https://user-images.githubusercontent.com/72054706/121571996-f0846d80-c9e0-11eb-8585-8526431d7ed1.png)  | ![Screen Shot 2021-06-10 at 11 21 42 AM](https://user-images.githubusercontent.com/72054706/121572038-f9753f00-c9e0-11eb-8852-167b35c58f9c.png)       |
| Fit-2-Print         | ![Screen Shot 2021-06-10 at 11 08 07 AM](https://user-images.githubusercontent.com/72054706/121572120-0db93c00-c9e1-11eb-8e4c-a7dde8182a40.png) | ![Screen Shot 2021-06-10 at 11 08 19 AM](https://user-images.githubusercontent.com/72054706/121572149-17db3a80-c9e1-11eb-880d-7236977db282.png)  | ![Screen Shot 2021-06-10 at 11 08 32 AM](https://user-images.githubusercontent.com/72054706/121572211-26295680-c9e1-11eb-87fc-7dcd7c245c9f.png) |

## INSTALLATION INSTRUCTIONS

* Clone this repository with `git clone git@github.com:cbmackintosh/fit-2-print.git`
* `cd fit-2-print` into the directory
* Run `npm install`
* Run `npm start` to run the application locally

## TECHNOLOGIES USED

* ![React](https://camo.githubusercontent.com/4e4a3b5c3e9c00501ec866e2f2466c5a6032f838aca5f2cf3b14450e39e8a2f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742532302d2532333230323332612e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642)
* ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)
* ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## TESTING INSTRUCTIONS

* Clone down this repo, cd into the directory and then install Cypress with `npm install cypress`
* The tests can be run from the command line using `npm run cy:run`
* Alternatively, you can run `npx cypress open` to access the test suite through the Cypress UI.
