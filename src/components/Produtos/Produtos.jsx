import { Produto } from './Produto';

export default function Produtos() {
  return (
    <section className="bg-white border rounded-md pb-10">
      <div className=" md:flex items-center justify-between my-6 px-5 ">
        <h1 className="text-2xl">Produtos populares</h1>
        <p className="text-xs">
          TODOS OS PRODUTOS DA LOJA SÃO FEITOS SOB ENCOMENDA. VERIFIQUE SEMPRE O TEMPO DE PRODUÇÃO
          <br></br>
          AO FALAR COM O PRODUTOR.
        </p>
      </div>
      <section className="mx-5">
        <div className="w-full grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <Produto />
        </div>
      </section>
    </section>
  );
}
