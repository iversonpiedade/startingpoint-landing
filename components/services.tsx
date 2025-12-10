"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Code2, Paintbrush, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const items = [
    {
      title: "Engenharia de Elite",
      description: "Arquiteturas escaláveis com Next.js, TypeScript e soluções Cloud Native.",
      header: (
         <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center border border-slate-200">
            <Code2 className="w-16 h-16 text-neon-blue opacity-50" />
         </div>
      ),
      icon: <Code2 className="h-4 w-4 text-neon-blue" />,
      className: "md:col-span-2",
    },
    {
      title: "Design de Produto",
      description: "UX/UI Premium que converte utilizadores em clientes.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center border border-slate-200">
            <Paintbrush className="w-16 h-16 text-pink-500 opacity-50" />
        </div>
      ),
      icon: <Paintbrush className="h-4 w-4 text-pink-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Venture Building",
      description: "Do Zero ao Um. Estratégia, Growth e Market Fit para Startups.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 items-center justify-center border border-slate-200">
            <Rocket className="w-16 h-16 text-cyber-purple opacity-50" />
        </div>
      ),
      icon: <Rocket className="h-4 w-4 text-cyber-purple" />,
      className: "md:col-span-3",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white px-4 md:px-0 scroll-mt-24">
      <div className="max-w-7xl mx-auto mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 mb-4">
          Nossos Serviços
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto">
          Expertise multidisciplinar para produtos digitais de impacto.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
         <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, i) => (
                <div key={i} className={item.className}>
                     <CardContainer className="py-0 h-full" containerClassName="py-0 h-full block">
                       <CardBody className="w-full h-full relative group/card border-white/40 bg-white/60 backdrop-blur-xl border rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all hover:bg-white/70">
                          <CardItem
                            translateZ="50"
                            className="w-full mt-4"
                          >
                            {item.header}
                          </CardItem>
                          <div className="mt-8">
                            <CardItem
                                translateZ="60"
                                className="text-xl font-bold text-slate-800"
                            >
                                {item.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="50"
                                className="text-slate-600 text-sm max-w-sm mt-2"
                            >
                                {item.description}
                            </CardItem>
                             <CardItem translateZ="40" className="mt-4">
                                {item.icon}
                             </CardItem>
                          </div>
                       </CardBody>
                    </CardContainer>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};
