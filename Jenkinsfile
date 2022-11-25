pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build') {
      steps {
        dir('client'){
            sh 'node --version'
            sh 'npm install'
            sh 'npm run build'
        } 
      }
    }
  }

  post{
    always{
      cleanWs()
    }
  }
}