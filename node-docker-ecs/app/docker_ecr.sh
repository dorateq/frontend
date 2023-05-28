echo #Retrieve an authentication token and authenticate your Docker client to your registry.
echo .................
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 274055544780.dkr.ecr.us-east-1.amazonaws.com

echo ...................
echo #Build your Docker image using the following command.
docker build -t beta-ecr-repo .

echo .................
docker tag beta-ecr-repo:latest 274055544780.dkr.ecr.us-east-1.amazonaws.com/beta-ecr-repo:latest

echo .................
docker push 274055544780.dkr.ecr.us-east-1.amazonaws.com/beta-ecr-repo:latest
echo
