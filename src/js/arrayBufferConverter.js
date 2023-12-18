import { getBuffer } from "./getBuffer";

export class ArrayBufferConverter {
  load() {
    return getBuffer();
  }

  toString() {
    return String.fromCharCode.apply(null, new Uint16Array(this.load()));
  }
}