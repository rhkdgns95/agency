#  Agency
- Using Nextjs, AppSync for Entertainment.


## 1. StoryBoard

#### 1-1. Model
```
	1. 관리자(Admin, 나):	state관리
	2. 소속사(Company):  	ex) SM / JYP / YG
	3. 유저 level:		사장 혹은 직원선택
```

#### 1-2.  Content
```
[Common User]
	
1)	모든 Public 유저들은 회원가입 시 Boss와 Customer를 선택.
2)	이메일 인증여부 확인.
3)	회원가입 완료.
4)	이후 각기 다른 방법으로 아래를 참고
	
	
	
[Boss - User]

1)	Boss는 소속사를 등록 신청.
2)	Boss가 신청한 소속사는 Admin이 관리(Admin이 수락/거절 권한)
3)	1개의 소속사만 신청가능.
4)	소속사 신청이 완료되면, 이용가능.
5)	이후 Agency와 Entertainer를 관리.


[User - Employee]

1)	Customer는 보이는 여러 소속사를 선택한 뒤 신청한다. (단, 소속사는 1군데만 신청가능함)
2)	Customer가 신청한 소속사는 Boss가 관리한다. (관리 - 수락/거절)
3)	이후 소속사 신청이 완료되면, 이용가능하다.
4)	가입 후 Boss와의 채팅방이 생성된다.
5)	이제 서로 채팅을 주고받는다.

```
  
  
## 2. Todo
- [x] Init App.
- [ ] Amplify Component.
- [ ] 


## 3. Install
```
-	yarn add react react-dom next 
-	yarn add typescript @types/react @types/node
-	
```

## 4. Study
```
	
```


## 5. Etc
```

```
