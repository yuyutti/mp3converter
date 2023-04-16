const fs = require('fs');
const { exec } = require('child_process');

// mp3ファイルのリスト
const mp3Files = [
    'FileName.mp3',
    ];

// 出力するmp4ファイル名のリスト（mp3ファイル名と同じにする）
const mp4Files = mp3Files.map(mp3File => mp3File.replace('.mp3', '.mp4'));

// mp3ファイルをmp4に変換する関数
const convertToMp4 = (inputFile, outputFile) => {
    const outputFolder = `./output/${outputFile}`
return new Promise((resolve, reject) => {
    const cmd = `ffmpeg -loop 1 -i background.jpg -i ${inputFile} -c:v h264_nvenc -c:a aac -b:a 320k -shortest ${outputFolder}
    `;
    console.log(cmd)
    exec(cmd, (error, stdout, stderr) => {
    if (error) {
        reject(error);
    } else {
        resolve();
    }
    });
});
};

// すべてのmp3ファイルをmp4に変換する関数
const convertAllToMp4 = async () => {
try {
    for (let i = 0; i < mp3Files.length; i++) {
    const mp3File = mp3Files[i];
    const mp4File = mp4Files[i];
    await convertToMp4(mp3File, mp4File);
    console.log(`変換完了: ${mp3File} -> ${mp4File}`);
    }
} catch (error) {
    console.error(`変換エラー: ${error.message}`);
}
};

convertAllToMp4();