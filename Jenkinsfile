pipeline {
  agent {
    docker { 
      image 'node:latest' 
      args '-u root:root'
      }
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