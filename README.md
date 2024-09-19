# React Native 프로젝트 (TypeScript + Tailwind CSS)

이 프로젝트는 React Native를 기반으로 하며, TypeScript와 Tailwind CSS (NativeWind)가 적용되어 있습니다.

## 설치

1. 의존성을 설치합니다:
   ```
   yarn install
   ```

2. iOS 개발을 위해 CocoaPods 의존성을 설치합니다 (Mac 전용):
   ```
   cd ios && pod install && cd ..
   ```

## 실행 방법

### 개발 서버 시작

메트로 서버를 시작합니다:
 ```
npx react-native start
 ```

### iOS에서 실행 (Mac 전용)
 ```
yarn run ios
 ```
### Android에서 실행

Android 에뮬레이터를 실행하거나 기기를 연결한 후, 새 터미널 창에서:
 ```
yarn run android
```

## 개발

- TypeScript: `.ts` 또는 `.tsx` 확장자를 사용하여 TypeScript 코드를 작성합니다.
- Tailwind CSS: NativeWind를 통해 Tailwind CSS 클래스를 사용할 수 있습니다.

## 문제 해결

빌드 오류 발생 시 다음을 시도해 보세요:
1. 메트로 캐시 정리: `npx react-native start --reset-cache`
2. 의존성 재설치: `rm -rf node_modules && yarn install`
3. iOS의 경우: `cd ios && pod install && cd ..`
