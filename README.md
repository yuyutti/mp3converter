# mp3converter
## 紹介
mp3音源を静止画mp4に変換するためのプログラムです

## 使いかた
0. 音声ファイル(mp3)と静止画ファイル(jpg)をindex.jsのあるフォルダーに移動させます
1. `index.js`内の「mp3ファイルのリスト」に変換したいmp3の名前を入力します
2. 静止画にしたい画像ファイルの名前を「background.jpg」とします
3. cmd/ターミナルで```node index.js```と入力してプログラムを実行させてください

:::note warn
## 注意
NVIDIA製のGPUを使用していない方は

index.js内16行目を
下のコードに置き換えてください
```javascript
const cmd = `ffmpeg -loop 1 -i background.jpg -i ${inputFile} -c:v libx264 -c:a aac -b:a 320k -shortest ${outputFolder}
```
:::

## 実行

実行にはnode.jsの環境が必要になります

