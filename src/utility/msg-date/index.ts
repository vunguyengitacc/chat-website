export const getTimeWithDistance = (current: Date, next: Date) => {
  if (next !== undefined) {
    const distance = next.getTime() - current.getTime();
    if (distance < 1000 * 60 * 10) return "";
  }
  return getTimeDistance(current);
};

export const getTimeDistance = (date: Date) => {
  let now = new Date();
  const distance = now.getTime() - date.getTime();
  if (distance < 1000 * 60) return `${Math.round(distance / 1000)} seconds ago`;
  if (distance < 1000 * 60 * 60)
    return `${Math.round(distance / (1000 * 60))} minutes ago`;
  if (distance < 1000 * 60 * 60 * 24)
    return `${Math.round(distance / (1000 * 60 * 60))} hours ago`;
  if (distance < 1000 * 60 * 60 * 24 * 7)
    return `${Math.round(distance / (1000 * 60 * 60 * 24))} days ago`;
  else
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
};
