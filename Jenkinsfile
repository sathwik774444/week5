pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                script{
                    bat 'docker build -t week9 .'
                }
            }
        }
        stage('Test'){
            steps{
                script{
                    echo 'Running tesst...'
                }
            }
        }
        stage('Deploy'){
            steps{
                script{
                    echo 'Deploying application... '
                }
            }
        }
    }
}