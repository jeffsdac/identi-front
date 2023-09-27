import Form from "@/components/Form";
import NavBar from "@/components/navBar";


export default function Home() {
  return (
  <>
  <NavBar active={'/'}/>
  <main className="flex justify-center">
    <Form></Form>
  </main>
   </>
  )
}
