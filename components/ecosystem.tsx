import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Convite Digital",
    description: "Soluções digitais modernas para eventos e celebrações.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 items-center justify-center">
        <Image src="/partners/convite.png" alt="Convite Digital" width={150} height={150} className="object-contain grayscale brightness-0 opacity-70 hover:opacity-100 transition-all duration-300" />
      </div>
    ),
    icon: <ArrowUpRight className="h-4 w-4 text-neutral-500" />,
    href: "https://convitedigital.ao",
    className: "md:col-span-1",
  },
  {
    title: "Sky Business Hub",
    description: "O seu parceiro estratégico para negócios em Angola.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 items-center justify-center">
        <Image src="/partners/sbhub.png" alt="SBHub" width={150} height={150} className="object-contain grayscale brightness-0 opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300" />
      </div>
    ),
    icon: <ArrowUpRight className="h-4 w-4 text-neutral-500" />,
    href: "https://sbhub.ao",
    className: "md:col-span-1",
  },
  {
    title: "Chinaexpress.ao",
    description: "Serviços de logística e importação rápidos e seguros.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 items-center justify-center">
        <Image src="/partners/china.png" alt="China Express" width={150} height={150} className="object-contain grayscale brightness-0 opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300" />
      </div>
    ),
    icon: <ArrowUpRight className="h-4 w-4 text-neutral-500" />,
    href: "https://chinaexpress.ao",
    className: "md:col-span-1",
  },
  {
    title: "Sanjila",
    description: "Call Center Inteligente com IA disponível 24/24h para o seu negócio.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 items-center justify-center">
        <div 
          className="w-[150px] h-[150px] bg-black opacity-70 hover:opacity-100 hover:bg-[#28145d] transition-all duration-300 mask-center"
          style={{
            maskImage: `url('/partners/sanjila.png')`,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskImage: `url('/partners/sanjila.png')`,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center'
          }}
        />
      </div>
    ),
    icon: <ArrowUpRight className="h-4 w-4 text-neutral-500" />,
    href: "https://sanjila.vercel.app/",
    className: "md:col-span-2",
  },
  {
    title: "Morada Certa",
    description: "Encontre o imóvel dos seus sonhos com facilidade.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 items-center justify-center">
        <Image src="/partners/morada.png" alt="Morada Certa" width={150} height={150} className="object-contain grayscale brightness-0 opacity-70 hover:filter-none hover:opacity-100 transition-all duration-300" />
      </div>
    ),
    icon: <ArrowUpRight className="h-4 w-4 text-neutral-500" />,
    href: "https://www.instagram.com/moradacerta.ao/",
    className: "md:col-span-1",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 mb-4">
            Nosso Ecossistema
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
            Conheça as startups e empresas que impulsionamos com tecnologia e inovação.
          </p>
        </div>
        
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <Link key={i} href={item.href} target="_blank" className={item.className}>
              <BentoGridItem
               title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="h-full hover:shadow-xl transition-shadow border-slate-200/60"
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
