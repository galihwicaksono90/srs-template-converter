import type { WorkBook } from 'xlsx';
import { Converter } from './converter';
import type { DictionaryRow, TemplateTypes } from './dictionary';

export interface BaruTemplate extends Record<string, string> {
	kodebarang: 'KODE_BARANG';
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

export default class Baru extends Converter {
	constructor(wb: WorkBook, templateName: TemplateTypes) {
		super(wb, templateName);
	}

	async processSheet(): Promise<DictionaryRow[]> {
		const newRows = this._sheet.map((row) => this.mapRow(row));

		this.addHeader(newRows);

		await this.saveFile(newRows);

		return newRows;
	}
}
