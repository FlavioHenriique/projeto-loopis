
sudo docker kill $(sudo docker ps -aq --filter name=loopisdb)
sudo docker rm -f $(sudo docker ps -aq --filter name=loopisdb)

