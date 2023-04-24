# chatGPT 연동

## 1 : frontend를 chatGPT에 바로 연결

- ChatGPT와 바로 연동하여 검색 가능하게 구현
- API 정보가 노출되기 쉬움

## 2 : frontend - backend - chatGPT연결

- frontend에서 secret키로 backend에 정보요청
- backend는 secret키를 받아 원래 API키로 chatGPT와 소통
- 배포 : frontend는 vercel로 backend는 fly.io로 각각 배포
- 원래 고유 API키는 노출되지 않음
