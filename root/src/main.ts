import './style.css'

type App = {
  url: string
  element: string
}

type Apps = {
  [key: string]: App
}
const apps: Apps ={
  'grid':{
    url: 'http://localhost:5001/grid-v_0.0.0.es.js',
    element: 'grid-app',
  },
  'list':{
    url: 'http://localhost:5002/list-v_0.0.0.es.js',
    element: 'list-app',
  },
  'image':{
    url: 'http://localhost:5003/image-v_0.0.0.es.js',
    element: 'image-app',
  },
  'text':{
    url: 'http://localhost:5004/text-v_0.0.0.es.js',
    element: 'text-app',
  },
}


const loadApp = (appName: string) => {{
  const script = document.createElement('script')
  script.src = apps[appName].url
  script.type = 'module'
  script.defer = true
  document.body.appendChild(script)

}}

const apsContainer = document.createElement('div');
apsContainer.id = 'apps-container';
document.body.appendChild(apsContainer);

for (const appName in apps) {
  const appElement = document.createElement(apps[appName].element)
  apsContainer.appendChild(appElement)
  loadApp(appName)
}


const listApp = document.querySelector('list-app');
listApp?.setAttribute('items', JSON.stringify([
  {id: 1, name: 'item 1'},

]))


setTimeout(() => {
  const listApp = document.querySelector('list-app');
  const items = Array.from({length: 10}, (_, i) => ({id: i, name: `item ${i}`}))
  listApp?.setAttribute('items', JSON.stringify(items))
} , 5000)