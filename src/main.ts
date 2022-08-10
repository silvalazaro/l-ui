import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import * as components from './components'

const app = createApp(App)

for(const key in components){
    app.component(key, components[key])
}

app.mount('#app')