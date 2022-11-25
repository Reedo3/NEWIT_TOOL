pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build') {
      steps {
        dir('client'){
            sh 'node --version'
            sh 'sudo npm install'
            sh 'sudo npm run build'
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