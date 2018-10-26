#!/usr/bin/env groovy
pipeline {
    environment{
      registry ="jayjoseph3/reactapp"
	registryCredential ='dockerhub'
    }
    agent any // {
//   agent  {
       // docker {
        //    image 'node:7-alpine' 
        //    args '-p 3001:3001' 
      //  }
  //  }
    tools{
     nodejs 'nodejs'
     }
    stages {
        stage('Build') { 
            steps {
               echo ' Your building steps'
                sh 'npm install' 
            }
        }
        stage('Test Version') {
            steps {
               echo ' Your test steps'
                sh 'node --version'
            }
       }
         stage('Build container'){
	    steps {
                echo 'build container'
                sh "docker build -t jayjoseph3/reactapp ."
            }
       }
         stage('Test'){
            steps {
                echo 'test'
        	  sh 'docker run --name jayjoseph3/reactapp -p 3001:3001'
             }
        }
         stage ('Push  docker hub'){
            steps {
		echo 'push to docker hub'
		sh " docker login --username jayjoseph3 --password Fawinam147"
		sh " docker tag  reactapp-dev jayjoseph3/reactapp:latest"
                sh " docker push jayjoseph3/reactapp-dev:latest"
               }
      }
 	 stage('Clean Up'){
       steps {
		echo 'clean up'
		sh 'docker stop jayjoseph3/reactapp'
		sh 'docker system prune -f'
               }
          }
   } 
}
