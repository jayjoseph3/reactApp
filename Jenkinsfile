node {
//	try{
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
           //   sh 'az acr login --name=myJoeAcr '
              //  sh 'docker login ${ACR_LOGINSERVER} -u ${ACR_ID} -p ${ACR_PASSWORD}'
//                sh 'docker login ${ACR_LOGINSERVER} -u ${ACR_ID} --password-stdin ${ACR_PASSWORD}'
		sh 'docker tag react-joe-demo myJoeAcr.azurecr.io/bae-demo:v1' 
//		sh 'docker push myJoeAcr.azurecr.io/bae-demo:v1'
		}
               
        }

//catch (err){
//	throw err
//	}
}
