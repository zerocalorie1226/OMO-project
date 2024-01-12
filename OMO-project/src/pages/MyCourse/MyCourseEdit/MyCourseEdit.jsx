//  수정페이지 (Edit)

import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {MyCourseStateContext} from "../../../App";
import MyCourseEditor from "../../../components/MyCourseEditor/MyCourseEditor";

const MyCourseEdit = () => {

  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const {id} = useParams();

  const myCourseList = useContext(MyCourseStateContext);
  console.log(myCourseList);

  useEffect(() => {
    if (myCourseList.length >= 1) {
      const targetMyCourse = myCourseList.find((it) => parseInt(it.id) === parseInt(id));
    console.log(targetMyCourse);

    if (targetMyCourse){
      setOriginData(targetMyCourse)
    }else{
      navigate("/MyCourseMain", {replace: true})
    }
    
    }
  }, [id, myCourseList]);

  return <div>{originData && <MyCourseEditor isEdit={true} originData={originData}/>}</div>;
};
export default MyCourseEdit;
