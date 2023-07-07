// 원래 모듈 선언 가져오기
import 'styled-components';

// 확장합니다!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}
