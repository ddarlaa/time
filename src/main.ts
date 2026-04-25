import { DateTime } from "luxon";

const FORMAT = "dd.LL.y HH:mm:ss";
const el = document.getElementById("clock") as HTMLHeadingElement;

function tick() {
  const now = DateTime.now();
  el.textContent = now.toFormat(FORMAT);
}

tick();
setInterval(tick, 1000);