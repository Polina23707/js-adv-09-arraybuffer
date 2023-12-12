import { getBuffer } from "./getBuffer";

export class ArrayBufferConverter {
  load() {
    return getBuffer();
  }

  toString() {
    return new TextDecoder().decode(this.load());
  }
}