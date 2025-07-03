type SchemaOf<T extends object | undefined> = Record<
  keyof T,
  'string' | 'number' | 'boolean' | 'object'
>;

export default SchemaOf;
