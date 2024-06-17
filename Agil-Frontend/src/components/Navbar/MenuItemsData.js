
import { PiChartBar } from "react-icons/pi";
import { BsInboxes } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMotorbikeLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


export const menuItemsData = [
    {
      title: 'Dashboards',
      icon: <PiChartBar />,
      submenu: [
        {
          title: 'Mensal',
          urlNavigate: "/mensal"
        },
        {
          title: 'Diário',
          urlNavigate: "/diario"
        }
      ],
      
    },
    {
      title: 'Gestão',
      icon: <BsInboxes />,
      submenu: [
        {
          title: 'Colaboradores',
          urlNavigate: "/colaboradores"
        },
        {
          title: 'Clientes parceiros',
          urlNavigate: "/clientes-parceiros"
        }
      ]
    },
    {
      title: 'Financeiro',
      icon: <BsCashCoin />,
      submenu: [
        {
          title: 'Despesas fixas e variáveis',
          urlNavigate: "/despesas"
        }
      ]
    },
    {
      title: 'Coletas',
      icon: <TbTruckDelivery />,
      submenu: [
        {
          title: 'Dashboard Coletas',
          urlNavigate: "/dashboard-coletas"
        },
        {
          title: 'Gestão Coletas',
          urlNavigate: "/gestao-coletas"
        }
      ]
    },
    {
      title: 'Entregas',
      icon: <RiMotorbikeLine />,
      submenu: [
        {
          title: 'Dashboard Entregas',
          urlNavigate: "/dashboard-entregas"
        },
        {
          title: 'Gestão Entregas',
          urlNavigate: "/gestao-entregas"
        }
      ]
    },
    {
      title: 'Suporte',
      icon: <BiSupport />,
      submenu: [
        {
          title: 'Suporte ao Cliente',
          urlNavigate: "/suporte-cliente"
        },
        {
          title: 'Suporte ao Motoboy',
          urlNavigate: "/suporte-motoboy"
        }
      ]
    }
  ];

  export const menuItemsSettingsExit = [
    {
      title: 'Ajustes',
      icon: <TbAdjustmentsHorizontal />,
    },
    {
      title: 'Sair',
      icon: <ImExit />,
    }
  ];
