import Weather from './weather.js';
const apisUrl = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';
const serviceKey = 'y0g%2Fa5rg15oSMXYYVZyErtu%2BUVmJSyn4JXkrl8FM6VKKxwCfvIjopgp1KQMhGJyt7EHFQ6OZv99R%2ByxDNht15Q%3D%3D';
const api = { Weather };

const weather = new api.Weather(apisUrl, serviceKey);

weather.getPTY();

export default api;
