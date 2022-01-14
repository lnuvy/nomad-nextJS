// /movies/:id 와 같은 효과 

import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  )
}


// SEO 방식
export function getServerSideProps({params:{params}}) {
  return {
    props: {
      params,
    },
  }
}