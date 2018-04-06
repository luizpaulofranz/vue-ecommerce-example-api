This folder contains the docker volumes for docker mongoDb.
docker run -itd --name vuestore -p27017:27017 -v mongoDocker:/data/db mongo

The json files are sample datas to our store.
