import { useNavigate } from "react-router-dom";
import { FRAME_0_PNG } from "../figmaAssets";
import frameImage from "./frameImage.module.css";
import shared from "./frameShared.module.css";

/**
 * Homepage — full-screen `Frame 0.png`; Next hit target over the art’s button.
 */
export function Home() {
  const navigate = useNavigate();

  return (
    <div className={shared.viewport}>
      <div className={shared.stage}>
        <div className={shared.frameWrap}>
          <img className={frameImage.figure} src={FRAME_0_PNG} alt="" />
          <button
            type="button"
            className={shared.nextHit}
            onClick={() => navigate("/frame-1")}
            aria-label="Next"
          />
        </div>
      </div>
    </div>
  );
}
