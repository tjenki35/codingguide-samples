Source samples for the public to enjoy

### Bootstrapping the package-lock.json file when you only have a package.json
`docker run -w /app -v "${PWD}:/app" node npm install`

### Building a docker image in this repo
`docker build . -t myserver --target=... -f Dockerfile.1.base`

