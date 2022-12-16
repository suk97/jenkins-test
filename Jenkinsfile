pipeline {
    agent any
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
                    sh "yarn install"
                    sh "CI=false yarn build"
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