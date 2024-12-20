
import { dataPortfolio } from "@/data";

import PortfolioBox from "@/components/portfolio-box";


const PortfolioPage = () => {

    return (
      <div className="flex items-center justify-center">
            <div className="flex flex-col justify-center  mt-28 md:mt-6  h-1/4">
                <h1 className="text-2xl leading-tight text-center md:text-3xl md:mb-5">Mis proyectos</h1>

                <div className="text-center relative z-10 grid max-w-5xl gap-5 mx-auto mt-1 md:grid-cols-3">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
            </div>
    );
}

export default PortfolioPage;