import { CanecasData } from '@/data/canecasData';
import { AdesivoData } from '@/data/adesivosData';
import { BrindesData } from '@/data/brindesData';
import { CamisasCustomData } from '@/data/camisasCustomData';
import { Camisas } from '@/data/camisasData';
import { EmbalagemData } from '@/data/embalagemData';
import { PapelariaData } from '@/data/papelariaData';
import { ProdutosDigitaisData } from '@/data/produtosDigitaisData';

export default function Produtos() {
  const canecas = CanecasData();
  const adesivos = AdesivoData();
  const brindes = BrindesData();
  const camisasCustom = CamisasCustomData();
  const camisas = Camisas();
  const embalagem = EmbalagemData();
  const papelaria = PapelariaData();
  const produtosDigitais = ProdutosDigitaisData();

  return <div>Produtos</div>;
}
