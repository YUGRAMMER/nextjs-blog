---
title: "Cloudflare Tunnel로 자체 서버에 도메인 연결하기"
date: "2026-06-02"
summary: "공인 IP 없이 VirtualBox VM을 인터넷에 노출한 과정 기록"
---

## 배경

집에서 굴리는 VirtualBox VM에 포트폴리오를 띄우고 싶었지만,
공인 IP도 없고 포트포워딩도 막혀 있었다.

## 해결: Cloudflare Tunnel

`cloudflared`는 **바깥으로 나가는 연결만** 사용한다.
덕분에 포트포워딩 없이 VM을 인터넷에 노출할 수 있었다.

```bash
cloudflared tunnel create my-tunnel
```

이후 nginx가 `localhost:80`에서 정적 파일을 서빙하도록 연결했다.