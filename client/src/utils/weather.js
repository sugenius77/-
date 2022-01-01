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
        }).then((res) => console.log(res));
        console.log(JSON.stringify(res));
    }
}
export default Weather;
