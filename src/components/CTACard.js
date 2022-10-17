
export default function CTACard({ ...props }) {
  const {details}=props;
    return (
        <div className="flex flex-col w-full shadow-sm hover:transition hover:duration-500 hover:-translate-y-3 cursor-pointer">
            <img className="object-fill h-48" src={details.ctaImage} alt="ctaImage-alt"/>
            <div className="flex flex-col p-8 text-center">
                <div className="text-2xl font-bold px-8">{details.title}</div>
                <p className="py-4">{details.description}</p>
            </div>
        </div>
    )
}