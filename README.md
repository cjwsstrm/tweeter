# Tweeter Project

Tweeter is a simple, single-page Twitter clone. It was built to practice
combining the following:
- CSS
- Express and MongoDB back-end skills.
- HTML
- jQuery and AJAX front-end skills
- JS
- Node

In its current state, a user navigating to the provided address can post
messages with 140 characters or less. These messages will be saved in a
MongoDB database. The page contains basic javascript and css class changes on
events such as :hover and .slideToggle.

Moment is used to display the time since a post was made, and it is provided
as part of this repository (and therefore not listed in the dependencies).

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- express
- md5
- mongodb

## Screenshots

!["compose box shown"](https://github.com/cjwsstrm/tweeter/blob/master/docs/visibleComposeBox.png?raw=true)
!["compose box hidden"](https://github.com/cjwsstrm/tweeter/blob/master/docs/hiddenComposeBox.png?raw=true)
!["mobile example"](https://github.com/cjwsstrm/tweeter/blob/master/docs/mobileExample.png?raw=true)
