pipeline {
    agent any 	// 사용 가능한 에이전트에서 이 파이프라인 또는 해당 단계를 실행

    stages {
        stage('Prepare') {
            steps {
                git url: 'https://github.com/carrybomb/LIS.git',
                    branch: 'main',
                    credentialsId: '3282fc49-a981-4f31-aec7-cc80b9e02577'
            }

            post {
                success {
                    sh 'echo "Successfully Cloned Repository"'
                }
                failure {
                    sh 'echo "Fail Cloned Repository"'
                }
            }
        }

        stage('Build') {
            steps {
            	// gradlew이 있어야됨. git clone해서 project를 가져옴.
                sh 'chmod +x gradlew'
                sh  './gradlew clean build'


                sh 'ls -al ./build'
            }
            post {
                success {
                    echo 'gradle build success'
                }

                failure {
                    echo 'gradle build failed'
                }
            }
        }
        stage('Test') {
            steps {
                echo  '테스트 단계와 관련된 몇 가지 단계를 수행합니다.'
            }
        }
//         stage('Docker Rm') {
//             steps {
//                 sh 'echo "Docker Rm Start"'
//                 sh """
//                 docker stop deploy-test:0.0.1
//                 docker rm -f deploy-test:0.0.1
//                 docker rmi -f suk97/deploy-test:0.0.1
//                 """
//             }
//
//             post {
//                 success {
//                     sh 'echo "Docker Rm Success"'
//                 }
//                 failure {
//                     sh 'echo "Docker Rm Fail"'
//                 }
//             }
//         }

        stage('Dockerizing'){
            steps{
                sh 'echo " Image Bulid Start"'
                sh 'docker build . -t suk97/deploy'
            }
            post {
                success {
                    sh 'echo "Bulid Docker Image Success"'
                }

                failure {
                    sh 'echo "Bulid Docker Image Fail"'
                }
            }
        }

        stage('push'){
            steps {
                echo 'Push Docker'
                    script {
                        docker.withRegistry('https://registry.hub.docker.com', 'docker'){
                            sh 'docker login -u "suk97" -p "ehddnr0511@" docker.io'
                            sh 'docker push suk97/deploy'
                        }
                    }
            }
        }

//
//         stage('Deploy') {
//             steps {
//                 sh 'docker run --name deploy-test2 -d -p 8081:8081 suk97/deploy'
//             }
//
//             post {
//                 success {
//                     echo 'success'
//                 }
//
//                 failure {
//                     echo 'failed'
//                 }
//             }
//         }

         stage('Run Container on SSH Dev Server'){
                    steps{
                        echo 'SSH'

                        sshagent (credentials: ['35.78.53.64-ssh']) {
//                              sh "eval ${ssh-agent -s}"
                             sh "ssh -o StrictHostKeyChecking=no ubuntu@35.78.53.64 'sudo docker pull suk97/deploy'"
                             sh "ssh -o StrictHostKeyChecking=no ubuntu@35.78.53.64 'sudo docker ps -q --filter name=deploy | grep -q . && docker rm -f \$(docker ps -aq --filter name=deploy)'"
                             sh "ssh -o StrictHostKeyChecking=no ubuntu@35.78.53.64 'sudo docker run -d --name deploy -p 8080:8080 suk97/deploy'"
                        }

                    }

                }

    }
}