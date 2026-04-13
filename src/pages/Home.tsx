import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

/**
 * First screen — rebuild of Figma frame `7754-6621` (starting prototype frame).
 * Replace layout copy and wire buttons to real routes as you add frames.
 */
export function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.shell}>
      <header className={styles.topBar}>
        <div className={styles.brand}>
          <div className={styles.brandMark} aria-hidden />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>BAO Design Sprint</span>
            <span className={styles.brandSubtitle}>March 2026</span>
          </div>
        </div>
        <span className={styles.meta}>Frame 7754:6621</span>
      </header>

      <main className={styles.main}>
        <article className={styles.card}>
          <p className={styles.eyebrow}>Welcome</p>
          <h1 className={styles.headline}>Start from your Figma frame</h1>
          <p className={styles.lede}>
            This page is a structural starter for the first prototype frame. Adjust
            spacing, type, and colors in <code>src/design-tokens.css</code> to match
            Dev Mode, then map each hotspot below to the route for the next frame.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primary}
              onClick={() =>
                navigate("/coming-soon", {
                  state: {
                    prototypeId: "primary",
                    label:
                      "Replace with destination frame name from Figma prototype",
                  },
                })
              }
            >
              Primary action
            </button>
            <button
              type="button"
              className={styles.secondary}
              onClick={() =>
                navigate("/coming-soon", {
                  state: {
                    prototypeId: "secondary",
                    label:
                      "Replace with second prototype destination from Figma",
                  },
                })
              }
            >
              Secondary action
            </button>
          </div>

          <p className={styles.note}>
            Figma file key <code>2IOY5O7uNAziQdqbKhyDwE</code> — export assets into{" "}
            <code>public/figma-exports/</code> and reference them from this component.
          </p>
        </article>
      </main>
    </div>
  );
}
