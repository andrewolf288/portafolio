import { useEffect, useState } from "react";
import BootstrapReact from "./icons/react/BootstrapReact";
import DjangoReact from "./icons/react/DjangoReact";
import JavaScriptReact from "./icons/react/JavaScriptReact";
import LaravelReact from "./icons/react/LaravelReact";
import PhpReact from "./icons/react/PhpReact";
import ReactReact from "./icons/react/ReactReact";
import TailwindReact from "./icons/react/TailwindReact";
import ModalProjectDetail from "./ModalProjectDetail";

// TAGS de iconos
const TAGS = {
  TAILWIND: {
    name: "Tailwind CSS",
    classIcon: "bg-[#003159] text-white",
  },
  PHP: {
    name: "PHP",
    classIcon: "bg-[#7B7FB5] text-white",
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    classIcon: "bg-[#ca3cfa] text-white",
  },
  REACT: {
    name: "React JS",
    classIcon: "bg-[#424aeb] text-white",
  },
  DJANGO: {
    name: "Django",
    classIcon: "bg-[#007022] text-white",
  },
  LARAVEL: {
    name: "Laravel",
    classIcon: "bg-[#f56969] text-white",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    classIcon: "bg-[#f7df1e] text-black",
  },
};

// informacion de proyectos
const PROJECTS = [
  {
    title: "EMAPROD - Sistema logístico y productivo de rubro agroindustrial",
    description:
      "Sistema de logística y productividad para empresa agroindustrial. Integración con software de facturación y compras. Creada con PHP, Bootstrap y React.",
    detail: true,
    features: [
      "Manejo de stock por FIFO (First In First Out)",
      "Planificación de lotes de producción",
      "Reportes de trazabilidad de lotes",
      "Reportes de evaluaciones de calidad de entradas de stock",
      "Reporte de materias primas, envases y embalajes por lote de producción",
    ],
    images: [
      "/projects/emaprod/lote-detail.png",
      "/projects/emaprod/stock-almacenes.png",
      "/projects/emaprod/inputs-stock.png",
      "/projects/emaprod/excel-detail-lote.png",
      "/projects/emaprod/pdf-detail-lote.png",
      "/projects/emaprod/inputs-quality-detail.png",
    ],
    tags: [TAGS.PHP, TAGS.BOOTSTRAP, TAGS.REACT],
  },
  {
    title: "CRM PORTILLO - Sistema CRM inmobiliario personalizado",
    description:
      "Sistema CRM inmobiliario personalizado para gestión y seguimiento de leads, oportunidades y clientes. Creada con Django, Tailwind CSS y React.",
    detail: true,
    features: [
      "Gestión de campañas de marketing",
      "Gestión de leads, asignación, importación y actualización de datos",
      "Gestión de eventos por medio de interfaz de calendario",
      "Reportes personalizados de leads y oportunidades",
      "Gestión de usuarios y roles (autenticación y autorización)"
    ],
    images: [
      "/projects/portillo/eventos-calendar.png",
      "/projects/portillo/home.png",
      "/projects/portillo/reporte2.png",
      "/projects/portillo/reporte3.png",
      "/projects/portillo/campañas.png",
    ],
    tags: [TAGS.DJANGO, TAGS.TAILWIND, TAGS.REACT],
  },
  {
    title: "SIMAC - Sistema cursos y certificación de cisternas",
    description:
      "Sistema de capacitación de cursos y certificación de cisternas. Creada con Laravel, Tailwind CSS y React",
    detail: true,
    features: [
      "Gestión de cotizaciones de cursos y certificaciones de cisternas",
      "Gestión de certificaciones de cisternas por supervisores",
      "Exportación de certificados en formato PDF alineados a estándares de calidad",
      "Gestión de pagos con integración con sistema de facturación",
      "Exportación de PDF de cotización",
      "Integración con Moodle"
    ],
    images: [
      "/projects/simac/cotizacion-cursos.png",
      "/projects/simac/cotizacion-cisternas.png",
      "/projects/simac/lista-certificaciones.png",
      "/projects/simac/export-pdf-certificados.png",
      "/projects/simac/export-pdf-cotizacion.png",
      "/projects/simac/gestion-maestros.png",
    ],
    tags: [TAGS.LARAVEL, TAGS.BOOTSTRAP, TAGS.JAVASCRIPT],
  },
  {
    title: "FAMAI - Sistema ERP para empresa de mantenimiento industrial y minero",
    description:
      "Sistema para la gestión lógistica y mantenimiento integrado con otros sistemas como SAP Bussines One. Creada con Laravel, Vanilla JS y Bootstrap.",
    detail: true,
    features: [
      "Gestión de ordenes de trabajo",
      "Exportación de orden de trabajao en PDF alineado a estándar ISO",
      "Integración con SAP Bussines One y otros sistemas a través de procedimientos almacenados",
      "Gestión de usuarios y roles (autorización y autenticación)",
      "Manejo de Jobs para automatización de integraciones",
      "Gestión e integración de maestros del sistema"
    ],
    images: [
      "/projects/famai/ordenes-internas.png",
      "/projects/famai/gestion-orden-interna.png",
      "/projects/famai/reporte-orden-interna.png",
      "/projects/famai/cotizacion-requerimientos.png",
      "/projects/famai/home.png",
    ],
    tags: [TAGS.LARAVEL, TAGS.TAILWIND, TAGS.REACT],
  },
  {
    title: "EMAFACT - Sistema de Facturación ",
    description: "Sistema de Facturación electrónica integrado con SUNAT y OSE para emisión de documentos electrónicos. Creada con PHP, Bootstrap y Vanilla JS.",
    detail: true,
    features: [
      "Creación y emisión de boletas de pagos por medio de OSE",
      "Creación y emisión de factura electrónica por medio de OSE",
      "Creación y emisión de guia de remisión por medio de SUNAT",
      "Creación y emisión de notas de credito y debito por medio de OSE",
      "Reportes personalizados en excel o pdf de documentos electrónicos",
    ],
    images: [
      "/projects/emafact/sales.png",
      "/projects/emafact/order-guide-create.png",
      "/projects/emafact/home.png",
      "/projects/emafact/reports.png",
    ],
    tags: [TAGS.PHP, TAGS.BOOTSTRAP, TAGS.JAVASCRIPT]
  }
];

