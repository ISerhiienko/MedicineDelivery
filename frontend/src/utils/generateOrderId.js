export const generateOrderId = () => {
  const now = new Date();
  const timestamp = now.getTime();
  const randomChars = Math.random().toString(36).substring(2, 5);
  return `${timestamp}-${randomChars}`;
};
