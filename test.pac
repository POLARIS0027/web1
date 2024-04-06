function FindProxyForURL(url, host) {
    // naver.com 도메인인 경우 직접 연결
    if (shExpMatch(host, "nttdata-sbc.co.jp")) {
        return "DIRECT";
    }
    
    // 그 외의 경우는 프록시 사용
    return "PROXY 153.165.168.137:8080";
}
