pipeline {
    agent any 	// 사용 가능한 에이전트에서 이 파이프라인 또는 해당 단계를 실행
    tools {nodejs "nodejs"} // npm 명령어 사용을 위한 nodejs


    stages {
        stage('Prepare') {
            steps {
                git url: 'https://github.com/suk97/jenkins-test.git',
                    branch: 'main',
                    credentialsId: 'jenkins-git-credential'
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
                sh "npm install"
                sh "npm run build"
            }
            post {
                success {
                    echo 'react build success'
                }

                failure {
                    echo 'react build failed'
                }
            }
        }
// stage('Test') {
//     steps {
//         echo  '테스트 단계와 관련된 몇 가지 단계를 수행합니다.'
//     }
// }
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
                sh 'docker build . -t suk97/react-deploy'
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
                            sh 'docker push suk97/react-deploy'
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
                        sshagent (credentials: ['jenkins-server-privatekey']) {
                            //  sh "eval ${ssh-agent -s}"
                             sh "ssh -o StrictHostKeyChecking=no ubuntu@35.78.53.64 'sudo docker pull suk97/react-deploy'"
                             sh "ssh -o StrictHostKeyChecking=no ubuntu@35.78.53.64 'sudo docker ps -q --filter name=react-deploy | grep -q . && docker rm -f \$(docker ps -aq --filter name=react-deploy)'"
                             sh "ssh -o StrictHostKeyChecking=no ubuntu@35.78.53.64 'sudo docker run -d --name react-deploy -p 8080:8080 suk97/react-deploy'"
                        }

                    }

                }

    }
}