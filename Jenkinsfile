pipeline {
    agent any
    tools {nodejs "nodejs"} // npm 명령어 사용을 위한 nodejs
    stages {
        stage('prepare') {
            steps {
                git url: 'https://github.com/Laboratory-Information-System-Project/gatewayService.git',
                    branch: 'develop',
                    credentialsId: 'data-service'
                    
            }
        }
        stage('build') {
            steps {
                    sh 'ls -al'
                    sh "npm install"
                    sh "CI=false npm run build"
            }
        }
         stage('deploy') {
            steps{
                    dir('myapp'){
                        sh 'ls -al'
                        sh "aws s3 sync ./build s3://lis-front-deploy-bucket --delete --profile default"
                        echo 'deploy done.'   
                }
            }
        }  
    }
}