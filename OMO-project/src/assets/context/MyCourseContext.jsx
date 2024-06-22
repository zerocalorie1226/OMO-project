import React, {createContext, useReducer, useRef, useEffect} from "react";

// 리듀서 함수 정의
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("mycourseboard", JSON.stringify(newState));
  return newState;
};

// 컨텍스트 생성
export const MyCourseStateContext = createContext();
export const MyCourseDispatchContext = createContext();

// 컨텍스트 프로바이더 컴포넌트
export const MyCourseProvider = ({children}) => {
  const [data, dispatch] = useReducer(reducer, []);

  // 로컬 스토리지에서 데이터 로드
  useEffect(() => {
    const localData = localStorage.getItem("mycourseboard");
    if (localData) {
      const boardList = JSON.parse(localData).sort((a, b) => parseInt(b.reg_at) - parseInt(a.reg_at));
      if (boardList.length >= 1) {
        dataId.current = parseInt(boardList[0].id) + 1;
        dispatch({type: "INIT", data: boardList});
      }
    }
  }, []);

  const dataId = useRef(0);

  // 나만의 코스 CREATE 함수
  const onCreate = (time, courseName, content, createdAt) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        courseName,
        time,
        content,
        createdAt,
      },
    });
    dataId.current += 1;
  };

  return (
    <MyCourseStateContext.Provider value={data}>
      <MyCourseDispatchContext.Provider value={{onCreate}}>{children}</MyCourseDispatchContext.Provider>
    </MyCourseStateContext.Provider>
  );
};
