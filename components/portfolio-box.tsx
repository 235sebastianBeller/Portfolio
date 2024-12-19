import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
        urlDemo: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { id, title, image, urlDemo, urlGithub } = data

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl text-center" 
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={180} height={180} className="inline w-full md:w-[150px] rounded-2xl d-"
            />

            <div className="flex justify-center gap-5 mt-3">
            <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-colortxt hover:bg-colortxt/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-colortxt hover:bg-colortxt/80"
                >
                    Live demo
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox