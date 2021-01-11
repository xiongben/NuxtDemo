
import Vue from 'vue'
const files = require.context('@/components', true, /\.vue$/);

files.keys().forEach(item => {
    const componentName = item.replace(/^\.\//, '').replace(/\.\w+$/, '');
    Vue.component(componentName, resolve => {
      let component = files(item);
      resolve(component);
    })
})




