export default function chunkArray (myArray, chunkSize) {
  let results = [];

  while (myArray.length) {
    results.push (myArray.splice (0, chunkSize));
  }

  return results;
}
