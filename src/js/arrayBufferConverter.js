import { getBuffer } from "./getBuffer";

export class ArrayBufferConverter {
  load() {
    return getBuffer();
  }

  toString() {
    return JSON.stringify(this.load()); 
  }
}