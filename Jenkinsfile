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
        dir('server'){
            sh 'node --version'
            sh 'npm install'
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