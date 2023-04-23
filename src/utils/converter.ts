import { dictionary, header, type DictionaryRow, type TemplateTypes } from '$utils/dictionary';
import { utils, writeFile, type WorkBook } from 'xlsx';

export class Converter {
	_wb: WorkBook;
	_templateName: TemplateTypes;
	_mappings: DictionaryRow;
	_sheet: any[];

	constructor(wb: WorkBook, templateName: TemplateTypes) {
		this._wb = wb;
		this._templateName = templateName;
		this._mappings = dictionary[templateName].mappings;
		this._sheet = utils.sheet_to_json<any>(wb.Sheets[dictionary[templateName].sheetName]);
	}

	mapRow(row: any): DictionaryRow {
		const mappings = this._mappings;
		return {
			sku_id: mappings.sku_id ? row[mappings.sku_id] : '',
			name: mappings.name ? row[mappings.name] : '',
			other_name: mappings.other_name ? row[mappings.other_name] : '',
			barcode: mappings.barcode ? row[mappings.barcode] : '',
			brand_id: mappings.brand_id ? row[mappings.brand_id] : '',
			brand_name: mappings.brand_name ? row[mappings.brand_name] : '',
			category_id: mappings.category_id ? row[mappings.category_id] : '',
			alias: mappings.alias ? row[mappings.alias] : '',
			availability: mappings.availability ? row[mappings.availability] : '',
			status: mappings.status ? row[mappings.status] : '',
			packaging: mappings.packaging ? row[mappings.packaging] : '',
			packaging_amount: mappings.packaging_amount ? row[mappings.packaging_amount] : '',
			basic_harga_normal: mappings.src_harga_normal ? row[mappings.src_harga_normal] : '',
			basic_harga_diskon: mappings.basic_harga_diskon ? row[mappings.basic_harga_diskon] : '',
			basic_tanggal_kadaluarsa: mappings.basic_tanggal_kadaluarsa
				? row[mappings.basic_tanggal_kadaluarsa]
				: '',
			gold_harga_normal: mappings.gold_harga_normal ? row[mappings.gold_harga_normal] : '',
			gold_harga_diskon: mappings.gold_harga_diskon ? row[mappings.gold_harga_diskon] : '',
			gold_tanggal_kadaluarsa: mappings.gold_tanggal_kadaluarsa
				? row[mappings.gold_tanggal_kadaluarsa]
				: '',
			src_harga_normal: mappings.src_harga_normal ? row[mappings.src_harga_normal] : '',
			src_harga_diskon: mappings.src_harga_diskon ? row[mappings.src_harga_diskon] : '',
			src_tanggal_kadaluarsa: mappings.src_tanggal_kadaluarsa
				? row[mappings.src_tanggal_kadaluarsa]
				: ''
		};
	}

	async processSheet(): Promise<DictionaryRow[]> {
		return this._sheet.map((row) => this.mapRow(row));
	}

	async saveFile(
		obj: DictionaryRow[],
		fileName: string = 'converted',
		compression: boolean = true
	): Promise<void> {
		const newWb = utils.book_new();
		const ws = utils.json_to_sheet(obj);
		ws.utils.book_append_sheet(newWb, ws, 'product');
		await writeFile(newWb, fileName, { compression });
	}

	addHeader(obj: DictionaryRow[]) {
		obj.unshift(header);
	}
}
