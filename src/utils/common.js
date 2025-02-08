  /**
   * File yang berisi kumpulan pure functions yang hanya menerima parameter, 
   * memprosesnya, dan mengembalikan hasil tanpa efek samping
   * 
   * Fungsi dalam file ini:
   * - Tidak mengubah state global atau variabel luar (immutable)
   * - Selalu menghasilkan output yang sama untuk input yang sama (deterministic)
   * 
   * Gunakan file ini hanya untuk fungsi-fungsi murni yang dapat digunakan kembali.
   */
  
  import _ from "lodash";
   
  export const ifEmpty = (val, fallback = "" )  => {
    return _.isEmpty(val) ? fallback : val;
  }
    