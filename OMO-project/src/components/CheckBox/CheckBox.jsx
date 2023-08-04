import { useState } from "react";
import styles from "./CheckBox.module.css";

export default function CheckBox() {
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    personalInfoAgreedEssential: false,
    personalInfoAgreedOptional: false,
    ageAgreed: false,
  });

  const handleAgreementChange = (event)=> {
    const { name, checked } = event.target;
   
    setAgreements((prevAgreements)=> ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every(
      (value)=> value === true
    );
    setAllAgreed(allChecked);
  };

  const handleAllAgreementChange = (event)=> {
    const { checked } = event.target;
    setAgreements((prevAgreements)=>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey)=> ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {}
      )
  );
    setAllAgreed(checked);
  };
  
  
  return (
    <div className={styles["terms-of-service-container"]}>
          <label className={styles["terms-of-service"]} >이용약관동의</label>
          <ul className={styles["signup-terms-of-service-radio-container"]}>
            <li>
              <input
                type="checkbox"
                id="agree-check-all"
                name="agree-check-all"
                checked={allAgreed}
                onChange={handleAllAgreementChange}
              />
              <label htmlFor="agree-check-all">전체 동의합니다.</label>
            </li>
            <hr className={styles["agree-check-hr"]} />
            <li>
              <input
                type="checkbox"
                id="agree-check-used"
                name="termsAgreed"
                required
                checked={agreements.termsAgreed}
                onChange={handleAgreementChange}
              />
              <label htmlFor="agree-check-used">서비스 이용약관 동의 (필수)</label>
             
            </li>
            <li>
              <input
                type="checkbox"
                id="agree-check-info-essential"
                name="personalInfoAgreedEssential"
                required
                checked={agreements.personalInfoAgreedEssential}
                onChange={handleAgreementChange}
              />
              <label htmlFor="agree-check-info-essential">
              개인정보 수집 및 이용 동의 (필수)
              </label>
              
            </li>
            <li>
              <input
                type="checkbox"
                id="agree-check-info-optional"
                name="personalInfoAgreedOptional"
                required
                checked={agreements.personalInfoAgreedOptional}
                onChange={handleAgreementChange}
              />
              <label htmlFor="agree-check-info-optional">
              개인정보 수집 및 이용 동의 (선택)
              </label>
              
            </li>
            <li>
              <input
                type="checkbox"
                id="agree-check-age"
                name="ageAgreed"
                required
                checked={agreements.ageAgreed}
                onChange={handleAgreementChange}
              />
              <label htmlFor="agree-check-age">만 14세 이상입니다. (필수)</label>      
            </li>
          </ul>
      </div>
  );
}