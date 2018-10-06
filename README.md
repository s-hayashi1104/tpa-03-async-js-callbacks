# Asynchronous Javascript （非同期ジャバスクリプト）

セットアップ：

```bash
npm i
```

テスト実行：

```bash
npm test
```

## タスク：getTwoRandomDogs 関数を実装しよう。

まずは`helpers/getRandomDog.js` から見てみよう。

**注意**: `getRandomDog` は `setTimeout` を使用しているので_非同期_な処理を行います。戻し値は `undefined` なので、コールバック関数を渡せば_いつか_(2秒以内)呼ぶ仕組みになっています。

`getTwoRandomDogs` は：

- 引数として関数（コールバック関数）が渡されます
- getRandomDog を使用して、二匹ドッグオブジェクトを取得して、callback 関数を実行しよう。
- callback 関数には引数として二匹のドッグオブジェクトが入っている配列を渡しましょう。

## ボーナス：getNRandomDogs関数を実装しよう。

(ユニットテストもよろしく！)

getNRandomDogs は getTwoRandomDogs に似ているけど、二つではなく、n数のドッグオブジェクトをコールバック関数に渡すはずです。
