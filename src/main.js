/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

import { createMetaManager} from 'vue-meta'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'



const app = createApp(App)
const metaManager = createMetaManager()
app.use(metaManager)


registerPlugins(app)

app.mount('#app')
