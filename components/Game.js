import React, { useEffect, useState } from "react";
import { Stage, Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

export function Game() {
  return (
    <Stage
      width={800}
      height={600}
      options={{ backgroundColor: 0x1099bb }}
    ></Stage>
  );
}
