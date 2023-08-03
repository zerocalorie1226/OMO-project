import Calendar from "./Calendar";
import styles from "./Signup.module.css";
import Required from "../../assets/sign-up/required.png";
import {Radio} from "../../components/Radio/Radio";
import {RadioGroup} from "../../components/Radio/RadioGroup";

const Signup = () => (
  <>
    <section className={styles["signup-container"]}>
      <div className={styles["signup-title-container"]}>
        <h2 className={styles["signup-title"]}>회원가입</h2>
        <p className={styles["essential"]}>
          {" "}
          <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "10px", right: "1px"}} className={styles["required"]} />
          필수입력사항
        </p>
      </div>
      <div div className={styles["signup-inner-container"]}>
        <div className={styles["signup-email-container"]}>
          <label className={styles["signup-email"]} htmlFor="signup-email">
            이메일 <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "17px", right: "7px"}} />
          </label>

          <input className={styles["signup-email-input"]} type="text" id="signup-email" placeholder="이메일을 입력해주세요." />
          <button className={styles["signup-email-certification"]} type="submit">
            인증하기
          </button>
        </div>

        <div className={styles["signup-pw-container"]}>
          <label className={styles["signup-pw"]} htmlFor="signup-pw">
            비밀번호 <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "17px", right: "7px"}} />
          </label>
          <input className={styles["signup-pw-input"]} type="text" id="signup-pw" placeholder="비밀번호를 입력해주세요." />
        </div>

        <div className={styles["signup-pw-check-container"]}>
          <label className={styles["signup-pw-check"]} htmlFor="signup-pw-check">
            비밀번호 확인 <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "17px", right: "7px"}} />
          </label>
          <input className={styles["signup-pw-check-input"]} type="text" id="signup-pw-check" placeholder="비밀번호를 한번 더 입력해주세요." />
        </div>

        <div className={styles["signup-birth-date-container"]}>
          <label className={styles["signup-birth-date"]} htmlFor="birth-date">
            생년월일 <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "17px", right: "7px"}} />
          </label>
          <Calendar />
        </div>

        <div className={styles["signup-nickname-container"]}>
          <label className={styles["signup-nickname"]} htmlFor="nickname">
            닉네임 <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "17px", right: "7px"}} />
          </label>
          <input className={styles["signup-nickname-input"]} type="text" id="nickname" placeholder="닉네임을 입력해주세요." />
        </div>

        <div className={styles["signup-mbti-container"]}>
          <label className={styles["signup-mbti"]} htmlFor="mbti">
            MBTI <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "17px", right: "7px"}} />
          </label>

          <select className={styles["mbti-select-IE"]} name="mbti" id="mbti-select">
            <option value="I" className={styles["mbti-color"]}>
              I
            </option>
            <option value="E">E</option>
          </select>

          <select className={styles["mbti-select-SN"]} name="mbti" id="mbti-select">
            <option value="S">S</option>
            <option value="N">N</option>
          </select>

          <select className={styles["mbti-select-TF"]} name="mbti" id="mbti-select">
            <option value="T">T</option>
            <option value="F">F</option>
          </select>

          <select className={styles["mbti-select-JP"]} name="mbti" id="mbti-select">
            <option value="J">J</option>
            <option value="P">P</option>
          </select>
        </div>

        <div className={styles["signup-gender-container"]}>
          <label className={styles["signup-gender"]} htmlFor="gender">
            성별 <img src={Required} alt="필수항목표시" style={{width: "10px", height: "10px", position: "relative", bottom: "17px", right: "7px"}} />
          </label>
          <form className={styles["signup-gender-radio-container"]}>
            <RadioGroup>
              <Radio name="gender" value="MALE" defaultChecked>
                남자
              </Radio>
              <Radio name="gender" value="FEMALE">
                여자
              </Radio>
            </RadioGroup>
          </form>
        </div>

        <div className={styles["terms-of-service-container"]}>
          <label className={styles["terms-of-service"]} htmlFor="terms-of-service">이용약관동의</label>
          <form className={styles["signup-terms-of-service-radio-container"]}>
            <RadioGroup>
              <Radio name="agree-items" value="ALL">
                전체 동의합니다.
              </Radio>
              <hr className={styles["radio-hr"]} />
              <Radio name="agree-items" value="ESSENTIAL">
                서비스 이용약관 동의 (필수)
              </Radio>
              <Radio name="agree-items" value="ESSENTIAL">
                개인정보 수집 및 이용 동의 (필수)
              </Radio>
              <Radio name="agree-items" value="OPTIONAL">
              개인정보 수집 및 이용 동의 (선택)
              </Radio>
              <Radio name="agree-items" value="ESSENTIAL">
                만 14세 이상입니다. (필수)
              </Radio>
            </RadioGroup>
          </form>
        </div>
        
        <div className={styles["signup-btn-signup-container"]}>
        <button type="submit" className={styles["signup-btn-signup"]}>
          가입하기
        </button>
      </div>
</div>
    </section>
  </>
);

export default Signup;
