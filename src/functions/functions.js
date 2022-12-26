
//get random indexes for comparison questions
export const getIndexes = (res, type) => {
  if (type === "album") res = res["topalbums"]["album"]
  else if (type === "artist") res = res["topartists"]["artist"]
  else if (type === "song") res = res["toptracks"]["track"]

  const index1 = Math.floor(Math.random() * res.length)

  //comentar isso
  const min = index1 - 3
  let max = index1 + 3

  if (max > res.length) max = res.length

  let index2 = index1
  while (index2 === index1) index2 = Math.floor(Math.random() * (max - min) + min)

  return [index1, index2]
}
