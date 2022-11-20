pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build') {
      steps {
         
        sh 'node --version'
        sh 'cd client'
        sh 'npm run build'

      }
    }
  }
}