pipeline {
    agent any
    tools {
        nodejs "node14"
        git "git"
    }
    stages {
        stage('prepare') {
            steps {
                echo 'prepare'
                 git branch: "${BRANCH}", credentialsId: "jenkins-git-credential", url: 'https://github.com/Laboratory-Information-System-Project/lis-front.git'
                 sh  'ls -al'
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