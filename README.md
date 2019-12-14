# ClubHouse IO App
An Application for using web app [`app.clubhouse.io`](https://app.clubhouse.org) as an application on Mac, Windows & Linux. [Clubhouse.io](https://app.clubhouse.org) is a website that allows one to perform software management.Clubhouse is the first project management platform for software development that brings everyone on every team together to build better products.
Clubhouse is simple enough that anyone can use it, and flexible enough so software teams can keep their processes lightweight and productive.
 
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You`ll need :
 * Node js
* Electron js

[Nodejs](https://www.npmjs.com/get-npm)

[Electron js](https://electronjs.org/)
```
npm install electron@latest
```

### Installing

Once installation of npm is finished
, Do the following
```
npm start #starts the electron CH application with the terminal running as a background task.
```
Packaging the application

```
npm run create_mac # MAC OSX
npm run create_pc_64 # Windows x64 systems
npm run create_pc_32 # Windows x32 systems
npm run create_linux # Linux 
```
Respective folders will be created inside folder 'release'


## Deployment

After packaging this to its respective platform, it can be used like any other application.

## Built With

* [VS code](https://code.visualstudio.com/) - IDE
* [npm](https://www.npmjs.com/get-npm) - Node Package Manager
* [Electron](https://electron.org) - JS framework for cross platform application

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use `git` For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Nabeel Aron**.

## License

This project is not licensed under any software licensing and therefore has no copyright restrictions.
All copyrights for Clubhouse.io is maintained by [ClubHouse](https://app.cluchouse.io).

## Acknowledgments

* [ClubHouse](https://app.cluchouse.io)
* Cross platform application
* Electron js

