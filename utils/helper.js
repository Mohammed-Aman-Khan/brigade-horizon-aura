export const titleToKebabCase = (title) => {
  return title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};
