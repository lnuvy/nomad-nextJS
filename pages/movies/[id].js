// /movies/:id 와 같은 효과 

import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return "detail";
}