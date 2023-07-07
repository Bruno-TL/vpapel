import { Canecas } from './Produto/Canecas';
import { Adesivos } from './Produto/Adesivos';
import { Brindes } from './Produto/Brindes';
import { Camisas } from './Produto/Camisas';
import { Papelaria } from './Produto/Papelaria';
import { CamisasCustom } from './Produto/CamisasCustom';
import { Embalagem } from './Produto/Embalagem';
import { ProdutosDigitais } from './Produto/ProdutosDigitais';

export default function Produtos() {
  return (
    <section className="bg-white border rounded-md pb-10">
      <div className="my-6 pl-5">
        <h1 className="text-2xl">Produtos populares</h1>
      </div>
      <section className="mx-5">
        <div className="w-full grid gap-4 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2">
          <Canecas />
          <Adesivos />
          <Brindes />
          <Camisas />
          <Papelaria />
          <CamisasCustom />
          <Embalagem />
          <ProdutosDigitais />
        </div>
      </section>
    </section>
  );
}
