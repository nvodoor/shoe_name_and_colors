import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1200,
  duration: "20s",
};

export default function () {
  http.get("http://localhost:3006/:307088-195/colors");
  sleep(1);
};