import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="home section h-screen padding-block: 100px md:flex items-center justify-center ">
        <div className="mycontainer flex flex-col items-center justify-center gap-4 md:flex-row ">
            <div className="text-center mt-3 md:initial ">
                <p className="uppercase font-[number:var(--bold-fw)] text-[color:var(--red-clr)] mt-6 mb-3 ">Commited to Excellence</p>
                <h1 className="text-[length:var(--biggest-fs)] capitalize">No case too big,</h1>
                <h1 className="text-[length:var(--biggest-fs)] capitalize leading-none mb-4 ">No case too small</h1>
                <p className="font-[number:var(--medium-fw)] text-[length:var(--normal-fs)] mb-4 "><span className="text-[color:var(--red-clr)] font-[number:var(--bold-fw)] ">You don&#39;t have to fight them alone</span>. We create solutions to your legal problems</p>
                <div className="mb-12 flex items-center justify-center gap-[5px]">
                    <Link to="/" className="button button-cta">Explore</Link>
                    <Link to="/" className="button button-cta btn">Schedule a Call</Link>
                </div>
            </div>
            <div className="home-images">
                <div className="home-orbe"></div>
                <div className="home-image">
                    <img src="./images/home.png" alt="a lawyer in a blue suit" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home