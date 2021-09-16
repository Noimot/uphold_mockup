const middleware = {}

middleware['loadContent'] = require('..\\middleware\\loadContent.js')
middleware['loadContent'] = middleware['loadContent'].default || middleware['loadContent']

export default middleware
