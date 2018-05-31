papago-translator
==============

Papago Translator module for node.js


## API

```js
var translator = require('papago-translate.js').init({
    client_id: 'your_client_id', 
    client_secret: 'your_client_secret'  
});

var obj = {
	text: '파파고로 번역을 하고 있습니다.',
	target: 'en',
	source: 'ko'
};
translator.translate(obj, function(err, res) {
  console.log(err, res);
});
```


## Reference
(http://docs.ncloud.com/ko/naveropenapi_v2/naveropenapi-6-3-1.html)

## License

```
MIT
```
