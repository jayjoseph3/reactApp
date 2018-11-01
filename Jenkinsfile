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
		sh 'docker -v'
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
                stage('Push image'){
		echo 'push image to azr'
                sh 'docker login  myjoeacr.azurecr.io -u myJoeAcr -p ${ACR_PASSWORD}'
		sh 'docker tag react-joe-demo myjoeacr.azurecr.io/bae-joe-demo:v5' 
		sh 'docker push myjoeacr.azurecr.io/bae-joe-demo:v5'
		}
                stage('k8s'){
		echo 'test kubectl')
		sh 'kubectl get pods' 
  //            } 
        }

//catch (err){
//	throw err
//	}
}
