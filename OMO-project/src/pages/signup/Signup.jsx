import styles from "./Signup.module.css";
import React, {useState} from "react";

const Signup = () => (
  <>
    <section className={styles["signup-container"]}>
      <h2 className={styles["signup-title"]}>회원가입</h2>
      <p className={styles["essential"]}>필수입력사항</p>
      <div className={styles["signup-inner-container"]}>
        <div className={styles["signup-email-container"]}>
          <label className={styles["signup-email"]} for="signup-email">
            이메일
          </label>
          <input className={styles["signup-email-input"]} type="text" id="signup-email" placeholder="이메일을 입력해주세요." />
          <button className={styles["signup-email-certification"]} type="button">
            인증하기
          </button>
        </div>

        <div className={styles["signup-pw-container"]}>
          <label className={styles["signup-pw"]} for="signup-pw">
            비밀번호
          </label>
          <input className={styles["signup-pw-input"]} type="text" id="signup-pw" placeholder="비밀번호를 입력해주세요." />
        </div>

        <div className={styles["signup-pw-check-container"]}>
          <label className={styles["signup-pw-check"]} for="signup-pw-check">
            비밀번호 확인
          </label>
          <input className={styles["signup-pw-check-input"]} type="text" id="signup-pw-check" placeholder="비밀번호를 한번 더 입력해주세요." />
        </div>

        <div className={styles["signup-birth-date-container"]}>
          <label className={styles["signup-birth-date"]} for="birth-date">
            생년월일
          </label>
          <input className={styles["signup-birth-date-input"]} type="date" id="birth-date" />
        </div>

        <div className={styles["signup-nickname-container"]}>
          <label className={styles["signup-nickname"]} for="nickname">
            닉네임
          </label>
          <input className={styles["signup-nickname-input"]} type="text" id="nickname" placeholder="닉네임을 입력해주세요." />
        </div>

        <div className={styles["signup-mbti-container"]}>
          <label className={styles["signup-mbti"]} for="mbti">
            MBTI
          </label>

          <select className={styles["mbti-select-IE"]} name="mbti" id="mbti-select">
            <option value="I">I</option>
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

        <div>
          <label className={styles["gender"]} for="gender">
            성별
          </label>
          <div className={styles["male"]}>남자</div>
          <div className={styles["female"]}>여자</div>
        </div>
      </div>
    </section>
  </>
);

export default Signup;
