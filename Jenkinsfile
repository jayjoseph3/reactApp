pipeline {
    agent {
        docker {
            image 'node:jayjoseph3/reactapp' 
            args '-p 3001:3001' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
