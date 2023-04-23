export const templateTypes = ['default', 'ekman'] as const;

export type TemplateTypes = (typeof templateTypes)[number];

type DictionaryMap = Record<(typeof templateTypes)[number], DictionaryMapProperties>;

type DictionaryMapProperties = {
	startRow: number;
	sheetName: string;
	mappings: DictionaryRow;
};

export interface Row {
	sku_id?: string;
	name: string;
	other_name?: string;
	barcode?: string;
	brand_id?: string;
	brand_name: string;
	category_id: string;
	alias?: string;
	availability?: string;
	status?: string;
	packaging?: string;
	packaging_amount: string;
	basic_harga_normal: string;
	basic_harga_diskon?: string;
	basic_tanggal_kadaluarsa?: string;
	gold_harga_normal?: string;
	gold_harga_diskon?: string;
	gold_tanggal_kadaluarsa?: string;
	src_harga_normal?: string;
	src_harga_diskon?: string;
	src_tanggal_kadaluarsa?: string;
}

export interface DictionaryRow {
	sku_id?: string;
	name?: string;
	other_name?: string;
	barcode?: string;
	brand_id?: string;
	brand_name?: string;
	category_id?: string;
	alias?: string;
	availability?: string;
	status?: string;
	packaging?: string;
	packaging_amount?: string;
	basic_harga_normal?: string;
	basic_harga_diskon?: string;
	basic_tanggal_kadaluarsa?: string;
	gold_harga_normal?: string;
	gold_harga_diskon?: string;
	gold_tanggal_kadaluarsa?: string;
	src_harga_normal?: string;
	src_harga_diskon?: string;
	src_tanggal_kadaluarsa?: string;
}

export const dictionary: DictionaryMap = {
	default: {
		startRow: 2,
		sheetName: 'product',
		mappings: {
			sku_id: 'a',
			name: 'b',
			other_name: 'c',
			barcode: 'd',
			brand_id: 'e',
			brand_name: 'f',
			category_id: 'g',
			alias: 'h',
			availability: 'i',
			status: 'j',
			packaging: 'k',
			packaging_amount: 'l',
			basic_harga_normal: 'm',
			basic_harga_diskon: 'n',
			basic_tanggal_kadaluarsa: 'o',
			gold_harga_normal: 'p',
			gold_harga_diskon: 'q',
			gold_tanggal_kadaluarsa: 'r',
			src_harga_normal: 's',
			src_harga_diskon: 't',
			src_tanggal_kadaluarsa: 'u'
		}
	},
	ekman: {
		startRow: 1,
		sheetName: 'daftarprodukekman',
		mappings: {
			sku_id: 'kodebarang',
			name: 'namabarang',
			packaging: 'satuan1',
			basic_harga_normal: 'hjsual1'
		}
	}
};

export const header: DictionaryRow = {
	sku_id: 'jika menambah baru sku id di kosongkan. Mohon untuk tidak mengubah data sku id',
	name: '(WAJIB DIISI) panjang maksimal karakter adalah 191',
	other_name:
		'nama yang ditampilkan pada aplikasi toko dan nota belanja, panjang maksimal karakter adalah 191',
	barcode: 'panjang maksimal karakter adalah 191',
	brand_id:
		'silahkan pilih dari sheet brand atau jika dikosongkan akan menggunakan kolom brand_name',
	brand_name: '(WAJIB DIISI) \n panjang maksimal karakter adalah 191',
	category_id: '(WAJIB DIISI) \n silahkan pilih dari sheet category',
	alias:
		'bisa menambahkan beberapa alias dengan menggunakan koma. panjang maksimal karakter adalah 1000',
	availability: '(WAJIB DIISI) \n in-stock(1) / out-of-stock(0)',
	status: '(WAJIB DIISI) \n active / inactive',
	packaging: '(WAJIB DIISI)',
	packaging_amount: '(WAJIB DIISI) satuan dari packaging',
	basic_harga_normal: '(WAJIB DIISI) harga normal',
	basic_harga_diskon: 'harga diskon',
	basic_tanggal_kadaluarsa: 'tanggal kadaluarsa harga diskon. format: DD-MM-YYYY',
	gold_harga_normal: 'harga normal',
	gold_harga_diskon: 'harga diskon',
	gold_tanggal_kadaluarsa: 'tanggal kadaluarsa harga diskon. format: DD-MM-YYYY',
	src_harga_normal: 'harga normal',
	src_harga_diskon: 'harga diskon',
	src_tanggal_kadaluarsa: 'tanggal kadaluarsa harga diskon. format: DD-MM-YYYY'
};
