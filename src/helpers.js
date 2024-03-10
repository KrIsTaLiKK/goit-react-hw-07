export const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16733259)
    .toString(16)
    .padStart(6, 0)}`;
};
