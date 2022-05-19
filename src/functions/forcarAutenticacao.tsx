import Image from "next/image";
import Router from "next/router";
import loading from "../../public/images/loading.gif";
import useAuth from "../data/hook/useAuth";
import Script from "next/script";

export default function forcarAutenticacao(jsx) {
  const { usuario, carregando } = useAuth();

  function renderizarConteudo() {
    return (
      <>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
                    if (!document.cookie?.includes("admin-template-auth")) {
                        window.location.href = "/autenticacao"
                    }
                `,
          }}
        />

        {jsx}
      </>
    );
  }

  function renderizarCarregando() {
    return (
      <div
        className={`first-letter:
                flex justify-center items-center h-screen 
            `}
      >
        <Image src={loading} />
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarCarregando();
  } else {
    Router.push("/autenticacao");
    return null;
  }
}
