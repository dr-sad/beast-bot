import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FRAME_1_PNG } from "../figmaAssets";
import {
  ADJECTIVE_OPTIONS,
  ANIMAL_OPTIONS,
  randomTwoDigitSuffix,
} from "../nicknameState";
import type { NicknameLocationState } from "../nicknameState";
import frameImage from "./frameImage.module.css";
import shared from "./frameShared.module.css";
import back from "./frameBack.module.css";
import styles from "./FrameOne.module.css";

/**
 * Frame 1 — nickname step; Back → Frame 0, Next → Frame 2 with selected nickname.
 */
export function FrameOne() {
  const navigate = useNavigate();
  const [adjective, setAdjective] = useState<string>(ADJECTIVE_OPTIONS[3]);
  const [animal, setAnimal] = useState<string>(ANIMAL_OPTIONS[0]);

  const goNext = () => {
    const state: NicknameLocationState = {
      adjective,
      animal,
      nickSuffix: randomTwoDigitSuffix(),
    };
    navigate("/frame-2", { state });
  };

  return (
    <div className={shared.viewport}>
      <div className={shared.stage}>
        <div
          className={`${shared.frameWrap} ${styles.frameOneWrap}`}
        >
          <img className={frameImage.figure} src={FRAME_1_PNG} alt="" />
          <div className={styles.dropOverlay}>
            <label className={styles.dropCol}>
              <span className={styles.dropLabel}>
                A word that describes you
              </span>
              <select
                className={styles.dropSelect}
                value={adjective}
                onChange={(e) => setAdjective(e.target.value)}
                aria-label="A word that describes you"
              >
                {ADJECTIVE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
            <label className={styles.dropCol}>
              <span className={styles.dropLabel}>Your favorite animal</span>
              <select
                className={styles.dropSelect}
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                aria-label="Your favorite animal"
              >
                {ANIMAL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button
            type="button"
            className={`${shared.nextHit} ${styles.nextHitFrameOne}`}
            onClick={goNext}
            aria-label="Next"
          />
          <button
            type="button"
            className={back.back}
            onClick={() => navigate("/")}
            aria-label="Back to previous screen"
          >
            <svg
              className={back.chevron}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
