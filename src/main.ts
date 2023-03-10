/// @ts-check
/// <reference path="../node_modules/@types/p5/global.d.ts" />


export function setup() {
  createCanvas(
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  )
}

export function draw() {
  background(20)
  textAlign(CENTER, CENTER)
  textSize(height / 10)
  fill(200)
  text("Hello World!", width / 2, height / 2)
}

export function keyPressed() {}
export function keyReleased() {}

export type App = {
  setup: () => void;
  draw: () => void;
  keyPressed : () => void;
  keyReleased : () => void;
}

export const app : App = {
  setup,
  draw,
  keyPressed,
  keyReleased
}





