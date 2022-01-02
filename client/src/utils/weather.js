const apisUrl = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst';
const serviceKey = 'y0g%2Fa5rg15oSMXYYVZyErtu%2BUVmJSyn4JXkrl8FM6VKKxwCfvIjopgp1KQMhGJyt7EHFQ6OZv99R%2ByxDNht15Q%3D%3D';
class Weather {
    constructor(url, serviceKey) {
        this.url = url;
        this.serviceKey = serviceKey;
    }
    getPTY() {
        const res = fetch('this.url', {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            params: {
                serviceKey: this.serviceKey,
                numOfRows: '10',
                pageNo: '1',
                dataType: 'JSON',
                base_date: '20211231',
                base_time: '0200',
                nx: '55',
                ny: '127',
            },
        }).then((res) => console.log(JSON.stringify(res)));
    }
}
export const weather = new Weather(apisUrl, serviceKey);
