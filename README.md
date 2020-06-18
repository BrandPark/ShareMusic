# ShareMusic #

### - 작품배경    
<div>음악은 알게 모르게 사람들의 일상 생활 속에 깊숙이 자리잡고 있다. 지하철에 사람들은 이어폰을 꽂으며 노래를 듣는 사람들이 대다수며 카페, 술집, 의류매장 등등 어디에서든 쉽게 접할 수 있다.  
그러던 와중에 올해 초 음원 차트 사재기 논란에 주목을 하게 되었다. 대부분의 사람들은 음악 차트를 통해 노래를 새로 접하게 되는데 차트에는 항상 비슷한 곡들로만 이루어져 새로운 노래 들을만한 거 없나 고민했었던 문제들을 웹 서비스로 풀어내보면 어떨까라는 생각이 들게 되었다. 인기 SNS인 인스타그램은 사람들 사이의 사진 공유를 통해 사람들 간의 유대감을 만드는 반면에 우리는 음악을 통해서 자신과 비슷한 취향을 가진 사람들 사이의 팔로우를 통해 컬렉션들을 공유하여 유대감을 형성해보자란 생각으로 구상하게 되었다. 또한 쉽게 자신의 플레이리스트를 이미지 캡처 방식을 통해 손 쉽게 컬렉션을 업로드 하여 클라이언트들에게 편의성을 제공해보자는 생각도 곁들게 되었다.</div>

### - 작품소개  
<div>사용자가 자신이 선호하는 음악 플레이리스트를 비슷한 취향을 가진 사용자들과의 서로 공유할 수 있는 웹 서비스로서 사용자는 팔로워들이 새로 등록한 플레이리스트를 받아보며 서로 공유하고 댓글,좋아요 및 태그들을 통해 유대감을 형성 시킬 수 있도록 구성해보았다. 유튜브, 넷플릭스, 네이버 시리즈 등 처럼 영상 매체가 대두되는 시점에 유튜브 영상을 통해서 음원 스트리밍 기능을 제공하도록 구현해보았다. 그리고 컬렉션을 업로드하는 과정에서 플레이리스트 이미지를 통해 자동으로 등록하는 서비스도 구현해보았다.</div>

### - 시나리오  
<div>사용자가 자신의 음원스트리밍 어플리케이션의 플레이리스트 이미지를 캡처하거나 직접 타이핑을 통해 곡들을 담아 컬렉션을 추가하여 자신의 프로필 페이지에 담을 수 있다. 이로 인해 자신을 팔로워 했던 사람들에게 이를 알리게 되며 컬렉션에 대해 좋아요를 누르거나 댓글을 등록하거나 태그를 설정하여 사람들간의 커뮤니케이션이 이뤄지게 된다.</div>

### -시스템구조  
<img width="844" alt="스크린샷 2020-06-18 오후 7 37 54" src="https://user-images.githubusercontent.com/44339530/85010592-38403280-b19b-11ea-920a-ea02e4a1c01e.png">  

### - 클라이언트 화면  
<img width="844" alt="test20" src="https://user-images.githubusercontent.com/44339530/85010810-9836d900-b19b-11ea-9e0c-40ed350b2559.png">

<img width="844" alt="스크린샷 2020-06-18 오후 7 37 54" src="https://user-images.githubusercontent.com/44339530/85010805-9705ac00-b19b-11ea-9f91-baaa7ebaafb9.png">

<img width="844" alt="스크린샷 2020-06-18 오후 7 37 54" src="https://user-images.githubusercontent.com/44339530/85010798-94a35200-b19b-11ea-9fcc-8e3d404c7031.png">

### - 기대효과  
* 음악들에 대한 정보를 자유롭고 간편하게 공유할 수 있다.
* 숨은 명곡들을 공유하고 싶은 사람들이 쉽게 소통할 수 있다. 
* 나만의 음악 컬렉션을 보다 간편하게 구성할 수 있다.
* 구성된 음악 컬렉션을 손쉽게 다른 사용자들과 공유할 수 있다. 
* 특정한 장소, 상황에 듣고 싶은 음악을 찾을 때 관련된 태그를 통해 보다 쉽게 정보를 얻을 수 있다. 

### - 기술스택 및 개발환경  
* 개발 환경: Windows 10, Mac OS
* 개발 도구: Visual Studio Code, Spring Boot, React, MySQL, AWS
* 개발 언어: Java, Java Script, JSX, SQL
* 파일시스템관리: AWS S3
* 배포환경 : AWS ec2

---
### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify











