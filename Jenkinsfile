pipeline {
    agent {
        docker {
            image 'node:7-alpine' 
            args '-p 3001:3001' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
     
     
        stage('Test') {
            steps {
                sh 'node --version'
            }
       }
   } 
}
