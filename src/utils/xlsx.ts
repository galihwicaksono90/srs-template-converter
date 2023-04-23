import { read } from 'xlsx';
import type { TemplateTypes } from '$utils/dictionary';
import type { Converter } from './converter';
import Ekman from './ekman';

export async function processNow(file: File, templateName: TemplateTypes) {
  let converter: Converter | null;

  const worbook = read(await file.arrayBuffer());

  switch (templateName) {
    case 'ekman':
      converter = new Ekman(worbook, templateName);
      break;
    default:
      converter = null;
      break;
  }

  if (!converter) {
    return;
  }

  console.log(await converter.processSheet());
}
