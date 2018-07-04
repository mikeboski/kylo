User Interface Project
======
This is the parent project for all UI related material.
The following submodules are included

### swagger-ui
  REST documentation using swagger

### ui-app
  This is the Spring Boot application that will run the user interface


  ###Boski notes

cd ui-app
  scp -i ~/Work/medikly/kylo/medikly-key.pem target/kylo-ui-app-0.9.0.3-SNAPSHOT.jar centos@kylo.proof-of-concepts.com:~/
cd ../swagger-ui
scp -i ~/Work/medikly/kylo/medikly-key.pem target/kylo-swagger-ui-0.9.0.3-SNAPSHOT.jar centos@kylo.proof-of-concepts.com:~/

LOCALHOST commands:
cd ui-app
  scp -P 2222 target/kylo-ui-app-0.9.0.3-SNAPSHOT.jar root@localhost:/opt/kylo/kylo-ui/lib
cd ../swagger-ui
scp -P 2222 target/kylo-swagger-ui-0.9.0.3-SNAPSHOT.jar root@localhost:/opt/kylo/kylo-ui/lib


on SERVER:(only need for remote host)

sudo mv kylo-ui-app-0.9.0.3-SNAPSHOT.jar /opt/kylo/kylo-ui/lib
sudo mv kylo-swagger-ui-0.9.0.3-SNAPSHOT.jar /opt/kylo/kylo-ui/lib
sudo service kylo-ui restart

on LOCALHOST server:
sudo service kylo-ui restart
  