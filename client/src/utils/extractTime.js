export function extractTime(date) {
  const time = new Date(date);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${hours}:${minutes}`; 
}

// helper function to pad zero to single digit numbers
function padZero(num) {
  return num.toString().padStart(2, '0');
}