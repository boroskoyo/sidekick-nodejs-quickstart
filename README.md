<a name="readme-top"></a>

[![Sidekick][sidekick-shield]][sidekick-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/runsidekick/sidekick">
    <img src="https://4750167.fs1.hubspotusercontent-na1.net/hubfs/4750167/Sidekick%20OS%20repo/logo-1.png" alt="Logo" width="40%" height="40%">
  </a>
  </div>
<div align="center">
	<p>+</p>
  <a href="https://expressjs.com/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Logo" width="35%" height="35%">
  </a>

  <h3 align="center">Sidekick Quickstart</h3>

  <p align="center">
    Simple project to show how you can start using Sidekick Open Source in minutes
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore Sidekick »</strong></a>
	    <a href="https://medium.com/runsidekick/sidekick-open-source-live-debugger-get-started-in-5-mins-efc0845a2288"><strong>Related Article »</strong></a>
    <br />
  </p>
</div>


<div align="center">
<a href="https://www.producthunt.com/posts/sidekick-12?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sidekick&#0045;12" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=357053&theme=light" alt="Sidekick - Like&#0032;Chrome&#0032;DevTools&#0032;for&#0032;your&#0032;backend&#0032;→&#0032;now&#0032;open&#0032;source&#0033; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a> </div>

## About Sidekick



Sidekick is a live application debugger that lets you troubleshoot your applications while they keep on running.

Add dynamic logs and put non-breaking breakpoints in your running application without the need of stopping & redeploying.

Sidekick Open Source is here to allow self-hosting and make live debugging more accessible. Built for everyone who needs extra information from their running applications.

[Check out Sidekick here](https://github.com/runsidekick/sidekick)

## About the project

This project aims to show how you can start live debugging using a self-hosted Sidekick instance.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[Express.js](https://expressjs.com/)
[Socket.io](https://socket.io/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an end-to-end guide to show you how you can start using Sidekick Open Source.

### Prerequisites

* Docker
```sh
  Make sure docker daemon is running.
  ```
* npm
  ```sh
  npm install npm@latest -g
  ```
* Visual Studio Code 
(Note: Sidekick has many other clients. Check out our headless options if you don't want to install a new IDE : https://docs.runsidekick.com/headless/ )

### Installation

#### Running Sidekick with default settings
1. Clone the Sidekick repo
   ```sh
   git clone https://github.com/runsidekick/sidekick.git
   ```
2. Go to the docker folder under the project
3. Run command `docker-compose up -d` and wait for a minute
    - App is ready

#### Running Quickstart Project
1. Clone the Quickstar application repo
   ```sh
   git clone https://github.com/boroskoyo/sidekick-nodejs-quickstart.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run!
   ```sh
   npm start
   ```

Now you have your self-hosted Sidekick instance and Quickstart application up and running.

It is time to use a client to put tracepoints and collect data from Quickstart application.
#### Starting to debug
1. Install Sidekick Extension form the VSCode marketplace:
![install sidekick extension](https://2473979888-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FkvYTaBQZAeaiqNi0ga4I%2Fuploads%2FQd7vVh1fSswU1BLBwRwB%2FScreen%20Shot%202022-05-26%20at%2015.38.47.png?alt=media&token=cb97f5bb-f86a-48c0-a49c-d18093ee1342)

2. Open the folder of Quickstart application (this repo)

3. .vscode folder in this repo should set the config for you. If you have any issues just check the instructions here: [https://docs.runsidekick.com/plugins/visual-studio-code-extension-python-and-node.js/self-hosted-settings](https://docs.runsidekick.com/plugins/visual-studio-code-extension-python-and-node.js/self-hosted-settings)

4. Right click on 10th line on app/routes/index.js and put your first tracepoint. Check docs for extra info: https://docs.runsidekick.com/plugins/visual-studio-code-extension-python-and-node.js/tracepoints-and-logpoints

5. Visit http://localhost:3000 and use Quickstart application.

6. Observe your collected trace events at VSCode Sidekick: Trace Events panel!

Check out docs for more: https://docs.runsidekick.com/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this repo to discover how you can benefit from Sidekick Open Source.

_For more examples, please refer to the [Documentation](https://docs.runsidekick.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Barış Kaya - [@boroskoyo](https://twitter.com/boroskoyo) - baris@thundra.io

Sidekick Repo: [https://github.com/runsidekick/sidekick](https://github.com/runsidekick/sidekick)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[sidekick-shield]: https://img.shields.io/badge/USE-SIDEKICK-purple?style=for-the-badge
[sidekick-url]: https://github.com/RunSidekick/sidekick
