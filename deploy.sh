#!/bin/bash
set -e   # 중간에 에러나면 즉시 중단 (실패한 채로 진행 방지)

echo "▶ 배포 시작..."

cd ~/apps/nextjs-project-1

echo "▶ 최신 코드 받는 중 (git pull)..."
git pull origin main

echo "▶ 의존성 설치 (npm install)..."
npm install

echo "▶ 빌드 (npm run build)..."
npm run build

echo "▶ pm2 재시작..."
pm2 restart nextjs-project-1

echo "✅ 배포 완료!"