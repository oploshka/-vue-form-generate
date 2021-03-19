
export default class FieldClass {
  #field

  constructor(fileObj = {}) {
    // super();

    this.#field = {
      type              : fileObj.type        || '',
      label             : fileObj.label       || '',
      name              : fileObj.name        || '',
      placeholder       : fileObj.placeholder || '',
      //
      readonly          : fileObj.readonly || false,
      disabled          : fileObj.disabled || false,
      required          : fileObj.required || false,
      //
      validateRealtime  : fileObj.required || true,
      validateCustomFunction: fileObj.validateCustomFunction || null, // function

      //
      fieldName     : fileObj.fieldName ? fileObj.fieldName : fileObj.name || '',
      min           : fileObj.min           || null,
      max           : fileObj.max           || null,
      defaultValue  : fileObj.defaultValue  || '',

      // select, radio ....
      options: fileObj.options || [],
    };
  }

  getFieldName () { return this.#field.fieldName  ; }

  // getSrc () { return this.#field.src  ; }
  // getFile() { return this.#field.file ; }
  //
  // setSrc (src ) { return this.#field.src  = src ; }
  // setFile(file) { return this.#field.file = file; }

  toObject() {
    return Object.assign({}, this.#field);
  }
  // system
  toJSON  () { return this.toObject(); } // JSON.stringify
}
