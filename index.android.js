import React from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import AIAY from './app/components/AIAY'

const store = configureStore()

const AIAYBlog = () => (
         <Provider store={store}>
          <AIAY />
         </Provider>
)

AppRegistry.registerComponent('aiay', () => AIAYBlog);
