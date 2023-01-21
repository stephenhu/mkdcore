/* mkdcore */

export const CH_SPACE       = ' ';


export function summarize(s: string, c: number): string {
  console.log("hello world");

  if(s === undefined || s === null || s.length === 0) {
    
    console.log("Unable to summarize string");
    return s;

  }

  const words = s.trim().split(CH_SPACE);

  if(words.length >= c) {

    var ret: string = "";

    for(let i = 0; i < c; i++) {
      ret += words[i] + CH_SPACE;
    }

    return ret.trim();

  } else {
    return s;
  }

} // summarize


export function tags() {
} // tags
