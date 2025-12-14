function timeAgo(date) {
  const now = new Date();
  const diff = (now.getTime() - new Date(date).getTime()) / 1000;

  const units = [
    { name: "year", secs: 60 * 60 * 24 * 365 },
    { name: "month", secs: 60 * 60 * 24 * 30 },
    { name: "day", secs: 60 * 60 * 24 },
    { name: "hour", secs: 60 * 60 },
    { name: "minute", secs: 60 },
    { name: "second", secs: 1 },
  ];

  for (const unit of units) {
    const value = Math.floor(diff / unit.secs);
    if (value >= 1) {
      return `${value} ${unit.name}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export default timeAgo;
