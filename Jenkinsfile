pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build') {
      steps {
        dir('client'){
            sh 'node --version'
            sh 'npm run build'
        } 
      }
    }
  }
}