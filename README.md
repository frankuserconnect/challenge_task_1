### 과제 2) React와 History API 사용하여 SPA Router 기능 구현하기

<aside>
💡 가이드에 따라 코드를 작성하고, 과제 결과물은 각자 깃허브에 public 레포지토리로 업로드 후 디스코드 내 과제 제출 스레드에 링크를 제출해주세요.

</aside>

**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```

**5) 아래 스크린샷을 참고하여 앱을 작성한다.**

### Takeaway

```js
history.pushState({}, "title", path);

const popStateEvent = new PopStateEvent("popstate");

window.dispatchEvent(popStateEvent);
// 강제로 이벤트를 발생 시킨다.
// 이벤트 발생으로 화면을 갱신하여 새로고침이 일어나지 않는다.
/*
    window.history.pushState({}, '', path) 이 코드는 브라우저의 History API의 pushState 메서드를 사용하여 현재 브라우저 세션의 히스토리 스택에 새로운 항목을 추가. 첫 번째 인수 {}는 state 객체로, 현재 히스토리 엔트리에 저장된 상태 객체. 여기서는 빈 객체를 전달하여 기본 상태를 전달하여 이전 상태를 유지. 두 번째 인수 ''는 제목(title). 일부 브라우저에서는 이를 무시. 여기서는 빈 문자열을 전달하여 제목을 기본 값으로 유지. 세 번째 인수 path는 추가할 URL. 브라우저 주소 표시줄에 표시되는 경로.


    window.dispatchEvent() 메서드는 생성된 이벤트를 윈도우 오브젝트에 DISPATCH(realize)하여 이벤트가 실제로 적용.
    현재브라우저 히스토리 스택에 path를 추가하고, 이벤트를 실행하여 구성 요소의 상태를 업데이트. 
    이 방법으로 사용자가 브라우저의 뒤로/앞으로 버튼을 사용할 때 애플리케이션 내 이동이 올바르게 처리함.
*/
```

- 현재 경로에 따라 컴포넌트를 렌더링한다. useEffect hook으로 popstate 이벤트를 감지하여 현재 경로를 업데이트한다.
- path를 받아와 history.pushState를 이용하여 URL을 변경한다.
- 그 후 dispatchEvent를 통해 새로운 popstate 이벤트를 발생시켜 이벤트를 감지시켜 페이지를 리렌더링한다.
- router는 새로고침을 하지 않기위해 pushState로 주소를 변경 시키고,
- popstate 이벤트가 변경된 주소를 알아차려 useState변수를 변경하면 변경된 변수에 맞게 화면이 갱신되는 것이다.
- popstate는 push된 state가 없어지는, 즉 뒤로가기 앞으로가기의 경우에만 적용되니 입력될 때 dispatchEvent를 사용하여 강제로 popstate를 사용하여 화면을 갱신한다.
# challenge_task_1
