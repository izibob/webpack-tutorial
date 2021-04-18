import React from 'react'
import { render } from 'react-dom'

import { AppComponent } from './modules/app.component.js'
import { App } from './App'
import { data } from "./modules/app.module";
import './modules/ts.module'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'

const app = new AppComponent('This is AppComponent')
app.log()

console.log('appModule:', data.key)

render(<App/>, document.getElementById('app'))