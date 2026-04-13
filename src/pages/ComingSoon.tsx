import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ComingSoon.module.css";

type LocationState = {
  prototypeId?: string;
  label?: string;
};

export function ComingSoon() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state ?? {}) as LocationState;

  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        {state.prototypeId ? (
          <span className={styles.tag}>Prototype: {state.prototypeId}</span>
        ) : null}
        <h1>Next frame not built yet</h1>
        <p>
          {state.label ??
            "Add a route and screen for the destination frame in Figma, then point the corresponding button’s navigation to that path."}
        </p>
        <button type="button" className={styles.back} onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}
