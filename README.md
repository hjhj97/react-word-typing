# React Word Typing

랜덤 영단어 API 호출을 통해 타이핑하는 게임입니다.

## Tech Stack

- `node.js v18.17.0`
- `react 18`
- `typescript`
- `emotion`
- `axios`
- `recoil`
- `react-query`
- `react-hook-form`

## 시연

![시연](https://github.com/hjhj97/react-word-typing/assets/37234431/4b950016-c008-4df4-af73-e5a2199cb883)

## 주요 로직

1. `random-word-api.herokuapp.com`에서 API를 호출하여 임의의 영어 단어 하나를 불러옵니다. API를 호출할 때는 `axios`와 `react-query`를 조합하여 사용했습니다.
2. `Game.tsx`에 `wordRes`에 불러온 단어 정보를 저장합니다.
3. 불러온 단어정보를 `api.dictionary.dev` API의 파라미터로 넣어 사전 정의(영어)를 불러옵니다. 해당 단어가 사전에 등재되어 있지 않을 경우 404 에러를 반환받습니다.
4. 사전 정의를 정상적으로 불러왔다면 단어와 함께 화면에 표시합니다. 정의를 불러오지 못했다면 표시하지 않습니다.
5. 사용자는 화면에 표시된 단어를 input창에 오타없이 입력해야 합니다.
6. 단어를 정확히 입력했다면 정답 alert가 표시되고, 전역상태인 `recoil`을 통해 히스토리에 단어가 추가됩니다. 저장한 히스토리는 `WordHistory.tsx`에 데이터로 주입되어 input창 아래에 표시됩니다.
7. 단어를 틀렸다면 오답 alert가 표시됩니다. 정확히 입력해야만 다음 문제로 넘어갈 수 있습니다.

## 개선하고 싶은 점

- 경쟁모드 추가 : 10개 단어를 빠른 시간내에 입력하기
