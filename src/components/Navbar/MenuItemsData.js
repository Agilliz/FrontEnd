
import { PiChartBar } from "react-icons/pi";
import { BsInboxes } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { RiMotorbikeLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { ImExit } from "react-icons/im";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


export const menuItemsData = [
    {
      title: 'Dashboards',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
      <path stroke="currentColor"fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
    </svg>,
      submenu: [
        {
          title: 'Coletas',
          urlNavigate: "/dashboard-coletas"
        },
        {
             title: 'Entregas',
          urlNavigate: "/dashboard-entregas"
        },
        {
          title: 'Financeira',
          urlNavigate: "/"
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
          title: 'Despesas',
          urlNavigate: "/despesas"
        }
      ]
    },
    {
      title: 'Coletas',
      icon: <TbTruckDelivery />,
      submenu: [
        {
          title: 'Gestão Coletas',
          urlNavigate: "/gestao-coletas"
        }
      ]
    },
    {
      title: 'Entregas',
      icon: <svg fill="currentColor" height="18" width="18" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 490.001 490.001">
   <path strokeWidth={16} stroke="currentColor" d="M410.689,235.919c-14.154,0-27.443,3.744-38.96,10.268l-20.528-27.251c26.069-19.054,52.85-27.796,55.161-28.526
     c2.881-0.916,5.223-3.034,6.424-5.794c1.201-2.769,1.15-5.925-0.153-8.644c-35.267-73.853-89.95-80.237-92.262-80.472
     c-4.429-0.438-8.471,1.853-10.394,5.732c-1.935,3.889-1.253,8.563,1.699,11.749c6.486,6.964,9.173,14.499,8.207,23.04
     c-0.418,3.72-1.502,7.509-3.085,11.297c-59.498-19.458-97.449,8.263-110.85,20.886c-33.22-11.701-63.089-17.613-89.272-17.613
     c-40.358,0-57.371,14.273-59.183,15.903c-2.952,2.656-4.144,6.77-3.055,10.599c1.09,3.828,4.256,6.698,8.165,7.412
     c38.377,6.954,65.206,20.062,83.918,35.579l-24.247,28.524c-12.389-8.014-27.131-12.689-42.953-12.689
     C35.583,235.919,0,271.502,0,315.232c0,43.738,35.583,79.321,79.322,79.321c43.738,0,79.322-35.583,79.322-79.321
     c0-20.417-7.76-39.054-20.482-53.127l23.244-27.344c33.791,39.865,26.9,87.054,26.418,90.061c-0.51,3.023,0.346,6.108,2.331,8.45
     c1.975,2.342,4.887,3.685,7.952,3.685h93.239c3.044,0,5.947-1.334,7.921-3.645c1.985-2.321,2.851-5.387,2.382-8.399
     c-6.43-40.978,11.064-71.267,33.506-92.626l19.928,26.455c-14.626,14.395-23.715,34.398-23.715,56.489
     c0,43.738,35.583,79.321,79.322,79.321c43.729,0,79.311-35.583,79.311-79.321C490.001,271.502,454.418,235.919,410.689,235.919z
      M305.611,165.692c-10.235,13.117-23.696,24.748-32.785,31.59c-15.446-7.856-30.35-14.726-44.694-20.611
     C241.759,166.856,267.735,154.879,305.611,165.692z M137.792,315.232c0,32.243-26.226,58.47-58.471,58.47
     c-32.243,0-58.471-26.227-58.471-58.47c0-32.234,26.228-58.462,58.471-58.462c10.673,0,20.677,2.888,29.299,7.901l-37.24,43.81
     l15.883,13.5l37.242-43.811C132.804,288.265,137.792,301.176,137.792,315.232z M279.708,316.106h-70.433
     c0.662-30.634-7.748-110.953-108.848-143.666c4.755-0.622,10.162-0.998,16.249-0.998c27.969,0,77.082,8.206,152.251,47.28
     c3.38,1.763,7.482,1.549,10.659-0.631c2.301-1.557,56.373-38.689,61.017-79.708c0.56-4.898,0.417-9.652-0.408-14.224
     c14.101,7.595,32.651,22.338,48.432,50.713C357.483,187.844,274.16,230.707,279.708,316.106z M410.689,373.702
     c-32.244,0-58.47-26.227-58.47-58.47c0-15.289,5.907-29.22,15.551-39.648l34.592,45.919l16.656-12.543l-34.6-45.931
     c7.905-3.993,16.826-6.259,26.272-6.259c32.234,0,58.46,26.228,58.46,58.462C469.15,347.475,442.923,373.702,410.689,373.702z"/>
   </svg>,
      submenu: [
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
