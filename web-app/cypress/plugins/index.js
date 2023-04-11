import cucumber from 'cypress-cucumber-preprocessor'

export default (on, config) => {
  on('file:preprocessor', cucumber())
}