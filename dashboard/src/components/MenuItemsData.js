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
        },
        {
          title: 'Diário',
        }
      ]
    },
    {
      title: 'Gestão',
      icon: <BsInboxes />,
      submenu: [
        {
          title: 'Cadastro de Colaboradores',
        }
      ]
    },
    {
      title: 'Financeiro',
      icon: <BsCashCoin />,
      submenu: [
        {
          title: 'Despesas fixas e variáveis',
        }
      ]
    },
    {
      title: 'Coletas',
      icon: <TbTruckDelivery />,
      submenu: [
        {
          title: 'Dashboard Coletas',
        },
        {
          title: 'Gestão Coletas',
        }
      ]
    },
    {
      title: 'Entregas',
      icon: <RiMotorbikeLine />,
      submenu: [
        {
          title: 'Dashboard Entregas'
        },
        {
          title: 'Gestão Entregas'
        }
      ]
    },
    {
      title: 'Suporte',
      icon: <BiSupport />,
      submenu: [
        {
          title: 'Suporte ao Cliente'
        },
        {
          title: 'Suporte ao Motoboy'
        }
      ]
    }
  ];

  export const menuItemsSettingsExit = [
    {
      title: 'Ajustes',
      icon: <TbAdjustmentsHorizontal />,
      submenu: [
        {
          title: 'Mensal',
        },
        {
          title: 'Diário',
        }
      ]
    },
    {
      title: 'Sair',
      icon: <ImExit />,
      submenu: [
        {
          title: 'Cadastro de Colaboradores',
        }
      ]
    }
  ];

