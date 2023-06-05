import styles from '@/styles/headers.module.css';

export const Search = () => {
  return (
    <div className="w-1/2 border border-white bg-white rounded-full pl-6 h-10 flex items-center justify-between">
      <input type="text" name="search" className={styles.inputSearch} />
      <button
        type="button"
        className=" w-36 border rounded-full bg-sky-200 text-black h-full font-semibold"
      >
        Pesquisar
      </button>
    </div>
  );
};
