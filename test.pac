function FindProxyForURL(url, host) { 
// If the hostname matches, send direct. 
    if (dnsDomainIs(host, "nttdata-sbc.co.jp") || 
        shExpMatch(host, "(*.nttdata-sbc.co.jp|nttdata-sbc.co.jp)")) 
        return "DIRECT"; 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order. 
    return "PROXY ec2-35-78-104-189.ap-northeast-1.compute.amazonaws.com:808;}
