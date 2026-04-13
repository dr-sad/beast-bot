import { useNavigate, useLocation } from "react-router-dom";
import { FRAME_2_PNG } from "../figmaAssets";
import type { NicknameLocationState } from "../nicknameState";
import frameImage from "./frameImage.module.css";
import shared from "./frameShared.module.css";
import back from "./frameBack.module.css";
import styles from "./FrameTwo.module.css";

function isNicknameState(x: unknown): x is NicknameLocationState {
  if (x === null || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.adjective === "string" &&
    typeof o.animal === "string" &&
    typeof o.nickSuffix === "string"
  );
}

/**
 * Frame 2 — shows Hi {Adj}{Animal}{NN}! from Frame 1 selections + random digits.
 */
export function FrameTwo() {
  const navigate = useNavigate();
  const location = useLocation();
  const raw = location.state;
  const state = isNicknameState(raw) ? raw : null;

  const adjective = state?.adjective ?? "Maroon";
  const animal = state?.animal ?? "Dove";
  const nickSuffix = state?.nickSuffix ?? "00";

  const greeting = `Hi ${adjective}${animal}${nickSuffix}!`;

  return (
    <div className={shared.viewport}>
      <div className={shared.stage}>
        <div className={`${shared.frameWrap} ${styles.frameTwoWrap}`}>
          <img className={frameImage.figure} src={FRAME_2_PNG} alt="" />
          <p className={styles.greeting}>{greeting}</p>
          <button
            type="button"
            className={back.back}
            onClick={() => navigate("/frame-1")}
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
