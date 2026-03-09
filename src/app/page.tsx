import { Header } from "../components/Header";


export default async function HomePage() {

  console.log('HomePage')

  return(
    <div>
      <Header />
    </div>
  )
}


// page.tsx = index.html
// app/page.tsx -> /
// app aa/about/page.tsx -> /about
