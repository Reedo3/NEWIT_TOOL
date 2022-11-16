pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'cd client'
                bat 'npm install'
                bat 'npm run build'
            }
        }
    }
}
