export default class AppComponent {
  constructor(text) {
    this.text = text
  }

  log() {
    console.log('AppComponent text:', this.text)
  }
}

export {
  AppComponent
}