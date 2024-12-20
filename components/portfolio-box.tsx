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
            className="p-4 border border-teal-50 rounded-xl text-center h-auto" 
        >
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image
                src={image}
                alt="Image"
                width={200} height={200} className="inline w-3/4 md:w-[200px] rounded-2xl h-32"
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
                    Demo
                </Link>
            </div>
        </div>
    );
}

export default PortfolioBox