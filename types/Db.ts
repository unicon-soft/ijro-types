export class Db {
  id: string;
  name_ru: string;
  name_uz: string;
  text: string;
  short_name_ru: string;
  short_name_uz: string;
  address: string;
  phone: string;

  constructor(params) {
    const {id, name_ru, name_uz, text, short_name_ru, short_name_uz, address, phone} = params;
    this.id = id;
    this.name_ru = name_ru;
    this.name_uz = name_uz;
    this.text = text;
    this.short_name_ru = short_name_ru;
    this.short_name_uz = short_name_uz;
    this.address = address;
    this.phone = phone;
  }
}

