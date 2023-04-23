import type { WorkBook } from 'xlsx';
import { Converter } from './converter';
import type { DictionaryRow, TemplateTypes } from './dictionary';

interface EkmanTemplate extends Record<string, string> {
	kodebarang: 'hore';
	namabarang: 'namabarang';
	hjual1: 'hjual1';
	satuan1: 'satuan1';
	hjual2: 'hjual2';
	satuan3: 'satuan3';
	hjual4: 'hjual4';
	satuan5: 'satuan5';
	hjual6: 'hjual6';
	satuan7: 'satuan7';
}

export default class Ekman extends Converter {
	constructor(wb: WorkBook, templateName: TemplateTypes) {
		super(wb, templateName);
	}

	async processSheet(): Promise<DictionaryRow[]> {
		const newRows: DictionaryRow[] = [];
		this._sheet.forEach((row: EkmanTemplate) => {
			for (let i = 1; i <= 4; i++) {
				if (row[`satuan${i}`]) {
					const newRow: DictionaryRow = {
						sku_id: row['kodebarang'],
						name: row['namabarang'],
						other_name: '',
						barcode: '',
						brand_id: '',
						brand_name: '',
						category_id: '',
						alias: '',
						availability: '',
						status: '',
						packaging: '',
						packaging_amount: '',
						basic_harga_normal: '',
						basic_harga_diskon: '',
						basic_tanggal_kadaluarsa: '',
						gold_harga_normal: '',
						gold_harga_diskon: '',
						gold_tanggal_kadaluarsa: '',
						src_harga_normal: row[`satuan{i}`],
						src_harga_diskon: row[`hjual${i}`]
					};

					newRows.push(newRow);
				}
			}
		});

		this.addHeader(newRows);

		await this.saveFile(newRows);

		return newRows;
	}
}
