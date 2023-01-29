//API.js;
export const generateRandomDate = () => {
  const currentDate = new Date();
  const randomDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    Math.floor(Math.random() * 31) + 1
  );
  return randomDate.toISOString().slice(0, 10);
};
export const generateRandomTime = (num) => {
  let availableTimes = [];
  for (let i = 0; i < num; i++) {
    const hours = Math.floor(Math.random() * 6) + 17;
    const minutes = Math.floor(Math.random() * 60);
    availableTimes.push(`${hours}:${minutes}`);
  }
  return availableTimes;
};
export const AvailableTimes = async (date) => {
  const num = Math.floor(Math.random() * 10) + 1;
  const availableTimes = generateRandomTime(num);
  return availableTimes;
};
export default AvailableTimes;
