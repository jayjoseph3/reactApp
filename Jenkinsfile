node {
//	try{
                sh 'rm ~/.dockercfg||true'
        	sh 'rm ~/.docker/config.json||true'
		stage('Checkout') {
			checkout scm
		}
		stage('Environment'){
		sh 'git --version'
		echo "Branch: ${env.BRANCH_NAME}"
//		sh 'docker -v'
		sh 'printenv'
		}
		stage('Deploy'){
		if(env.BRANCH_NAME == 'master'){
//ok		sh 'docker build -t react-joe-demo .'
//		sh 'docker tag react-bae-demo localhost:3001/react-app'
//		sh 'docker push localhost:3001/react-app'
//		sh 'docker rmi -f react-app localhost:3001/react-app'
		}
//		stage('Test'){
//		echo 'test'
//		sh 'docker run  -p 3001:3001 -d react-joe-demo'
//		}
              //  stage('Clean up'){
	//	echo 'clean'
	//	sh 'docker stop react-joe-demo '
	//	sh 'docker rmi react-joe-demo -f'
         //	}

                stage(' login'){
		echo 'login to azr'
                sh 'docker login  myjoeacr.azurecr.io -u myJoeAcr -p ${ACR_PASSWORD}'
		sh 'docker -v'
               }

                stage('build'){
		echo 'build image in azr'
		//sh 'docker build -t react-joe-demo .'
		sh 'docker build -t  myjoeacr.azurecr.io/react-joe-demo1 .'
                }

                stage('push to reg acr'){
		echo 'push image to azr'
        	sh 'docker push  myjoeacr.azurecr.io/react-joe-demo1'
		sh 'docker tag  myjoeacr.azurecr.io/react-joe-demo1 myjoeacr.azurecr.io/bae-joe-demo1:latest' 
        	sh 'docker push myjoeacr.azurecr.io/bae-joe-demo1:latest'
		}
                stage('remove vm'){
		echo 'remove image '
		sh 'docker rmi -f myjoeacr.azurecr.io/react-joe-demo1'
                }
                stage(' deploy to docker'){
		echo ' Deploy to docker '
		sh 'docker pull myjoeacr.azurecr.io/react-joe-demo1' 
		sh 'docker run  -p 3001:3001 -d  myjoeacr.azurecr.io/react-joe-demo1'
              } 
              //  stage(' deploy to k8s'){
        }

//catch (err){
//	throw err
//	}
}