export default function Projects() {
  const [detail, setDetail] = useState(null)

  useEffect(() => {
    console.log("detail")
  }, [])

  const handleClickDetail = (index) => {
    console.log(PROJECTS[index])
    setDetail(PROJECTS[index])
  }

  const handleCloseDetail = () => {
    setDetail(null)
  }

  return (
    <>

      <div className="flex flex-col gap-y-16">
        {
          PROJECTS.map(({ images, title, description, tags, detail }, index) => (
            <article key={index} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
              <div className="w-full md:w-1/2">
                <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    alt="Recién llegado vs 5 años en Nueva Zelanda"
                    className="object-cover object-top w-full min-h-60 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                    loading="lazy"
                    src={images[0]}
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 md:max-w-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {title}
                </h3>
                <div className="flex flex-wrap mt-2">
                  <ul className="flex flex-row mb-2 gap-x-2">
                    {tags.map((tag, index) => {
                      const { name, classIcon } = tag
                      return (
                        <li key={index}>
                          <span
                            className={`flex gap-x-2 rounded-full text-xs ${classIcon} py-1 px-2 `}
                          >
                            {name}
                          </span>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-2 text-gray-700 dark:text-gray-400">
                    {description}
                  </div>
                  <footer className="flex items-end justify-start mt-4 gap-x-4">
                    {detail && (
                      <button
                        onClick={() => { handleClickDetail(index) }}
                        className="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-up-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                          ></path>
                        </svg>
                        Ver detalles
                      </button>
                    )}
                  </footer>
                </div>
              </div>
            </article>
          ))
        }
      </div>
      {
        detail &&
        <ModalProjectDetail
          detail={detail}
          onClose={handleCloseDetail}
        />
      }
    </>
  )
}