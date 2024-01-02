import Whatsapp from "../components/icons/Whatsapp"

const Home = () => {
  return (
    <section className="h-[510px] text-dark w-full  flex flex-col items-center justify-center gap-4 custom-gradient">
      <h1 className="text-4xl custom-font">Dra. Melisa Gutierrez</h1>

      <img src="portada.png" alt="portada" className="w-80 h-80 rounded-full object-cover shadow-2xl" />
      <Whatsapp/>
    </section>
  )
}

export default Home