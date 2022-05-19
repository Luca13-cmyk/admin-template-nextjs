import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  const router = useRouter();
  function renderizarLink() {
    return (
      <a
        className={`flex
        flex-col justify-center items-center
        text-gray-600
        h-20 w-20 
        dark:text-gray-200
        ${props.className}
        
        `}
      >
        {props.icone}
        <span
          className={`
          text-xs
          font-light
          
          `}
        >
          {props.texto}
        </span>
      </a>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`
    hover:bg-gray-100
    dark:hover:bg-gray-800
    cursor-pointer
    ${router.pathname == props.url ? "bg-gray-100 dark:bg-gray-800" : ""}
  `}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
