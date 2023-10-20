export default function formatDate(date: Date) {
  const now = new Date();
  const oneWeek = 604800000;
  const isThisWeek = now.getTime() - date.getTime() <= oneWeek;

  return isThisWeek
    ? `${date.toLocaleString("en", {
        weekday: "long",
      })} at ${date.toLocaleString("en", {
        hour: "numeric",
        minute: "numeric",
      })}`
    : date.toLocaleString("en", {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
      });
}
