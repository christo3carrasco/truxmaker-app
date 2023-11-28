export const get_rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
export const get_uuid = (length=14) => {
  const ar = [
    "abcdefghijklmnopqrstuvxyz", 
    "0123456789"                 
  ]
  const r = new Array(length).fill(0).map(()=>{
    let i = get_rnd(0,1) 
    let str = ar[i]
    str = get_rnd(0,1) ? str.toUpperCase() : str 
    const max = str.length - 1 
    i = get_rnd(0, max)
    return str.split("")[i]
  }).join("")
  return r
}