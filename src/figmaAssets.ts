const figmaFile = (name: string) =>
  `${import.meta.env.BASE_URL}figma-exports/${encodeURIComponent(name)}`;

export const FRAME_0_PNG = figmaFile("Frame 0.png");
export const FRAME_1_PNG = figmaFile("Frame 1.png");
export const FRAME_2_PNG = figmaFile("Frame 2.png");
